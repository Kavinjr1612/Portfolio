import { useEffect, useRef } from 'react';
import { Download, ArrowRight, Cloud } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Hero.module.css';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: {x: number, y: number, radius: number, vx: number, vy: number}[] = [];
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const numParticles = Math.min(window.innerWidth / 15, 100);
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(59, 130, 246, 0.5)';
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.2 * (1 - dist / 150)})`;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className={styles.hero} id="home">
      <canvas ref={canvasRef} className={styles.particlesCanvas}></canvas>
      
      <div className={`container ${styles.heroContent}`}>
        <div className="animate-fade-in">
          <div className={styles.badge}>
            <Cloud size={16} />
            AWS Certified Cloud Practitioner
          </div>
          
          <h1 className={styles.title}>
            Cloud & Full Stack <br />
            <span className="text-gradient">Developer</span>
          </h1>
          
          <p className={styles.subtitle}>
            Building cloud-powered applications, scalable web solutions, and practical AWS infrastructure while continuously learning and exploring modern technologies.
          </p>
          
          <div className={styles.ctaGroup}>
            <a href="#aws-projects" className="btn btn-primary">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="/Kavinesh_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Download Resume <Download size={18} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
          
          <div className={styles.socialLinks}>
            <a href="https://github.com/Kavinjr1612" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/kavineshsr/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
