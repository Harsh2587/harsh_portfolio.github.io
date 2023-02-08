import "./Contact.css";
import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';
import harsh_cv_updated from "../../assets/Harsh_CV_Update.pdf";


const Contact = (e) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_12c192l', 'template_vnfuqy8', form.current, 'nXEjDaFmBv8o9TwDa')
      .then((result) => {
          console.log(result.text);
          console.log("Message Sent Successfully");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id="contacts">
      <div className="getintouch">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>
    
        <div className="form-container">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              placeholder="Your Full Name"
              required
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />

            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <div>
              <button type="submit" value="Send" className="btn-primary">
                Send Message
              </button>
            </div>
            <div>
              <a href={harsh_cv_updated} className="btn" target="true">
                Download CV
              </a>
            </div>
          </form>
        </div>
    </div>
  );
};

export default Contact;
