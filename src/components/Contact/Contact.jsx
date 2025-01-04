import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
import { useState } from "react";
import contactsData from "../../data/contactsData";
import "./contact.css";

const Contact = () => {
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
    <article id="contact" className="contact">
      <h1 className="contact__h1">Get in Touch</h1>

      <section className="smallpage contact__section">
        <section
          className="section__section l"
          aria-label="Contact Information"
        >
          <h2 className="contact__h2">My Contact Form</h2>
          <p className="contact__p">
            Feel free to reach out through this contact form or the other
            contact information below. <strong>collaborations</strong>,{" "}
            <strong>feedback</strong> and <strong>job opportunities</strong> are
            more than welcome.
          </p>

          <ul className="contact__ul">
            <li>
              <a
                className="contact__a"
                href={`mailto:${contactsData.email.emailAddress}`}
                aria-label="Email address"
              >
                <img
                  className="contact__li contact__img"
                  src={mail_icon}
                  alt="Email Icon"
                  width="25"
                  height="25"
                />
                {contactsData.email.emailAddress}
              </a>
            </li>
            <li>
              <a
                className="contact__a"
                href={contactsData.phone.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Phone number"
              >
                <img
                  className="contact__li contact__img"
                  src={phone_icon}
                  alt="Phone Icon"
                  width="25"
                  height="25"
                />
                {contactsData.phone.phoneNumber}
              </a>
            </li>
            <li>
              <img
                className="contact__li contact__img"
                src={location_icon}
                alt="Location pin"
                width="25"
                height="25"
              />
              <address className="contact__address">Haifa, Israel</address>
            </li>
          </ul>
        </section>

        <section className="section__section r" aria-label="Contact Form">
          <h2 className="contact__h2">
            Send me a message{" "}
            <img
              className="contact__img2"
              src={msg_icon}
              alt="Message Icon"
              width="35"
              height="35"
            />
          </h2>

          <form className="form" onSubmit={onSubmit} noValidate>
            <fieldset className="form__fieldset" disabled={isLoading}>
              <legend>Fill this form to email me</legend>
              <div className="form__group">
                <label className="form__label" htmlFor="name">
                  Your name
                </label>
                <input
                  className={`formInput ${
                    errors.name ? "form__input--error" : ""
                  }`}
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
          </form>
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
        </section>
      </section>
    </article>
  );
};

export default Contact;
