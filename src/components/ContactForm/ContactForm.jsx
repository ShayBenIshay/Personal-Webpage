import { useState } from "react";
import white_arrow from "../../assets/white-arrow.png";

const ContactForm = ({ onClose = null }) => {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = (formData) => {
    const newErrors = {};
    const name = formData.get("name");
    const message = formData.get("message");

    if (name.length < 1) {
      newErrors.name = "Name is required";
    }
    if (message.length < 1) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setResult("");
    setErrors({});

    const formData = new FormData(event.target);

    if (!validateForm(formData)) {
      setIsLoading(false);
      return;
    }

    try {
      if (!process.env.REACT_APP_WEB3FORMS_KEY) {
        throw new Error("Web3Forms API key is not configured");
      }

      formData.append("access_key", process.env.REACT_APP_WEB3FORMS_KEY);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        if (onClose) {
          setTimeout(onClose, 2000); // Close modal after success message
        }
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setResult(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <fieldset className="form__fieldset" disabled={isLoading}>
        <legend>Fill this form to email me</legend>
        <div className="form__group">
          <label className="form__label" htmlFor="name">
            Your name
          </label>
          <input
            className={`formInput ${errors.name ? "form__input--error" : ""}`}
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            aria-describedby={errors.name ? "nameError" : undefined}
          />
          {errors.name && (
            <span id="nameError" className="form__error">
              {errors.name}
            </span>
          )}
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="message">
            Write your message here
          </label>
          <textarea
            className={`formInput ${
              errors.message ? "form__input--error" : ""
            }`}
            id="message"
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
            aria-describedby={errors.message ? "messageError" : undefined}
          ></textarea>
          {errors.message && (
            <span id="messageError" className="form__error">
              {errors.message}
            </span>
          )}
        </div>
      </fieldset>
      <button
        type="submit"
        className="btn dark-btn"
        disabled={isLoading}
        aria-busy={isLoading}
      >
        {isLoading ? "Sending..." : "Submit"}
        <img
          src={white_arrow}
          alt=""
          width="46"
          height="45"
          aria-hidden="true"
        />
      </button>
      {result && (
        <div
          className={`form__result ${
            result.includes("Error")
              ? "form__result--error"
              : "form__result--success"
          }`}
          role="alert"
        >
          {result}
        </div>
      )}
    </form>
  );
};

export default ContactForm;
