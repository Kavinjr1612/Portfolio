import { Terminal } from 'lucide-react';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={`section ${styles.aboutSection}`} id="about">
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <h2 className="text-gradient">About Me</h2>
          
          <div className={styles.textContent}>
            <p className={styles.paragraph}>
              I am an <span className={styles.highlight}>MCA student</span> passionate about cloud computing, web development, and building practical solutions using modern technologies.
            </p>
            
            <p className={styles.paragraph}>
              My journey combines <span className={styles.highlight}>AWS cloud services</span>, full-stack application development, and AI-assisted workflows to transform ideas into working products. I enjoy diving deep into technical challenges and staying committed until an elegant solution is found.
            </p>
            
            <p className={styles.paragraph}>
              Whether it involves deploying scalable cloud infrastructure, improving application performance, or building user-focused web interfaces, I approach each project with curiosity, persistence, and a strong willingness to learn.
            </p>
            
            <p className={styles.paragraph}>
              Currently, I am expanding my expertise in AWS, scalable architectures, and full-stack development while seeking <span className={styles.highlight}>internship and developer opportunities</span> where I can contribute, learn, and grow.
            </p>
          </div>
        </div>
        
        <div className={styles.visual}>
          <div className={styles.glowBox}>
            <div className={styles.innerContent}>
              <Terminal size={48} className="mb-4 mx-auto" color="var(--accent-primary)" />
              <h3>100%</h3>
              <p>Commitment to<br/>Continuous Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
