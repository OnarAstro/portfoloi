import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../animationTiefiles/done.json";
import contactAnimation from "../../animationTiefiles/contact.json";
const Contact = () => {
  const [state, handleSubmit] = useForm("myzgpnke");

  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"></span>
        Contact Us
      </h1>
      <p className="sub-title">
        Contact us for more information and Get notified when I publish
        something new.
      </p>

      <div style={{ justifyContent: "space-between" }} className="flex">
        <form onSubmit={handleSubmit} className="">
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your Message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button disabled={state.submitting} className="submit" type="submit">
            {state.submitting ? (
              <Lottie
                loop={false}
                style={{ height: "90px" }}
                animationData={doneAnimation}
              />
            ) : (
              "Submit"
            )}
          </button>
          {state.succeeded && (
            <p
              className="flex"
              style={{ fontSize: "18px", marginTop: "1.7rem" }}
            >
              {" "}
              <Lottie
                loop={false}
                style={{ height: "90px" }}
                animationData={doneAnimation}
              />
              Your message has been sent.
            </p>
          )}
        </form>

        <div className="animation">
          <Lottie
            className="contact-animation"
            style={{ height: "355px" }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
