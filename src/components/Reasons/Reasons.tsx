import "./Reasons.css";

import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

const Reasons = () => {
  return (
    <div className="reasons" id="reasons">
      <div className="reasons-left">
        <img src={image1} alt="reason-img" />
        <img src={image2} alt="reason-img" />
        <img src={image3} alt="reason-img" />
        <img src={image4} alt="reason-img" />
      </div>
      <div className="reasons-right">
        <p>Some Reasons</p>

        <div>
          <p className="stroke-text">Why </p>
          <p>Choose Us</p>
        </div>

        <div className="details-right">
          <div>
            <img src={tick} alt="Tick"></img>
            <p>OVER 140+ EXPERT COACHS</p>
          </div>
          <div>
            <img src={tick} alt="Tick" />
            <p>TRAIN SMARTER AND FASTER THAN BEFORE</p>
          </div>
          <div>
            <img src={tick} alt="Tick"></img>
            <p>1 FREE PROGRAM FOR NEW MEMBER</p>
          </div>
          <div>
            <img src={tick} alt="Tick" />
            <p>RELIABLE PARTNERS</p>
          </div>
        </div>
        <p style={{ color: "var(--gray)", fontWeight: "normal" }}>
          OUR PARTNERS
        </p>

        <div className="partners">
          <img src={nb} alt="" />
          <img src={adidas} alt="" />
          <img src={nike} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
