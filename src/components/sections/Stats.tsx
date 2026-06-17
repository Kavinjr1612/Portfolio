import styles from './Stats.module.css';

const Stats = () => {
  const stats = [
    { value: '5+', label: 'Cloud Projects' },
    { value: '10+', label: 'AWS Services Used' },
    { value: '100%', label: 'Commitment' },
    { value: '2025', label: 'AWS Certified' }
  ];

  return (
    <section className={styles.statsSection}>
      <div className="container">
        <div className={styles.grid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.value}>{stat.value}</div>
              <div className={styles.label}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
