import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Private function to reset form fields
  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  // Private function to send email using emailjs
  const sendEmailJS = () => {
    return emailjs.sendForm(
      "service_qx5j1or", // Service ID
      "template_esl3o96", // Template ID
      form.current, // The form reference
      "tGi4PvF6WoqklObkG" // User ID (API Key)
    );
  };

  // Form submission handler
  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    if (!validateEmail(email)) {
      setStatus("invalid-email");
      return;
    }

    setLoading(true);
    setStatus(null);

    // Use the private sendEmailJS function
    sendEmailJS()
      .then(
        () => {
          setStatus("success");
          resetForm(); // Reset form on success
        },
        () => {
          setStatus("error");
        }
      )
      .finally(() => setLoading(false)); // Stop loading after response
  };

  return (
    <div className="contact-container" id="contact">
      <div className="text">
        <h1 className="heading blue-text">Contact Us</h1>
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
            placeholder="Full Name"
            name="from_name"
            aria-label="Full Name"
            onChange={(e) => {
              setName(e.target.value);
              setStatus(null);
            }}
            value={name}
          />
          <input
            className="email"
            type="email"
            placeholder="Email Address"
            name="from_email"
            aria-label="Email Address"
            onChange={(e) => {
              setEmail(e.target.value);
              setStatus(null);
            }}
            value={email}
          />
        </div>
        <textarea
          rows="4"
          cols="50"
          placeholder="Type your message here"
          name="message"
          aria-label="Message"
          onChange={(e) => {
            setMessage(e.target.value);
            setStatus(null);
          }}
          value={message}
        />

        {status === "error" && (
          <p className="status error">
            Please fill in all fields correctly.
          </p>
        )}
        {status === "invalid-email" && (
          <p className="status error">Please enter a valid email address.</p>
        )}
        {status === "success" && <p className="status success">Message sent!</p>}
        {loading && <p className="status">Sending message...</p>}

        <button disabled={loading || !message || !name || !email}>
          {loading ? "Sending..." : "Send Message"}
        </button>
        <img src="/brand/network.png" alt="network image" />
      </form>
    </div>
  );
}
