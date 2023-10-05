import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import style from './Contact.module.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const formRef = useRef();

  const handleChange = async (e) => {
    setData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      if (data.name === "" || data.email === "" || data.message === "") {
        toast.info("All fields required", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return false;
      }

      emailjs.sendForm(
        'service_byhwo1n',
        'template_0g12q3h',
        formRef.current,
        'TSmL_Ezqv323M6J3q',
      );

      setData({ name: "", email: "", message: "" });

      toast.success("message sent successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={style.contact}>
      <div className="container">
        <div className={style.content}>
          <h2 className="section_title">
            Contact <span>Me</span>
          </h2>

          <form
            ref={formRef}
            onSubmit={sendEmail}
          >
            {/* name */}
            <div className={style.field}>
              <input
                className={style.name}
                type="text"
                name="name"
                id="name"
                placeholder='Name'
                value={data.name}
                onChange={handleChange}
              />
              <span className={style.layer}></span>
            </div>

            {/* email */}
            <div className={style.field}>
              <input
                className={style.email}
                type="email"
                name="email"
                id="email"
                placeholder='Email'
                value={data.email}
                onChange={handleChange}
              />
              <span className={style.layer}></span>
            </div>

            {/* message */}
            <div className={style.field}>
              <textarea
                className={style.message}
                name="message"
                id="message"
                placeholder='Message'
                value={data.message}
                onChange={handleChange}
              ></textarea>
              <span className={style.layer}></span>
            </div>

            {/* submit */}
            <button
              type="submit"
              className='btn_1'
            >
              <span>Send Message</span>
            </button>
          </form>

        </div>
      </div>
    </section>
  )
}

export default Contact
