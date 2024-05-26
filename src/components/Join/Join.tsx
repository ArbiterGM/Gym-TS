import { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";
const Join = () => {
  const form = useRef<any>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm("service_xzrn7oy", "template_ga8wqde", form.current, {
        publicKey: "NXPJJlpQimojMsD3p",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="join" id="join-us">
      <div className="join-left">
        <hr />
        <div>
          <p className="stroke-text">READY TO </p>
          <p>LEVEL UP </p>
        </div>
        <div>
          <p>YOUR BODY </p>
          <p className="stroke-text">WITH US?</p>
        </div>
      </div>
      <div className="join-right">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            required
            type="email"
            name="user_email"
            placeholder="Enter your email address"
          />
          <button className="btn btn-join">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
