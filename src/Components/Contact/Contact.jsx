import { useState } from "react";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="Contact" className={styles.container}>
      <div className={styles.maxWidth}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            Get In <span className={styles.highlight}>Touch</span>
          </h2>
          <p className={styles.subtitle}>
            Have a project in mind or want to discuss a potential opportunity?
            Feel free to reach out.
          </p>
        </div>

        {/* Main Grid */}
        <div className={styles.grid}>
          {/* Left: Form */}
          <div className={styles.formContainer}>
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Send Me a Message</h2>

              <form className={styles.formGrid} onSubmit={handleSubmit}>
                <div className={styles.inputRow}>
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>
                      Name <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={styles.input}
                      required
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label className={styles.label}>
                      Email <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className={styles.input}
                      required
                    />
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>
                    Subject <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>
                    Message <span className={styles.required}>*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows="6"
                    className={styles.textarea}
                    required
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Right: Info + Social */}
          <div className={styles.rightColumn}>
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Contact Information</h2>

              <div className={styles.contactList}>
                <div className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <Mail />
                  </div>
                  <div>
                    <p className={styles.contactLabel}>Email</p>
                    <a
                      href="mailto:shubhashissahu261@gmail.com"
                      className={styles.contactLink}
                    >
                      shubhashissahu261@gmail.com
                    </a>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <MapPin />
                  </div>
                  <div>
                    <p className={styles.contactLabel}>Location</p>
                    <p className={styles.contactText}>Bhubaneswar, IN</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Connect With Me</h2>

              <div className={styles.socialLinks}>
                <a
                  href="https://github.com/Shubhashissahu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <Github />
                </a>

                <a
                  href="https://www.linkedin.com/in/shubhashis-sahu-2493b2292"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <Linkedin />
                </a>

                <a href="#" className={styles.socialLink}>
                  <Twitter />
                </a>

                <a href="#" className={styles.socialLink}>
                  <Instagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
