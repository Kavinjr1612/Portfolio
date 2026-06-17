import { Cloud, Code2, Wrench } from 'lucide-react';
import styles from './Skills.module.css';

const Skills = () => {
  const categories = [
    {
      title: 'Cloud Infrastructure',
      icon: <Cloud size={24} />,
      skills: ['AWS EC2', 'AWS S3', 'VPC', 'Route53', 'Auto Scaling Groups', 'Application Load Balancer', 'AMI', 'CloudWatch', 'RDS', 'Networking Fundamentals']
    },
    {
      title: 'Development',
      icon: <Code2 size={24} />,
      skills: ['TypeScript', 'JavaScript', 'Java', 'SQL', 'PostgreSQL', 'React', 'Node.js']
    },
    {
      title: 'Tools & Workflows',
      icon: <Wrench size={24} />,
      skills: ['Git', 'GitHub', 'Linux', 'VS Code', 'AI-Assisted Development', 'CI/CD']
    }
  ];

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className={styles.skillsHeader}>
          <h2 className="text-gradient">Technical Arsenal</h2>
          <p>Technologies I use to build scalable and efficient solutions.</p>
        </div>

        <div className={styles.grid}>
          {categories.map((category, index) => (
            <div key={index} className={styles.categoryCard}>
              <div className={styles.categoryHeader}>
                <div className={styles.iconWrapper}>
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              <div className={styles.skillsList}>
                {category.skills.map((skill, idx) => (
                  <span key={idx} className={styles.skillBadge}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
