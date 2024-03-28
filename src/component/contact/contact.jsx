import {React ,useState } from "react";
import './contact.css'
import {
  FaPaperPlane,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
function Contact() {
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform any action with the form data, such as sending it to an API
    console.log(formData);
    // Clear the form fields after submission
    setFormData({
      name: "",
      email: "",
      project: "",
      message: ""
    });
  }
  return (
    <section className="contact" id="contact">
      <h1 className="heading">contact me</h1>
      <div className="contact__wrapper">
        <div className="content">
          <h3 className="title">CONTACT INFO.</h3>
          <div className="contact__info">
            <h3>
              <FaEnvelope className="margin" />
              <a href="mailto:odewumiolajide@gmail.com">
                odewumiolajide@gmail.com
              </a>
            </h3>
            <h3>
              <FaPhone className="margin" />
              <a href="tel:+2348164228535">+2348164228535</a>
            </h3>
            <h3>
              <FaPhone className="margin" />
              <a href="tel:+2348037397664">+2348037397664</a>
            </h3>
            <h3>
              <FaMapMarkerAlt className="margin"/> Dopemu, Agege Lagos.
            </h3>
          </div>
        </div>
        <form
          action="https://formspree.io/f/xoqzqgge"
          method="POST"
          onChange={handleSubmit}
        >
          <input type="text" placeholder="name" className="box" />
          <input
            type="email"
            name="email"
            placeholder="email"
            className="box"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="project type"
            name="project"
            className="box"
            required
            onChange={handleChange}
          />
          <textarea
            name="message"
            cols="30"
            rows="10"
            className="box message"
            placeholder="message"
            required
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="btn">
            send <FaPaperPlane />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
