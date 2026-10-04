import { useEffect, useRef, useState, type ReactNode } from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import {
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  Layers,
  Code2,
  Globe,
  Cpu,
  Check,
  X,
  Menu,
  Github,
  Linkedin,
  Download,
  Mail,
  Braces,
  Activity,
  Gauge,
  Zap,
} from 'lucide-react';
import { projects, skills } from './data';

const nav = [
  ['home', 'Home'],
  ['about', 'About'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['contact', 'Contact'],
];
function Reveal({
  children,
  className = '',
  side = 'left',
}: {
  children: ReactNode;
  className?: string;
  side?: 'left' | 'right' | 'center';
}) {
  const reduce = useReducedMotion();
  const xOffset = side === 'left' ? -46 : side === 'right' ? 46 : 0;

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, x: xOffset, y: 18 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
function SectionTitle({
  number,
  label,
  title,
  description,
}: {
  number: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <div className="eyebrow">
          <span>{number} /</span> {label}
        </div>
        <h2>{title}</h2>
      </div>
      {description && <p>{description}</p>}
    </div>
  );
}
function Flow({ items }: { items: string[] }) {
  return (
    <div className="flow">
      {items.map((item, i) => (
        <div className="flow-item" key={item}>
          <span className="mono">0{i + 1}</span>
          {item}
          {i < items.length - 1 && <ArrowRight size={14} />}
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState('home');
  const [menu, setMenu] = useState(false);
  const [inspecting, setInspecting] = useState<number | null>(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-15% 0px -65% 0px' },
    );
    document.querySelectorAll('section[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (inspecting !== null) {
      dialog.current?.showModal();
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    } else dialog.current?.close();
  }, [inspecting]);
  useEffect(() => {
    if (!menu) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenu(false);
        document.querySelector<HTMLButtonElement>('.menu-toggle')?.focus();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [menu]);
  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header>
        <a className="brand" href="#home" aria-label="Sai Kobbarisetti home">
          <img className="brand-mark" src="/portfolio/favicon.svg" alt="Sai Kobbarisetti icon" />
        </a>
        <nav aria-label="Main navigation" className={menu ? 'open' : ''}>
          {nav.map(([id, name]) => (
            <a
              href={`#${id}`}
              key={id}
              className={active === id ? 'current' : ''}
              onClick={() => setMenu(false)}
            >
              {name}
            </a>
          ))}
        </nav>
        <a className="nav-contact" href="#contact">
          Let’s talk <ArrowUpRight size={15} />
        </a>
        <button
          className="menu-toggle"
          aria-label={menu ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menu}
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </button>
      </header>
      <main id="main">
        <section id="home" className="hero container">
          <div className="hero-top mono">
            <span>
              <i className="status-dot" /> OPEN TO FULL-TIME OPPORTUNITIES
            </span>
            <span>
              BENGALURU, INDIA <span className="muted">/ IMMEDIATE JOINER</span>
            </span>
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <Reveal>
                <div className="eyebrow">
                  JAVA FULL STACK DEVELOPER <span className="tiny-line" /> PORTFOLIO
                </div>
                <h1 className="name-heading">
                  SAI
                  <br />
                  <span>KOBBARISETTI</span>
                </h1>
                <div className="hero-role">
                  Thoughtful software.
                  <br />
                  <span>From interface to infrastructure.</span>
                </div>
                <p>
                  I turn complex requirements into reliable applications. 1+ year of enterprise
                  experience with Java, Spring Boot, React, and event-driven services at Endava.
                </p>
                <div className="hero-buttons">
                  <a
                    className="button primary"
                    href="/portfolio/sai-kobbarisetti-resume.jpg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Resume <ArrowUpRight size={17} />
                  </a>
                  <a className="button secondary" href="#projects">
                    Explore my work <ArrowDown size={17} />
                  </a>
                </div>
                <div className="hero-foot">
                  <a href="https://github.com/ksvsri" target="_blank" rel="noreferrer">
                    <Github size={17} /> GitHub <ArrowUpRight size={13} />
                  </a>
                  <a
                    href="https://linkedin.com/in/sai-kobbarisetti-732414269"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin size={17} /> LinkedIn <ArrowUpRight size={13} />
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal className="hero-visual">
              <div className="profile-art">
                <div className="profile-art-head mono">
                  <span>ENGINEERING, WITH INTENT.</span>
                </div>
                <div className="orbit-art" aria-hidden="true">
                  <span className="orbit-ring ring-one" />
                  <span className="orbit-ring ring-two" />
                  <span className="orbit-ring ring-three" />
                  <span className="orbit-track track-one">
                    <span className="orbit-dot dot-one" />
                  </span>
                  <span className="orbit-track track-two">
                    <span className="orbit-dot dot-two" />
                  </span>
                  <span className="orbit-track track-three">
                    <span className="orbit-dot dot-three" />
                  </span>
                  <span className="monogram">SK</span>
                  <span className="orbit-caption">BUILD. CONNECT. REFINE.</span>
                </div>
              </div>
              <div className="profile-detail">
                <div>
                  <span className="profile-availability">
                    <i className="status-dot" /> READY FOR THE NEXT CHALLENGE
                  </span>
                  <h3>
                    Backend depth.
                    <br />
                    Full-stack perspective.
                  </h3>
                </div>
                <span className="profile-icon">
                  <Code2 size={27} />
                </span>
              </div>
              <div className="profile-stats">
                <div>
                  <strong>1+</strong>
                  <span>YEAR AT ENDAVA</span>
                </div>
                <div>
                  <strong>02</strong>
                  <span>ENTERPRISE APPLICATIONS</span>
                </div>
                <div>
                  <strong>B.Tech</strong>
                  <span>COMPUTER SCIENCE</span>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="hero-bottom">
            <span className="mono">JAVA · SPRING BOOT · REACT · EVENT-DRIVEN SYSTEMS</span>
            <a href="#about" className="mono">
              SCROLL TO EXPLORE <ArrowDown size={15} />
            </a>
          </div>
        </section>
        <section id="about" className="container section">
          <Reveal side="left">
            <SectionTitle number="01" label="ABOUT ME" title="ENGINEER. BUILDER. PROBLEM SOLVER." />
            <div className="about-grid">
              <div>
                <p className="large-copy">
                  Good software isn’t just what happens on screen. It’s how everything{' '}
                  <span>works together.</span>
                </p>
                <p>
                  I’m Sai, a Java Full Stack Developer with 1+ year of experience at Endava. I work
                  across backend and frontend layers, turning business requirements into reliable,
                  maintainable applications.
                </p>
                <p>
                  From reactive APIs and payment workflows to assessment interfaces, I care about
                  the details—and the bigger architecture they belong to.
                </p>
              </div>
              <div className="metrics">
                {[
                  ['1+', 'YEAR OF EXPERIENCE'],
                  ['Java', 'PRIMARY LANGUAGE'],
                  ['React', 'FRONTEND'],
                  ['Microservices', 'ARCHITECTURE'],
                  ['Kafka', 'COMMUNICATION'],
                  ['PostgreSQL', 'DATABASE'],
                ].map(([v, l], index) => (
                  <Reveal
                    key={l}
                    className="metric-card"
                    side={index % 2 === 0 ? 'left' : 'right'}
                  >
                    <div>
                      <span className="mono">{l}</span>
                      <strong>{v}</strong>
                      <span className="metric-plus">+</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </section>
        <section id="experience" className="section experience-section">
          <div className="container">
            <Reveal side="right">
              <SectionTitle
                number="02"
                label="PRODUCTION EXPERIENCE"
                title="ENTERPRISE EXPERIENCE."
                description="An enterprise foundation in payments, assessment, and full-stack engineering."
              />
              <div className="experience-row">
                <div className="company-mark">
                  <img src="/portfolio/image.png" alt="Company logo" width="68" height="68" />
                </div>
                <div>
                  <h3>Endava Solutions India Private Limited</h3>
                  <p>Java Full Stack Developer</p>
                </div>
                <div className="experience-date mono">
                  AUG 2025 — SEP 2026<span>BENGALURU, INDIA</span>
                </div>
              </div>
              <div className="experience-summary">
                <span className="mono">CONTRIBUTION</span>
                <p>
                  Building across the stack: secure payment workflows, reactive backend services,
                  assessment monitoring, and event-driven communication.
                </p>
                <a className="text-link" href="#projects">
                  Explore the systems <ArrowDown size={16} />
                </a>
              </div>
            </Reveal>
          </div>
        </section>
        <section id="projects" className="container section">
          <Reveal side="left">
            <SectionTitle
              number="03"
              label="PROJECT CASE STUDIES"
              title="SELECTED WORK."
              description="Two enterprise applications. A closer look at the problems, decisions, and engineering behind them."
            />
          </Reveal>
          <div className="projects">
            {projects.map((project, i) => (
              <Reveal className="project-card" key={project.id}>
                <div className={`project-art art-${i}`}>
                  <div className="project-art-top mono">
                    <span>SYSTEM / {project.id}</span>
                    <span>ILLUSTRATIVE INTERFACE ↗</span>
                  </div>
                  {i === 0 ? (
                    <div className="payment-demo">
                      <div className="demo-top">
                        <b>
                          <span className="blue">↗</span> easypay
                        </b>
                        <span className="mono">PAYMENT FLOW</span>
                      </div>
                      <span className="mono muted">ONE REQUEST. CONNECTED SERVICES.</span>
                      <div className="payment-title">
                        Send. Settle.
                        <br />
                        <span>Stay in sync.</span>
                      </div>
                      <div className="payment-path">
                        <span>
                          <Globe size={17} /> Request
                        </span>
                        <div className="flow-line" />
                        <span>
                          <Check size={17} /> Processed
                        </span>
                      </div>
                      <div className="demo-bottom mono">
                        <span>
                          <i className="status-dot" /> EVENT PUBLISHED
                        </span>
                        <span>Kafka → PostgreSQL</span>
                      </div>
                    </div>
                  ) : (
                    <div className="assessment-demo">
                      <div className="demo-top">
                        <b>
                          <Layers size={18} /> Assessment / monitor
                        </b>
                        <span className="mono">DEMO</span>
                      </div>
                      <div className="monitor-row">
                        <div className="candidate-icon">
                          <Globe size={34} />
                          <span className="mono">CANDIDATE SESSION</span>
                        </div>
                        <div className="event-feed mono">
                          {[
                            'CAMERA_EVENT',
                            'SNAPSHOT_CAPTURED',
                            'WARNING_TRIGGERED',
                            'COOLDOWN_STARTED',
                          ].map((e, j) => (
                            <div key={e} style={{ animationDelay: `${j * 0.7}s` }}>
                              <span>0{j + 1}</span>
                              <i className="status-dot" />
                              {e}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="monitor-bars">
                        {Array.from({ length: 32 }, (_, j) => (
                          <i
                            key={j}
                            style={{
                              height: `${18 + ((j * 17) % 46)}px`,
                              animationDelay: `${j * 0.09}s`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className="project-info">
                  <div className="eyebrow">{project.category}</div>
                  <div className="project-title">
                    <h3>{project.name}</h3>
                    <button
                      aria-label={`Inspect ${project.name}`}
                      className="circle-button"
                      onClick={() => setInspecting(i)}
                    >
                      <ArrowUpRight />
                    </button>
                  </div>
                  <p>{project.description}</p>
                  <div className="project-brief">
                    <span>THE CHALLENGE</span>
                    <p>{project.problem}</p>
                  </div>
                  <div className="tags">
                    {project.stack.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <details>
                    <summary>
                      Engineering focus <span>+</span>
                    </summary>
                    <p>{project.focus}</p>
                    <ul>
                      {project.features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  </details>
                  <button className="text-link" onClick={() => setInspecting(i)}>
                    View case study <ArrowUpRight size={16} />
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="skills" className="container section skills-section">
          <Reveal side="right">
            <SectionTitle number="04" label="THE TOOLKIT" title="BUILT ON A STRONG FOUNDATION." />
            <div className="skill-map">
              <div className="skill-root">
                <Cpu size={22} />
                <span>ENGINEERING STACK</span>
                
              </div>
              <div className="skill-branches">
                {skills.map(([category, ...list], i) => (
                  <Reveal
                    key={category}
                    className="skill-tile"
                    side={i % 2 === 0 ? 'left' : 'right'}
                  >
                    <div className="skill-branch">
                      <div className="eyebrow">
                        <span>0{i + 1}</span> {category}
                      </div>
                      <div>
                        {list.map((skill) => (
                          <span tabIndex={0} key={skill}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal className="performance" side="center">
            <h3>
              Built to work.
              <br />
              <span className="muted">Considered at every layer.</span>
            </h3>
            <div className="performance-grid">
              {[
                [
                  Activity,
                  'Load',
                  'JMeter / k6',
                  'Understand how an application behaves under concurrent requests.',
                ],
                [
                  Gauge,
                  'Latency',
                  'Reactive APIs / caching',
                  'Consider waiting time, blocking work, and the cost of repeated reads.',
                ],
                [
                  Zap,
                  'Efficiency',
                  'Caffeine / persistence',
                  'Think carefully about cache behavior and database access patterns.',
                ],
              ].map(([Icon, title, tech, desc], index) => {
                const I = Icon as typeof Activity;
                return (
                  <Reveal
                    key={String(title)}
                    className="performance-card"
                    side={index % 2 === 0 ? 'left' : 'right'}
                  >
                    <div>
                      <I size={23} />
                      <h4>{String(title)}</h4>
                      <span className="mono blue">{String(tech)}</span>
                      <p>{String(desc)}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </Reveal>
        </section>
        <section className="section journey-section">
          <div className="container">
            <Reveal>
              <SectionTitle
                number="05"
                label="THE JOURNEY"
                title="A FOUNDATION. A FORWARD DIRECTION."
              />
              <div className="timeline">
                {[
                  [
                    '2019 — 2022',
                    'Diploma · Computer Science',
                    'Andhra Polytechnic, Kakinada',
                    '91%',
                  ],
                  [
                    '2022 — 2025',
                    'B.Tech · Computer Science',
                    'University College of Engineering, Kakinada',
                    '75%',
                  ],
                  [
                    '2025 — 2026',
                    'Enterprise engineering',
                    'Java Full Stack Developer · Endava',
                    'BUILDING',
                  ],
                  [
                    'NEXT',
                    'Keep going deeper',
                    'Distributed systems, event-driven design & AI-assisted applications',
                    'LEARNING',
                  ],
                ].map(([date, title, desc, badge]) => (
                  <div key={date}>
                    <span className="timeline-point" />
                    <span className="mono blue">{date}</span>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                    <span className="timeline-badge mono">{badge}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="container resume-section">
          <Reveal className="resume-strip">
            <div className="resume-icon">
              <Code2 size={28} />
            </div>
            <div>
              <span className="eyebrow">THE SHORT VERSION</span>
              <h3>YOUR NEXT JAVA DEVELOPER.</h3>
              <p>Java Full Stack Developer · 1+ year of experience</p>
            </div>
            <div className="resume-actions">
              <a
                className="text-link"
                href="/portfolio/sai-kobbarisetti-resume.jpg"
                target="_blank"
                rel="noreferrer"
              >
                View Resume <ArrowUpRight size={16} />
              </a>
              <a
                className="button secondary"
                download="Sai-Kobbarisetti-Resume.jpg"
                href="/portfolio/sai-kobbarisetti-resume.jpg"
              >
                Download <Download size={16} />
              </a>
            </div>
          </Reveal>
        </section>
        <section id="contact" className="container section contact-section">
          <Reveal>
            <div className="eyebrow">06 / LET’S CONNECT</div>
            <div className="contact-grid">
              <div>
                <h2>
                  LET’S BUILD
                  <br />
                  <span className="serif">WHAT’S NEXT.</span>
                </h2>
                <p>
                  Hiring for Java, backend, or full-stack engineering?
                  <br />
                  I’d love to hear about your team and the work ahead.
                </p>
                <a className="email-link" href="mailto:saikobbarisetti7187@gmail.com">
                  saikobbarisetti7187@gmail.com <ArrowUpRight size={19} />
                </a>
                <div className="socials">
                  <a href="https://github.com/ksvsri" target="_blank" rel="noreferrer">
                    <Github size={17} /> GitHub <ArrowUpRight size={14} />
                  </a>
                  <a
                    href="https://linkedin.com/in/sai-kobbarisetti-732414269"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} />
                  </a>
                </div>
                <span className="availability mono">
                  <i className="status-dot" /> IMMEDIATE JOINER · BENGALURU, INDIA
                </span>
              </div>
              <div className="contact-console">
                <div className="mono console-heading">
                  <span className="blue">LET’S TALK</span> <span>PREPARE AN EMAIL</span>
                </div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <div className="form-row">
                    <label>
                      Name
                      <input
                        required
                        maxLength={100}
                        autoComplete="name"
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => {
                          setForm({ ...form, name: e.target.value });
                          setSent(false);
                        }}
                      />
                    </label>
                    <label>
                      Email
                      <input
                        required
                        type="email"
                        maxLength={254}
                        autoComplete="email"
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={(e) => {
                          setForm({ ...form, email: e.target.value });
                          setSent(false);
                        }}
                      />
                    </label>
                  </div>
                  <label>
                    Message
                    <textarea
                      required
                      maxLength={3000}
                      rows={3}
                      placeholder="Tell me about the role or your team…"
                      value={form.message}
                      onChange={(e) => {
                        setForm({ ...form, message: e.target.value });
                        setSent(false);
                      }}
                    />
                  </label>
                  <details className="payload">
                    <summary className="mono">
                      Preview request JSON <Braces size={14} />
                    </summary>
                    <pre>{JSON.stringify(form, null, 2)}</pre>
                  </details>
                  <button className="button primary" type="submit">
                    Preview request <ArrowRight size={16} />
                  </button>
                  <p className="form-disclaimer" role="status">
                    {sent
                      ? 'Request prepared locally. Nothing has been sent. Use the email link below to send it.'
                      : 'This form is a local demo. To reach me, use email or LinkedIn.'}
                  </p>
                  {sent && (
                    <a
                      className="text-link"
                      href={`mailto:saikobbarisetti7187@gmail.com?subject=${encodeURIComponent(`Portfolio enquiry from ${form.name}`)}&body=${encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`)}`}
                    >
                      <Mail size={15} /> Open in your email app <ArrowUpRight size={15} />
                    </a>
                  )}
                </form>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <footer className="container">
        <a className="brand" href="#home" aria-label="Sai Kobbarisetti home">
          <img className="brand-mark" src="/portfolio/favicon.svg" alt="Sai Kobbarisetti icon" />
        </a>
        <span className="mono">THOUGHTFULLY ENGINEERED. ALWAYS EVOLVING.</span>
        <a href="#home" className="mono">
          BACK TO TOP ↑
        </a>
      </footer>
      <dialog
        ref={dialog}
        className="project-dialog"
        onCancel={() => setInspecting(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setInspecting(null);
        }}
      >
        {inspecting !== null && (
          <div className="dialog-content">
            <div className="dialog-top">
              <span className="eyebrow">PROJECT_00{inspecting + 1} / ENGINEERING CASE FILE</span>
              <button
                className="circle-button"
                aria-label="Close project details"
                onClick={() => setInspecting(null)}
              >
                <X />
              </button>
            </div>
            <h2>{projects[inspecting].name}</h2>
            <p className="large-copy">{projects[inspecting].subtitle}</p>
            <span className="mono muted">
              ILLUSTRATIVE ARCHITECTURE · NOT A PRODUCTION BLUEPRINT
            </span>
            <Flow items={projects[inspecting].flow} />
            <div className="case-grid">
              <div>
                <div className="eyebrow">THE PROBLEM</div>
                <p>{projects[inspecting].problem}</p>
              </div>
              <div>
                <div className="eyebrow">THE SOLUTION</div>
                <p>{projects[inspecting].solution}</p>
              </div>
            </div>
            <h3>Engineering highlights</h3>
            <ul>
              {projects[inspecting].features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <div className="tags">
              {projects[inspecting].stack.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <p className="muted">
              Professional work at Endava · August 2025 – September 2026. Source code and live demos
              are not provided.
            </p>
          </div>
        )}
      </dialog>
    </>
  );
}
