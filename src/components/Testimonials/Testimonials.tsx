import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import { useState } from "react";

import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

import { motion } from "framer-motion";

const Testimonials = () => {
  const transition = { type: "spring", duration: 3 };
  const [selected, setSelected] = useState(0);
  const testimonialLength = testimonialsData.length;

  return (
    <div className="testimonials">
      <div className="testimonial-left">
        <p>Testimonials</p>
        <p className="stroke-text">What They</p>
        <p>Say About Us</p>
        <motion.p
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
        >
          {testimonialsData[selected].review}
        </motion.p>
        <p>
          <p style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}
          </p>
          <p> - {testimonialsData[selected].status}</p>
        </p>
      </div>
      <div className="testimonial-right">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image}
          alt="testimonial-image"
        />
        <div className="arrows">
          <img
            onClick={() => {
              selected === 0
                ? setSelected(testimonialLength - 1)
                : setSelected((prev) => prev - 1);
            }}
            src={leftArrow}
          />
          <img
            onClick={() => {
              selected === testimonialLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
            src={rightArrow}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
