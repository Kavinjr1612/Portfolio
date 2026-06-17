import { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "b7c777fd-084c-401f-9aac-ec534d3f4c84",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <section className={`section ${styles.contactSection}`} id="contact">
      <div className="container">
        <div className={styles.grid}>
          
          <div className={styles.contactInfo}>
            <div>
              <h2 className="text-gradient mb-4">Let's Connect</h2>
              <p>
                I'm currently looking for new opportunities as a Cloud or Full Stack Developer Intern. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <a href="mailto:karaja1612@gmail.com" className={styles.infoItem}>
              <div className={styles.iconBox}>
                <Mail size={24} />
              </div>
              <div className={styles.details}>
                <h4>Email</h4>
                <span>karaja1612@gmail.com</span>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/kavineshsr/" target="_blank" rel="noopener noreferrer" className={styles.infoItem}>
              <div className={styles.iconBox}>
                <FaLinkedin size={24} />
              </div>
              <div className={styles.details}>
                <h4>LinkedIn</h4>
                <span>linkedin.com/in/kavineshsr</span>
              </div>
            </a>

            <a href="https://github.com/Kavinjr1612" target="_blank" rel="noopener noreferrer" className={styles.infoItem}>
              <div className={styles.iconBox}>
                <FaGithub size={24} />
              </div>
              <div className={styles.details}>
                <h4>GitHub</h4>
                <span>Code repositories</span>
              </div>
            </a>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                className={styles.formControl} 
                placeholder="John Doe"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                className={styles.formControl} 
                placeholder="john@example.com"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                className={styles.formControl} 
                placeholder="Your message..."
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                required
              ></textarea>
            </div>
            
            <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
              Send Message <Send size={18} />
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
