import "./Programs.css";
import { programsData } from "../../data/programsData.jsx";
import rightArrow from "../../assets/rightArrow.png";
const Programs = () => {
  return (
    <div className="Programs" id="programs">
      <div className="programs-header">
        <p className="stroke-text">Explore Our</p>
        <p>Programs</p>
        <p className="stroke-text">To Shape You</p>
      </div>

      <div className="program-categories">
        {programsData.map((program: any) => (
          <div className="category">
            {program.image}
            <p>{program.heading}</p>
            <p>{program.details}</p>
            <div className="join-now">
              <p>Join Now</p>
              <img src={rightArrow} alt="arrow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
