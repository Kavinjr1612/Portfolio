import { Server, Network, Database, Globe, Cloud } from 'lucide-react';
import styles from './AwsProjects.module.css';

const AwsProjects = () => {
  const projects = [
    {
      title: 'LearnFlow Infrastructure',
      icon: <Cloud className={styles.projectIcon} size={32} />,
      features: [
        'Custom AWS VPC for network isolation',
        'Custom AMI for standardized deployments',
        'Auto Scaling Group for handling traffic spikes',
        'Application Load Balancer for distributing load',
        'CloudWatch Monitoring for health tracking',
        'Highly scalable architecture design'
      ],
      tech: ['VPC', 'EC2', 'AMI', 'ASG', 'ALB', 'CloudWatch']
    },
    {
      title: 'EC2 + RDS Integration',
      icon: <Database className={styles.projectIcon} size={32} />,
      features: [
        'Application hosted on EC2 instances',
        'Database deployed separately on RDS',
        'Secure communication using Security Groups',
        'Optimized for database performance and backup'
      ],
      tech: ['EC2', 'RDS', 'Security Groups']
    },
    {
      title: 'AWS Networking Architecture',
      icon: <Network className={styles.projectIcon} size={32} />,
      features: [
        'Public and Private Subnets configuration',
        'NAT Instance setup for private subnet outbound access',
        'Custom Route Tables for traffic routing',
        'Secure networking design principles'
      ],
      tech: ['VPC', 'Subnets', 'NAT', 'Route Tables']
    },
    {
      title: 'Route53 DNS Policies',
      icon: <Globe className={styles.projectIcon} size={32} />,
      features: [
        'Weighted Routing for A/B testing',
        'Latency Routing for optimal global access',
        'Geolocation Routing for regional content delivery',
        'Failover Routing for high availability'
      ],
      tech: ['Route53', 'DNS', 'Health Checks']
    }
  ];

  return (
    <section className="section" id="aws-projects">
      <div className="container">
        <div className={styles.header}>
          <h2 className="text-gradient">AWS Infrastructure Showcase</h2>
          <p>Practical deployments and cloud architectures I've built.</p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.card}>
              <Cloud className={styles.cardIcon} size={120} />
              <div className={styles.cardHeader}>
                <h3>{project.title}</h3>
                {project.icon}
              </div>
              <ul className={styles.features}>
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <div className={styles.techStack}>
                {project.tech.map((tech, idx) => (
                  <span key={idx} className={styles.techItem}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwsProjects;
