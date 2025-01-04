import "./footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer__content">
      <p className="footer__text">Built by Shay</p>
      <p className="footer__copyright">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
