import React, { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Twitter, Instagram, Zap } from 'lucide-react';
import styles from './Contact.module.css';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="Contact" className={styles.container}>
      <div className={styles.maxWidth}>
        {/* Header */}
        <div className={styles.header}>

          <h2 className={styles.title}>
            Get In <span className={styles.highlight}>Touch</span>
          </h2>
          <p className={styles.subtitle}>Have a project in mind or want to discuss a potential opportunity? Feel free to reach out.</p>
        </div>

        {/* Main Content Grid */}
        <div className={styles.grid}>
          
          {/* Left Column - Form */}
          <div className={styles.formContainer}>
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Send Me a Message</h2>
              
              <div className={styles.formGrid}>
                {/* Name and Email Row */}
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
                    />
                  </div>
                </div>

                {/* Subject */}
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
                  />
                </div>

                {/* Message */}
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
                  />
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className={styles.submitBtn}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            {/* Contact Information */}
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Contact Information</h2>
              
              <div className={styles.contactList}>
                {/* Email */}
                <div className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <Mail className={styles.emailIcon} />
                  </div>
                  <div>
                    <p className={styles.contactLabel}>Email</p>
                    <a href="mailto:shubhashissahu261@gmail.com" className={styles.contactLink}>
                      shubhashissahu261@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <MapPin className={styles.locationIcon} />
                  </div>
                  <div>
                    <p className={styles.contactLabel}>Location</p>
                    <p className={styles.contactText}>Bhubaneswar, In</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Connect With Me</h2>
              
              <div className={styles.socialLinks}>
                <a href="https://github.com/Shubhashissahu" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <Github className={styles.socialIcon} />
                </a>
                <a href="www.linkedin.com/in/shubhashis-sahu-2493b2292" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <Linkedin className={styles.socialIcon} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <Twitter className={styles.socialIcon} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <Instagram className={styles.socialIcon} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <Zap className={styles.socialIcon} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};