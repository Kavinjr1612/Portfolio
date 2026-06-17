import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import styles from './AppProjects.module.css';

const AppProjects = () => {
  const projects = [
    {
      title: 'Building Resume',
      type: 'Serverless Web Application',
      description: 'A lightning-fast, 100% free resume builder designed to help professionals craft stunning ATS-friendly resumes in minutes. Requires no sign-ups and generates pixel-perfect A4 PDFs.',
      tech: ['React 18', 'TypeScript', 'Vercel Serverless', 'Node.js', 'Puppeteer-Core'],
      github: 'https://github.com/Kavinjr1612/Resume-builder.git',
      demo: 'https://r-buildrn.vercel.app/',
      image: '/resume_builder_1781696664779.png'
    },
    {
      title: 'LearnFlow',
      type: 'Full-Stack Web & Mobile App (Monorepo)',
      description: 'A comprehensive, modern Learning Management System (LMS) engineered to facilitate seamless education delivery across web and mobile platforms with robust role-based architecture.',
      tech: ['React 18', 'Vite', 'Tailwind CSS', 'Shadcn UI', 'React Query', 'Supabase', 'Capacitor'],
      github: 'https://github.com/Kavinjr1612/LearnFlow-Web-Mobile-combine.git',
      demo: 'https://learn-flow-web-app.vercel.app/',
      image: '/learnflow_1781696678303.png'
    },
    {
      title: 'DocRAG',
      type: 'Browser-Based AI Application',
      description: 'Privacy-first AI research assistant allowing users to chat with documents entirely within the browser. Leverages local embedding models and IndexedDB so files never leave the machine.',
      tech: ['React 18', 'TypeScript', 'Transformers.js', 'IndexedDB', 'Groq / Gemini', 'React Flow'],
      github: 'https://github.com/Kavinjr1612/Doc-Rag.git',
      demo: 'https://doc-rag-sigma.vercel.app/',
      image: '/docrag_1781696691801.png'
    },
    {
      title: 'Wholesaler Retailer Management System',
      type: 'B2B E-commerce & Management Portal',
      description: 'A comprehensive web application built to streamline operations, inventory, and transactions between wholesalers and retailers with real-time analytics and automated invoicing.',
      tech: ['React 18', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Chart.js', 'jsPDF'],
      github: 'https://github.com/Kavinjr1612/WholesalerRetailerManagementSystem.git',
      demo: 'https://wholesaler-retailer-management-syst.vercel.app/login',
      image: '/wholesaler_1781696704399.png'
    },
    {
      title: 'Newsletter Template Generator',
      type: 'Web-Based Editor & SPA',
      description: 'A robust web-based application designed to help educational institutions create, manage, and publish professional newsletters. Empowers non-technical users to generate print-ready A4 PDFs with real-time preview and dynamic theming.',
      tech: ['React 18', 'Vite', 'TypeScript', 'Tailwind CSS', 'shadcn-ui', 'jsPDF'],
      github: 'https://github.com/Kavinjr1612/Newsletter-Template-Generator.git',
      demo: 'https://newsletter-template-generator.vercel.app/',
      image: '/newsletter_1781696720257.png'
    }
  ];

  return (
    <section className="section" id="apps">
      <div className="container">
        <div className={styles.header}>
          <h2 className="text-gradient">Featured Applications</h2>
          <p>Full-stack applications, AI integrations, and automation tools.</p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.content}>
                <span className={styles.type}>{project.type}</span>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                
                <div className={styles.techStack}>
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className={styles.techItem}>{tech}</span>
                  ))}
                </div>
                
                <div className={styles.actions}>
                  <a href={project.demo} className={`${styles.actionBtn} ${styles.primaryBtn}`}>
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a href={project.github} className={`${styles.actionBtn} ${styles.secondaryBtn}`}>
                    <FaGithub size={16} /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppProjects;
