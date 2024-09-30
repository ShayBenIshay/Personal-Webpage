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

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

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
      console.log("Error", data);
      setResult(data.message);
    }
  };

  // RESTRUCTURE OF HTML AND CSS CLASSES NEEDED
  return (
    <article id="contact" className="contact">
      <h1 className="contact__h1">Get in Touch</h1>
      <p>I'd really like to hear from you!</p>
      <section className="smallpage contact__section">
        <section className="section__section">
          <h2 class="contact__h2 nowrap">My Contact Form</h2>
          <p className="contact__p">
            Feel free to reach out throught this contact form or the other
            contact information below. <strong>collabarations</strong>,
            <strong>feedbacks</strong> and <strong>job opportunities </strong>
            are more then welcome.
          </p>

          <ul className="contact__ul">
            <li>
              <a
                className="container__a"
                href={`mailto:${contactsData.email.emailAddress}`}
              >
                <img src={mail_icon} alt="Eamil Icon" width="64" height="48" />
                {contactsData.email.emailAddress}
              </a>
            </li>
            <li>
              <a
                className="container__a"
                href={contactsData.phone.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={phone_icon} alt="" />
                {contactsData.phone.phoneNumber}
              </a>
            </li>
            <li>
              <img src={location_icon} alt="" />
              <address>Haifa, Israel</address>
            </li>
          </ul>
        </section>

        <section className="section__section">
          <h2 className="contact__h2 nowrap">
            Send me a message{" "}
            <img
              className="contact__img"
              src={msg_icon}
              alt="Message Icon"
              width="99"
              height="80"
            />
          </h2>

          <form className="form" onSubmit={onSubmit}>
            <fieldset className="form__fieldset">
              <legend>fill this form to email me</legend>
              <p>
                <label className="form__label">Your name</label>
                <input
                  className="formInput"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </p>
              <p>
                <label className="form__label">Write your messages here</label>
                <textarea
                  className="formInput"
                  name="message"
                  rows="6"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </p>
            </fieldset>
            <button type="submit" className="btn dark-btn">
              Submit now
              <img src={white_arrow} alt="scroll up" width="46" height="45" />
            </button>
          </form>
          <span>{result}</span>
        </section>
      </section>
    </article>
  );
};

export default Contact;
