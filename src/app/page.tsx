"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);
  const [maskPii, setMaskPii] = useState(true);
  const [activeTechnookaTab, setActiveTechnookaTab] = useState(0);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("sp_portfolio_theme") as "light" | "dark" | null;
    if (saved) {
      setTheme(saved);
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("sp_portfolio_theme", next);
  };

  const technookaFeatures = [
    {
      title: "Merged Rows & Grouping",
      desc: "Custom row-merging architecture that groups common invoice details, customer addresses, and contacts across split line-items within a virtualized list.",
    },
    {
      title: "Per-Column Filter Engine",
      desc: "Built a column-level query builder supporting mathematical operators (=, ≠, >, ≥, <, ≤) and searchable multi-select checkboxes for instant filtering.",
    },
    {
      title: "10,000+ Row Virtualization",
      desc: "Integrated list virtualization for heavy datasets, achieving a 35% faster initial load time and smooth 60fps scrolling across 15+ ERP modules.",
    },
    {
      title: "Pinned Columns & Chooser",
      desc: "Engineered sticky pinned columns, dynamic column visibility chooser modal, auto-fit screen width, and Normal vs. Compact row density toggles.",
    },
    {
      title: "Reusable Component Library",
      desc: "Architected a configuration-driven UI component library that cut repetitive code by 40% across forms, registers, and modal workflows.",
    },
  ];

  return (
    <div className={styles.pageWrapper} data-theme={mounted ? theme : "dark"}>
      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a href="#top" className={styles.brand}>
            <span className={styles.brandBadge}>SP</span>
            <span className={styles.brandName}>Seema Patil</span>
          </a>

          <nav className={styles.nav}>
            <a href="#experience">Work & Experience</a>
            <a href="#skills">Skills</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className={styles.headerRight}>
            <button
              type="button"
              onClick={toggleTheme}
              className={styles.themeToggle}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
            <a href="mailto:patilsseema25@gmail.com" className={styles.ctaButton}>
              Let&apos;s Connect <span>→</span>
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* HERO SECTION */}
        <section className={styles.heroSection}>
          <div className={styles.statusPill}>
            <span className={styles.statusDot}></span>
            <span>Available for Software Engineer Roles · Frontend & Full-Stack</span>
          </div>

          <h1 className={styles.heroTitle}>
            Engineering robust web apps & high-scale data grids with <span className={styles.highlightText}>precision.</span>
          </h1>

          <p className={styles.heroSubtitle}>
            Hi, I&apos;m <strong>Seema Sandip Patil</strong>. Software Engineer with 2+ years of experience building high-performance web applications using React.js, Next.js, TypeScript, and the MERN stack. Sole frontend developer on an enterprise ERP platform across 15+ business modules.
          </p>

          <div className={styles.heroActions}>
            <a href="#experience" className={styles.primaryBtn}>
              Explore Production Work <span>↓</span>
            </a>
            <a href="https://github.com/patilSSeema" target="_blank" rel="noreferrer" className={styles.secondaryBtn}>
              GitHub ↗
            </a>
            <a href="https://www.linkedin.com/in/seema-patil-322485235" target="_blank" rel="noreferrer" className={styles.secondaryBtn}>
              LinkedIn ↗
            </a>
          </div>

          {/* METRIC STRIP */}
          <div className={styles.metricsBar}>
            <div className={styles.metricItem}>
              <span className={styles.metricNumber}>10k+</span>
              <span className={styles.metricLabel}>Rows with List Virtualization</span>
            </div>
            <div className={styles.metricItem}>
              <span className={styles.metricNumber}>35%</span>
              <span className={styles.metricLabel}>Faster Initial Load Time</span>
            </div>
            <div className={styles.metricItem}>
              <span className={styles.metricNumber}>15+</span>
              <span className={styles.metricLabel}>ERP Modules Built</span>
            </div>
            <div className={styles.metricItem}>
              <span className={styles.metricNumber}>40%</span>
              <span className={styles.metricLabel}>Repetitive Code Reduced</span>
            </div>
          </div>
        </section>

        {/* WORK EXPERIENCE SECTION */}
        <section className={styles.section} id="experience">
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.subheading}>PRODUCTION WORK</p>
              <h2 className={styles.heading}>Work Experience</h2>
            </div>
            <p className={styles.sectionDesc}>
              Enterprise and commercial web applications. Client personal data is masked under NDA.
            </p>
          </div>

          {/* PROJECT 1: TECHNOOKA */}
          <article className={styles.projectCard}>
            <div className={styles.projectMetaHeader}>
              <div className={styles.projectMetaInfo}>
                <span className={styles.companyName}>Technooka</span>
                <span className={styles.metaDot}>•</span>
                <span>Anand, Gujarat</span>
                <span className={styles.metaDot}>•</span>
                <span>Feb 2026 — Present</span>
              </div>
              <div className={styles.privateBadge}>
                🔒 Enterprise / Proprietary System
              </div>
            </div>

            <h3 className={styles.projectRole}>Software Engineer · Enterprise ERP Platform & Custom Data Grid</h3>
            <p className={styles.projectTypeBadge}>Next.js · React.js · Redux · 15+ Core Business Modules</p>
            <p className={styles.projectDescription}>
              Sole frontend developer of an enterprise ERP platform covering 15+ business modules, working in Agile/Scrum teams across two projects. Converted UI designs into responsive, cross-device screens (invoice forms, expense registers, add/edit workflows). Built a custom data grid with merged rows, per-column filters, pinned columns, and export, using list virtualization for 10,000+ rows (35% faster load).
            </p>

            {/* BROWSER WORKSPACE WRAPPER */}
            <div className={styles.browserFrame}>
              <div className={styles.browserBar}>
                <div className={styles.browserDots}>
                  <span></span><span></span><span></span>
                </div>
                <div className={styles.browserUrl}>
                  erp.sanketindia.internal/invoice-register?view=compact
                </div>

                <button
                  type="button"
                  onClick={() => setMaskPii(!maskPii)}
                  className={styles.maskToggleBtn}
                  title="Toggle privacy blur for customer data"
                >
                  {maskPii ? "🔒 PII Masked (NDA)" : "🔓 PII Mask Off"}
                </button>
              </div>

              <div className={styles.imageContainer}>
                <Image
                  src="/experience/technooka.png"
                  alt="Technooka Enterprise ERP Custom Data Grid"
                  fill
                  className={`${styles.projectImage} ${maskPii ? styles.blurredPii : ""}`}
                  priority
                />
                {maskPii && (
                  <div className={styles.ndaWatermark}>
                    <span>Client PII (Names & Phones) Protected</span>
                  </div>
                )}
              </div>
            </div>

            {/* INTERACTIVE FEATURE BREAKDOWN */}
            <div className={styles.gridFeaturesSection}>
              <h4>Custom Data Grid & Platform Capabilities:</h4>
              <div className={styles.featureTabs}>
                {technookaFeatures.map((feat, idx) => (
                  <button
                    key={feat.title}
                    type="button"
                    className={`${styles.featureTab} ${activeTechnookaTab === idx ? styles.activeTab : ""}`}
                    onClick={() => setActiveTechnookaTab(idx)}
                  >
                    {feat.title}
                  </button>
                ))}
              </div>
              <div className={styles.featureContent}>
                <p><strong>{technookaFeatures[activeTechnookaTab].title}:</strong> {technookaFeatures[activeTechnookaTab].desc}</p>
              </div>
            </div>

            <div className={styles.impactBlock}>
              <h4>Key Contributions:</h4>
              <ul>
                <li>Built a custom data grid with merged rows, per-column filters, pinned columns, and export, using list virtualization for 10,000+ rows (35% faster load).</li>
                <li>Built a configuration-driven reusable component library that reduced repetitive code by 40%.</li>
                <li>Integrated Django REST APIs and Paytm Payment API with backend engineers to build API-driven interfaces.</li>
                <li>Shipped production releases through GitLab CI/CD using feature branches, merge requests, and code reviews.</li>
              </ul>
            </div>

            <div className={styles.tagList}>
              <span className={styles.tag}>Next.js</span>
              <span className={styles.tag}>React.js</span>
              <span className={styles.tag}>JavaScript (ES6+)</span>
              <span className={styles.tag}>Redux</span>
              <span className={styles.tag}>List Virtualization</span>
              <span className={styles.tag}>Django REST</span>
              <span className={styles.tag}>Paytm Payment API</span>
              <span className={styles.tag}>GitLab CI/CD</span>
            </div>
          </article>

          {/* PROJECT 2: BHK4RENT */}
          <article className={styles.projectCard} style={{ marginTop: "40px" }}>
            <div className={styles.projectMetaHeader}>
              <div className={styles.projectMetaInfo}>
                <span className={styles.companyName}>BHK4rent.com</span>
                <span className={styles.metaDot}>•</span>
                <span>Nashik, Maharashtra</span>
                <span className={styles.metaDot}>•</span>
                <span>Jan 2025 — Feb 2026</span>
              </div>
              <div className={styles.privateBadge}>
                🧪 Pre-Launch Demo · Staging
              </div>
            </div>

            <h3 className={styles.projectRole}>Frontend Developer (MERN Stack) · Real Estate Platform & CRM</h3>
            <p className={styles.projectTypeBadge}>Next.js · Node.js · Express.js · MongoDB · SSR Migration</p>
            <p className={styles.projectDescription}>
              Independently developed and maintained a full-stack real estate platform, handling frontend, backend, database operations, and API integration. Migrated the initial React.js client app to Next.js to enable server-side rendering (SSR) and improve search engine rankings.
            </p>

            {/* VIDEO SHOWCASE */}
            <div className={styles.browserFrame}>
              <div className={styles.browserBar}>
                <div className={styles.browserDots}>
                  <span></span><span></span><span></span>
                </div>
                <div className={styles.browserUrl}>
                  localhost:3000/properties/explore
                </div>
                <span className={styles.liveIndicator}>● Staging Video Demo</span>
              </div>

              <div className={styles.mediaContainer}>
                <video
                  className={styles.projectVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/experience/bhk4rent.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className={styles.impactBlock}>
              <h4>Key Contributions:</h4>
              <ul>
                <li>Improved Lighthouse Performance to 90+ and SEO to 80+ through SSR, lazy loading, code splitting, and image optimization.</li>
                <li>Developed backend REST APIs using Node.js and Express.js, with MongoDB for database management.</li>
                <li>Built reusable UI components, dynamic dashboards, advanced search/filtering, and role-based access control (RBAC) for the CRM.</li>
              </ul>
            </div>

            <div className={styles.tagList}>
              <span className={styles.tag}>Next.js</span>
              <span className={styles.tag}>React.js</span>
              <span className={styles.tag}>Node.js</span>
              <span className={styles.tag}>Express.js</span>
              <span className={styles.tag}>MongoDB</span>
              <span className={styles.tag}>SSR</span>
              <span className={styles.tag}>REST APIs</span>
              <span className={styles.tag}>SEO Optimization</span>
            </div>
          </article>

          {/* PRIOR EXPERIENCE SECTION */}
          <div className={styles.priorSection}>
            <h3 className={styles.priorTitle}>Prior Experience</h3>
            <div className={styles.priorTimeline}>
              <div className={styles.priorCard}>
                <div className={styles.priorHeader}>
                  <div>
                    <h4 className={styles.priorRoleTitle}>Frontend Developer</h4>
                    <p className={styles.priorCompany}>Pearl Organisation <span>· Dehradun</span></p>
                  </div>
                  <span className={styles.priorPeriod}>Jun 2024 — Nov 2024</span>
                </div>
                <p className={styles.priorDesc}>
                  Developed responsive, cross-browser web applications using React.js, JavaScript, HTML, and CSS across 3+ client projects.
                </p>
                <ul className={styles.priorHighlights}>
                  <li>Improved page load speed by 20–25% through component architecture and asset optimization.</li>
                  <li>Built reusable React components for common UI patterns, reducing duplicate code across projects.</li>
                </ul>
                <div className={styles.tagList}>
                  <span className={styles.tagSmall}>React.js</span>
                  <span className={styles.tagSmall}>JavaScript (ES6+)</span>
                  <span className={styles.tagSmall}>HTML5</span>
                  <span className={styles.tagSmall}>CSS3</span>
                </div>
              </div>

              <div className={styles.priorCard}>
                <div className={styles.priorHeader}>
                  <div>
                    <h4 className={styles.priorRoleTitle}>Web Developer</h4>
                    <p className={styles.priorCompany}>Optimus Institute <span>· Pune</span></p>
                  </div>
                  <span className={styles.priorPeriod}>Sep 2018 — Jul 2019</span>
                </div>
                <p className={styles.priorDesc}>
                  Built responsive, mobile-friendly websites using HTML5, CSS, and JavaScript, and maintained active client sites.
                </p>
                <ul className={styles.priorHighlights}>
                  <li>Delivered semantic, mobile-first layouts with cross-browser compatibility.</li>
                  <li>Maintained and updated web assets for client educational portals.</li>
                </ul>
                <div className={styles.tagList}>
                  <span className={styles.tagSmall}>HTML5</span>
                  <span className={styles.tagSmall}>CSS3</span>
                  <span className={styles.tagSmall}>JavaScript</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className={styles.section} id="skills">
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.subheading}>TECHNICAL PROFICIENCY</p>
              <h2 className={styles.heading}>Technical Skills</h2>
            </div>
            <p className={styles.sectionDesc}>
              A comprehensive toolkit developed through full-stack ownership and production enterprise systems.
            </p>
          </div>

          <div className={styles.skillGrid}>
            <div className={styles.skillCard}>
              <h3 className={styles.skillCategoryTitle}>Core & Frontend</h3>
              <div className={styles.skillChips}>
                {["JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Redux", "Context API", "HTML5", "CSS3"].map((s) => (
                  <span key={s} className={styles.skillChip}>{s}</span>
                ))}
              </div>
            </div>

            <div className={styles.skillCard}>
              <h3 className={styles.skillCategoryTitle}>APIs & Integration</h3>
              <div className={styles.skillChips}>
                {["RESTful APIs", "Django REST Framework", "Paytm Payment API", "Axios", "Node.js", "Express.js", "MongoDB", "Postman"].map((s) => (
                  <span key={s} className={styles.skillChip}>{s}</span>
                ))}
              </div>
            </div>

            <div className={styles.skillCard}>
              <h3 className={styles.skillCategoryTitle}>Performance & Styling</h3>
              <div className={styles.skillChips}>
                {["SSR", "List Virtualization", "Lazy Loading", "Code Splitting", "Tailwind CSS", "Bootstrap", "CSS Modules", "Lighthouse (90+)"].map((s) => (
                  <span key={s} className={styles.skillChip}>{s}</span>
                ))}
              </div>
            </div>

            <div className={styles.skillCard}>
              <h3 className={styles.skillCategoryTitle}>DevOps & Methodologies</h3>
              <div className={styles.skillChips}>
                {["Git", "GitHub", "GitLab CI/CD", "Vite", "Agile / Scrum", "Sprint Planning", "Code Reviews", "Production Deployment"].map((s) => (
                  <span key={s} className={styles.skillChip}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT & EDUCATION */}
        <section className={styles.section} id="about">
          <div className={styles.aboutWrapper}>
            <div>
              <p className={styles.subheading}>SUMMARY</p>
              <h2 className={styles.heading}>About Me</h2>
              <p className={styles.aboutText}>
                I am a Computer Science engineer who enjoys converting complex operational workflows into clean, reliable, and high-performance product interfaces. I bridge the gap between UI design systems and backend APIs, focusing on clean architecture, reusable components, and performance optimizations.
              </p>
            </div>
            <div className={styles.credentialsList}>
              <div className={styles.credentialCard}>
                <span className={styles.credType}>DEGREE</span>
                <h4>Bachelor of Engineering, Computer Science</h4>
                <p>Amravati University, Maharashtra · 2011 — 2015 | CGPA: 8.23 / 10</p>
              </div>
              <div className={styles.credentialCard}>
                <span className={styles.credType}>CERTIFICATION</span>
                <h4>Full Stack Web Developer</h4>
                <p>Newton School · July 2022 (MERN Stack & Data Structures)</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className={styles.contactSection} id="contact">
          <div className={styles.contactBox}>
            <div>
              <p className={styles.subheadingLight}>LET&apos;S TALK</p>
              <h2 className={styles.contactHeading}>Have a role or challenge in mind?</h2>
              <p className={styles.contactSub}>
                Available for full-time Frontend and Full-Stack Software Engineer opportunities.
              </p>
            </div>
            <div className={styles.contactActions}>
              <a href="mailto:patilsseema25@gmail.com" className={styles.emailButton}>
                patilsseema25@gmail.com <span>↗</span>
              </a>
              <a href="tel:+919557039479" className={styles.phoneButton}>
                +91 95570 39479
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div>
            <strong>Seema Sandip Patil</strong>
            <p style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "4px" }}>
              Software Engineer · Frontend-Focused Full Stack
            </p>
          </div>
          <div className={styles.footerLinks}>
            <a href="https://github.com/patilSSeema" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/seema-patil-322485235" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:patilsseema25@gmail.com">Email</a>
          </div>
          <p className={styles.copyright}>© {new Date().getFullYear()} Seema Patil. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}