import "./Contact.css";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-static">
        <h1 className="contact-title">Get in Touch</h1>
        <p>
          If you would like to get in touch, feel free to reach out via email or
          connect with me on LinkedIn.
        </p>
        <div className="contact-links">
          <button className="contact-buttons">
            <a href="mailto:angeloalencarbianchi@gmail.com" target="_blank"
             rel="noopener noreferrer"
             className="contact-linkedin"
            >
            <MdEmail size={24} />
            </a>
          </button>

          <button className="contact-buttons">
            <a href="/assets/CV.pdf" target="_blank"
            className="contact-linkedin"
            download >
              Check out my résumé!
            </a>
          </button>

          <button className="contact-buttons">
            <a href="https://www.linkedin.com/in/angeloabianchi" target="_blank"
             rel="noopener noreferrer"
             className="contact-linkedin"
            >
            <FaLinkedinIn size={24} />
            </a>
          </button>

        </div>

      </div>
    </div>
  );
}

export default Contact;
