import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import useNotify from "../../../../Hooks/useNotify";
import style from "./Contact.module.css";

const Contact = () => {
  const formRef = useRef();

  const [emailData, setEmailData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const notify = useNotify();

  const handleChange = async (e) => {
    setEmailData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      if (
        emailData.name === "" ||
        emailData.email === "" ||
        emailData.message === ""
      ) {
        return notify("info", "All fields required");
      }

      emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_YOUR_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_YOUR_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_YOUR_PUBLIC_KEY
      );

      notify("success", "Your Message is sent");
      setEmailData({ name: "", email: "", message: "" });
    } catch (err) {
      notify("error", "Some errors happened");
      console.error(err);
    }
  };

  return (
    <section className={style.contact}>
      <h2 className="section_title">
        Contact <span>Me</span>
      </h2>

      <form ref={formRef} onSubmit={sendEmail}>
        {/* Name */}
        <div>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className={style.name}
            value={emailData.name}
            onChange={handleChange}
          />
          <span className={style.layer}></span>
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className={style.email}
            value={emailData.email}
            onChange={handleChange}
          />
          <span className={style.layer}></span>
        </div>

        {/* Message */}
        <div>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            className={style.message}
            value={emailData.message}
            onChange={handleChange}
          ></textarea>
          <span className={style.layer}></span>
        </div>

        {/* submit */}
        <button type="submit" className="first_btn">
          <span>Send Message</span>
        </button>
      </form>
    </section>
  );
};

export default Contact;
