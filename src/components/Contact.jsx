import msg_icon from "../assets/msg-icon.png";
import mail_icon from "../assets/mail-icon.png";
import phone_icon from "../assets/phone-icon.png";
import location_icon from "../assets/location-icon.png";
import white_arrow from "../assets/white-arrow.png";
import { useState } from "react";
import contactsData from "../data/contactsData";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    console.log(import.meta.env.VITE_WEB3FORMS_KEY);
    formData.append("access_key", process.env.VITE_WEB3FORMS_KEY);

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

  return (
    <div className="sixth-element">
      <div className="contact-title">
        {/* <h3>CONTACT ME</h3> */}
        <h2>Get in Touch</h2>
      </div>
      <div className="contact">
        <div className="contact-col">
          <h3>
            Send me a message <img src={msg_icon} alt="" />
          </h3>
          <p>
            Feel free to reach out throught contact form or any of the contact
            information below. collabarations, feedbacks and job opportunities
            are more then welcome.
          </p>

          <ul>
            <li>
              <a href={contactsData.email.href}>
                <img src={mail_icon} alt="" /> {contactsData.email.emailAddress}
              </a>
            </li>
            <li>
              <a
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
              Haifa, Israel
            </li>
          </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input
              className="formInput"
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
            <label>Phone Number (optional)</label>
            <input
              className="formInput"
              type="tel"
              name="phone"
              placeholder="Enter your mobile number"
            />
            <label>Write your messages here</label>
            <textarea
              className="formInput"
              name="message"
              rows="6"
              placeholder="Enter your message"
              required
            ></textarea>
            <button type="submit" className="btn dark-btn">
              Submit now <img src={white_arrow} alt="" />
            </button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
