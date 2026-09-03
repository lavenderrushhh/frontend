import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .ac-home {
          min-height: 100vh;
          background:
            radial-gradient(circle at 10% 25%, rgba(120, 75, 220, .20), transparent 32%),
            radial-gradient(circle at 85% 45%, rgba(70, 180, 255, .08), transparent 28%),
            #080b19;
          color: #fff;
          font-family: Arial, Helvetica, sans-serif;
          overflow-x: hidden;
        }

        .ac-nav {
          height: 82px;
          padding: 0 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255,255,255,.07);
          background: rgba(8,11,25,.85);
        }

        .ac-brand {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .ac-logo {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg,#a978ff,#7650d9);
          font-size: 24px;
          font-weight: 800;
        }

        .ac-brand h2 {
          margin: 0;
          font-size: 21px;
          font-weight: 800;
        }

        .ac-brand h2 span {
          color: #a477ff;
        }

        .ac-brand small {
          display: block;
          color: #858da9;
          margin-top: 3px;
          font-size: 11px;
        }

        .ac-links {
          display: flex;
          gap: 32px;
        }

        .ac-links a {
          color: #9da5c0;
          text-decoration: none;
          font-size: 14px;
        }

        .ac-login {
          border: 1px solid rgba(164,119,255,.45);
          background: rgba(139,92,246,.12);
          color: #c3a4ff;
          padding: 11px 19px;
          border-radius: 10px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
        }

        .ac-hero {
          max-width: 1250px;
          min-height: 650px;
          margin: auto;
          padding: 90px 48px;
          display: grid;
          grid-template-columns: 1.1fr .9fr;
          align-items: center;
          gap: 60px;
        }

        .ac-badge {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 11px 18px;
          border-radius: 30px;
          border: 1px solid rgba(73,204,255,.25);
          background: rgba(37,127,163,.10);
          color: #52d8ff;
          font-size: 13px;
          font-weight: 700;
        }

        .ac-hero h1 {
          margin: 30px 0 24px;
          font-size: clamp(55px,6vw,82px);
          line-height: .98;
          letter-spacing: -4px;
          font-weight: 850;
        }

        .ac-hero h1 span {
          background: linear-gradient(90deg,#a978ff,#40cfff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .ac-description {
          max-width: 650px;
          color: #adb5cf;
          font-size: 18px;
          line-height: 1.7;
        }

        .ac-buttons {
          display: flex;
          gap: 14px;
          margin-top: 32px;
        }

        .ac-primary,
        .ac-secondary {
          padding: 14px 22px;
          border-radius: 11px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
        }

        .ac-primary {
          border: 0;
          background: linear-gradient(135deg,#a070f5,#7955dc);
          color: white;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .ac-secondary {
          background: rgba(255,255,255,.03);
          border: 1px solid rgba(255,255,255,.12);
          color: #d9dced;
        }

        .ac-trust {
          display: flex;
          gap: 28px;
          margin-top: 38px;
        }

        .ac-trust div {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #929ab8;
          font-size: 13px;
        }

        .ac-trust svg {
          color: #a477ff;
        }

        .ac-card-area {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .ac-glow {
          position: absolute;
          width: 330px;
          height: 330px;
          border-radius: 50%;
          background: rgba(137,88,255,.18);
          filter: blur(80px);
        }

        .ac-card {
          position: relative;
          z-index: 2;
          width: 370px;
          padding: 30px;
          border-radius: 22px;
          border: 1px solid rgba(255,255,255,.10);
          background: rgba(18,21,39,.94);
          box-shadow: 0 35px 80px rgba(0,0,0,.45);
        }

        .ac-card-top {
          display: flex;
          justify-content: space-between;
          color: #9da5c1;
          font-size: 13px;
        }

        .ac-status {
          color: #6ee7b7;
          background: rgba(80,220,170,.10);
          padding: 6px 10px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
        }

        .ac-profile {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-top: 30px;
        }

        .ac-avatar {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: linear-gradient(135deg,#a978ff,#7550d9);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          font-weight: 800;
        }

        .ac-profile strong {
          display: block;
          font-size: 14px;
        }

        .ac-profile span {
          display: block;
          color: #7f88a5;
          margin-top: 4px;
          font-size: 12px;
        }

        .ac-score {
          margin-top: 35px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .ac-score strong {
          font-size: 55px;
        }

        .ac-score span {
          color: #a477ff;
          font-weight: 700;
        }

        .ac-progress {
          height: 8px;
          margin-top: 12px;
          background: #252940;
          border-radius: 20px;
          overflow: hidden;
        }

        .ac-progress div {
          width: 87%;
          height: 100%;
          background: linear-gradient(90deg,#a978ff,#45cfff);
        }

        .ac-card p {
          color: #858da9;
          font-size: 13px;
        }

        .ac-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 22px;
        }

        .ac-skills span {
          padding: 8px 10px;
          border-radius: 8px;
          background: rgba(139,92,246,.10);
          color: #bd9dff;
          border: 1px solid rgba(139,92,246,.18);
          font-size: 12px;
        }

        .ac-section {
          max-width: 1250px;
          margin: auto;
          padding: 90px 48px;
        }

        .ac-heading > span {
          color: #a477ff;
          font-size: 12px;
          letter-spacing: 2px;
          font-weight: 800;
        }

        .ac-heading h2 {
          margin: 12px 0;
          font-size: 38px;
          letter-spacing: -1.5px;
        }

        .ac-heading p {
          color: #8f98b7;
          line-height: 1.7;
        }

        .ac-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 20px;
          margin-top: 45px;
        }

        .ac-box {
          padding: 28px;
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 18px;
          background: rgba(17,20,37,.72);
        }

        .ac-icon {
          width: 48px;
          height: 48px;
          border-radius: 13px;
          background: rgba(139,92,246,.12);
          color: #ad80ff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ac-box h3 {
          margin: 20px 0 10px;
        }

        .ac-box p {
          color: #8f98b7;
          line-height: 1.65;
          font-size: 14px;
        }

        .ac-box button {
          margin-top: 10px;
          border: 0;
          background: transparent;
          color: #b18aff;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          gap: 7px;
          align-items: center;
        }

        .ac-footer {
          border-top: 1px solid rgba(255,255,255,.07);
          padding: 42px 48px;
          display: flex;
          justify-content: space-between;
          color: #777f9d;
        }

        .ac-footer strong {
          color: white;
        }

        .ac-footer p {
          margin: 8px 0 0;
          font-size: 13px;
        }

        .ac-footer span {
          font-size: 12px;
        }

        @media(max-width:900px) {
          .ac-links {
            display: none;
          }

          .ac-nav {
            padding: 0 22px;
          }

          .ac-hero {
            grid-template-columns: 1fr;
            padding: 70px 24px;
          }

          .ac-grid {
            grid-template-columns: 1fr;
          }

          .ac-section {
            padding: 70px 24px;
          }

          .ac-footer {
            padding: 35px 24px;
            flex-direction: column;
            gap: 20px;
          }
        }
      `}</style>

      <div className="ac-home">

        {/* NAVBAR */}
        <nav className="ac-nav">
          <div className="ac-brand">
            <div className="ac-logo">A</div>

            <div>
              <h2>
                Academia<span>Connect</span>
              </h2>
              <small>Academia–Industry Collaboration Portal</small>
            </div>
          </div>

          <div className="ac-links">
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#roles">For You</a>
          </div>

          <button
            className="ac-login"
            onClick={() => navigate("/auth")}
          >
            Login <ArrowRight size={17} />
          </button>
        </nav>

        {/* HERO */}
        <section className="ac-hero">
          <div>
            <div className="ac-badge">
              <Sparkles size={16} />
              SIH2604 • Academia–Industry Collaboration
            </div>

            <h1>
              Where Talent
              <br />
              Meets <span>Opportunity.</span>
            </h1>

            <p className="ac-description">
              Connect with industry, discover meaningful opportunities,
              find mentors and build your professional journey with
              AcademiaConnect.
            </p>

            <div className="ac-buttons">
              <button
                className="ac-primary"
                onClick={() => navigate("/auth")}
              >
                Get Started
                <ArrowRight size={18} />
              </button>

              <button
                className="ac-secondary"
                onClick={() => navigate("/auth")}
              >
                Explore Platform
              </button>
            </div>

            <div className="ac-trust">
              <div>
                <ShieldCheck size={18} />
                Verified Skills
              </div>

              <div>
                <Users size={18} />
                Industry Connected
              </div>

              <div>
                <BriefcaseBusiness size={18} />
                Career Focused
              </div>
            </div>
          </div>

          <div className="ac-card-area">
            <div className="ac-glow" />

            <div className="ac-card">
              <div className="ac-card-top">
                <span>Student Profile</span>
                <span className="ac-status">Verified</span>
              </div>

              <div className="ac-profile">
                <div className="ac-avatar">A</div>

                <div>
                  <strong>AcademiaConnect Student</strong>
                  <span>Computer Science</span>
                </div>
              </div>

              <div className="ac-score">
                <strong>87</strong>
                <span>/100</span>
              </div>

              <div className="ac-progress">
                <div />
              </div>

              <p>Market Readiness Score</p>

              <div className="ac-skills">
                <span>React</span>
                <span>Node.js</span>
                <span>Problem Solving</span>
                <span>GitHub Verified</span>
              </div>
            </div>
          </div>
        </section>

        {/* ROLES */}
        <section className="ac-section" id="roles">
          <div className="ac-heading">
            <span>ONE PLATFORM</span>
            <h2>Built for every side of the ecosystem.</h2>
            <p>
              One connected environment for students, institutions and
              industry.
            </p>
          </div>

          <div className="ac-grid">
            <div className="ac-box">
              <div className="ac-icon">
                <GraduationCap />
              </div>

              <h3>Students</h3>

              <p>
                Build verified skills, discover internships, projects
                and career opportunities.
              </p>

              <button onClick={() => navigate("/auth")}>
                Student Portal <ArrowRight size={16} />
              </button>
            </div>

            <div className="ac-box">
              <div className="ac-icon">
                <Building2 />
              </div>

              <h3>Industry</h3>

              <p>
                Discover skill-ready candidates, post opportunities and
                collaborate on real-world projects.
              </p>

              <button onClick={() => navigate("/auth")}>
                Industry Portal <ArrowRight size={16} />
              </button>
            </div>

            <div className="ac-box">
              <div className="ac-icon">
                <Users />
              </div>

              <h3>Institutions</h3>

              <p>
                Monitor student readiness, identify skill gaps and manage
                industry collaboration.
              </p>

              <button onClick={() => navigate("/auth")}>
                Institution Portal <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="ac-section" id="features">
          <div className="ac-heading">
            <span>POWERFUL FEATURES</span>
            <h2>From skills to careers.</h2>
            <p>
              Everything students need to connect their academic journey
              with real industry opportunities.
            </p>
          </div>

          <div className="ac-grid">
            <div className="ac-box">
              <div className="ac-icon">
                <Sparkles />
              </div>
              <h3>AI Skill Analytics</h3>
              <p>
                Analyze skills and benchmark student readiness against
                industry expectations.
              </p>
            </div>

            <div className="ac-box">
              <div className="ac-icon">
                <ShieldCheck />
              </div>
              <h3>Verified Skill Index</h3>
              <p>
                Build evidence-backed profiles using assessments,
                projects and verified skills.
              </p>
            </div>

            <div className="ac-box">
              <div className="ac-icon">
                <BriefcaseBusiness />
              </div>
              <h3>Smart Recruitment</h3>
              <p>
                Match students with opportunities based on skills and
                career interests.
              </p>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="ac-section" id="about">
          <div className="ac-heading">
            <span>ABOUT ACADEMIACONNECT</span>
            <h2>Bridging academia and industry.</h2>
            <p>
              AcademiaConnect creates a common ecosystem where students,
              institutions and companies can discover each other,
              collaborate and create meaningful career outcomes.
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="ac-footer">
          <div>
            <strong>AcademiaConnect</strong>
            <p>
              Building a stronger bridge between education and industry.
            </p>
          </div>

          <span>
            SIH2604 • Academia–Industry Collaboration Portal
          </span>
        </footer>

      </div>
    </>
  );
}

export default Home;