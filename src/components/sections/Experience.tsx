import { GraduationCap, Award, BookOpen } from 'lucide-react';
import styles from './Experience.module.css';

const Experience = () => {
  const experiences = [
    {
      type: 'certification',
      date: '27 November 2025',
      title: 'AWS Certified Cloud Practitioner (CLF-C02)',
      institution: 'Amazon Web Services',
      icon: <Award size={20} />
    },
    {
      type: 'education',
      date: '2025 – Present',
      title: 'Master of Computer Applications',
      institution: 'Kongu Engineering College',
      icon: <GraduationCap size={20} />
    },
    {
      type: 'education',
      date: '2022 – 2025',
      title: 'Bachelor of Science in Computer Science',
      institution: 'Dr. N.G.P Arts and Science College',
      icon: <BookOpen size={20} />
    }
  ];

  return (
    <section className="section" id="experience">
      <div className="container">
        <div className={styles.header}>
          <h2 className="text-gradient">Experience & Education</h2>
          <p>My academic journey and professional certifications.</p>
        </div>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.marker}>
                {exp.icon}
              </div>
              <div className={styles.content}>
                <span className={styles.date}>{exp.date}</span>
                <h3 className={styles.title}>{exp.title}</h3>
                <p className={styles.institution}>{exp.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
