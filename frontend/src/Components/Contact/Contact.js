import "./Contact.css";

const Contact = () => {
  return (
    <div className="contactPage">
      <div className="contact-static">
        <h1>Contact Me</h1>
        <p>
          If you would like to get in touch, feel free to reach out via email or connect with me on LinkedIn.
          I'm always open to discussing new projects, collaborations, or just having a chat about technology!
        </p>
      </div>
      <div className="contact-dynamic">
        {/* Contact form or details will go here */}
      </div>
    </div>
  );
}

export default Contact;
