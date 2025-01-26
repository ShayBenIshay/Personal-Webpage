import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import contactsData from "../../data/contactsData";
import ContactForm from "../ContactForm/ContactForm";
import "./contact.css";

const Contact = () => {
  return (
    <article id="contact" className="contact">
      <h1 className="contact__h1">Get in Touch</h1>

      <section className="smallpage contact__section">
        <section
          className="section__section l"
          aria-label="Contact Information"
        >
          <h2 className="contact__h2">
            I'd really like to hear from you!
            <img
              className="contact__img2"
              src={msg_icon}
              alt="Message Icon"
              width="35"
              height="35"
            />
          </h2>
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
          <ContactForm />
        </section>
      </section>
    </article>
  );
};

export default Contact;
