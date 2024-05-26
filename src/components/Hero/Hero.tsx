import React from "react";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
import Header from "../Header/Header";
import { Link } from "react-scroll";

const Hero = () => {
  const transition = { duration: 3, type: "spring" };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="hero-left">
        <Header />
        <div className="the-best">
          <motion.div
            initial={{ left: mobile ? "178px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <p>THE BEST FITNESS CLUB IN THE TOWN</p>
        </div>
        <div className="hero-text">
          <div>
            <p className="stroke-text">Shape </p>
            <p>Your</p>
          </div>
          <div>
            <p>Ideal body</p>
          </div>
          <div>
            <p>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </p>
          </div>
        </div>

        <div className="figures">
          <div>
            <p>
              <NumberCounter end={140} start={100} delay={4} preFix="+" />
            </p>
            <p>expert coaches</p>
          </div>
          <div>
            <p>
              <NumberCounter end={978} start={878} delay={4} preFix="+" />
            </p>
            <p>Members joined</p>
          </div>
          <div>
            <p>
              <NumberCounter end={50} delay={2} preFix="+" />
            </p>
            <p>fitness programs</p>
          </div>
        </div>

        <div className="hero-btns">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className="hero-right">
        <Link className="btn" to="contact" spy={true} smooth={true}>
          Join now
        </Link>

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={heart} alt="" />
          <p>Heart Rate</p>
          <p>116 bpm</p>
        </motion.div>

        <img className="hero-img" src={hero_image} alt="" />
        <motion.img
          initial={{ right: mobile ? "11rem" : "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          className="hero-back"
          src={hero_back}
          alt=""
        />

        <div className="calories">
          <img src={calories} alt="" />
          <div>
            <p>Calories burned</p>
            <p>220 kcal</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
