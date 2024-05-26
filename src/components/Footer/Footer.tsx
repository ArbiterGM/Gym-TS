import "./Footer.css";
import github from "../../assets/github.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="blur footer-blur-1"></div>
      <div className="blur footer-blur-2"></div>
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={github} alt="github-logo" />
          <img src={instagram} alt="instagram-logo" />
          <img src={linkedin} alt="linkedin-logo" />
        </div>
        <div className="logo-div">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
