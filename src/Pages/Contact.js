import React from "react";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";

export default function Contact() {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>dummy@one.com</h5>
            <a href="mailto:man@man.com">Send a message</a>
          </article>

          <article className="contact__option">
            <AiOutlineWhatsApp className="contact_option-icon" />
            <h4>WahtsApp</h4>
            <h5>+79251805132</h5>
            <a href="https://api.whatsapp.com/send?phone=+79251805132">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <AiOutlineMail className="contact_option-icon" />
            <h4>Vkontakte</h4>
            <h5>+79251805132</h5>
            <a href="https://vk.me/ivanvalerievich">Send a message</a>
          </article>
        </div>
        {/* end of contact options */}
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
