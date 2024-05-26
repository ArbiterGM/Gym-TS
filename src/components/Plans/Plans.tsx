import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";

const Plans = () => {
  return (
    <div className="plans-container">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header" style={{ gap: "3.6rem" }}>
        <p className="stroke-text">READY TO START</p>
        <p>YOUR JOURNEY</p>
        <p className="stroke-text">NOW WITH US</p>
      </div>

      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <p>{plan.name}</p>
            <p>$ {plan.price}</p>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="tick" />
                  <p key={i}>{feature}</p>
                </div>
              ))}
            </div>

            <div>
              <a href="#">See more benefits &rarr;</a>
            </div>

            <button className="btn">Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
