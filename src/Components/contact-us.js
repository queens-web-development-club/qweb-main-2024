import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState();

  // Uses emailjs to send emails
  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !email || !message) return;

    setName("");
    setEmail("");
    setMessage("");

    emailjs
      .sendForm(
        "service_qx5j1or",
        "template_esl3o96",
        form.current,
        "tGi4PvF6WoqklObkG"
      )
      .then(
        (result) => {
          // console.log(result.text);
          setStatus("success");
        },
        (error) => {
          // console.log(error.text);
          setStatus("error");
        }
      );
  };

  return (
    <div className="contact-container" id="contact">
      <div className="text">
        <h1 className="heading blue-text">contact us</h1>
        <p className="description">
          Would you like to get a website made or know an organization who does?
          Want to learn more about what we do and how to join? Whatever your
          question is, feel free to send us a message!
        </p>
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <div>
          <input
            className="name"
            type="text"
            placeholder="full name"
            name="from_name"
            onChange={(e) => {
              setName(e.target.value);
              setStatus();
            }}
            value={name}
          />
          <input
            className="email"
            type="email"
            placeholder="email address"
            name="from_email"
            onChange={(e) => {
              setEmail(e.target.value);
              setStatus();
            }}
            value={email}
          />
        </div>
        <textarea
          rows="4"
          cols="50"
          placeholder="type your message here"
          name="message"
          onChange={(e) => {
            setMessage(e.target.value);
            setStatus();
          }}
          value={message}
        />

        {status === "error" && (
          <p className="status error">
            Sorry, something went wrong. Please try again in a few minutes
          </p>
        )}
        {status === "success" && <p className="status">Message sent!</p>}

        <button disabled={!message || !name || !email}>send message</button>
        <img src="/brand/network.png" alt="network image" />
      </form>
    </div>
  );
}
