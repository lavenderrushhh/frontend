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
  return (
    <div className="home">

      {/* Navbar */}
      <nav className="navbar">
        <div className="brand">
          <div className="brand-logo">AI</div>
          <div>
            <h2>Academia<span>+</span>Industry</h2>
            <small>Collaboration Portal</small>
          </div>
        </div>

        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#roles">For You</a>
        </div>

        <button className="login-btn">
          Login <ArrowRight size={17} />
        </button>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">

          <div className="badge">
            <Sparkles size={16} />
            SIH2604 • Skill Mapping & Placements
          </div>

          <h1>
            Connect <span>Talent</span>
            <br />
            with Opportunity.
          </h1>

          <p>
            A unified platform connecting students, academia and industry
            through verified skills, smarter recruitment and meaningful
            collaboration.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Get Started <ArrowRight size={18} />
            </button>

            <button className="secondary-btn">
              Explore Platform
            </button>
          </div>

          <div className="trust-row">
            <div>
              <ShieldCheck size={18} />
              <span>Verified Skills</span>
            </div>

            <div>
              <Users size={18} />
              <span>Industry Connected</span>
            </div>

            <div>
              <BriefcaseBusiness size={18} />
              <span>Career Focused</span>
            </div>
          </div>

        </div>

        {/* Hero visual */}
        <div className="hero-card">
          <div className="card-glow"></div>

          <div className="dashboard-card">
            <div className="mini-header">
              <span>Skill Index</span>
              <span className="status">Verified</span>
            </div>

            <div className="score">
              <strong>87</strong>
              <span>/100</span>
            </div>

            <div className="progress">
              <div></div>
            </div>

            <p>Market Readiness Score</p>

            <div className="skill-list">
              <span>React</span>
              <span>Node.js</span>
              <span>Problem Solving</span>
              <span>GitHub Verified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="roles" id="roles">
        <div className="section-heading">
          <span>ONE PLATFORM</span>
          <h2>Built for every side of the ecosystem.</h2>
          <p>
            One connected environment for students, institutions and industry.
          </p>
        </div>

        <div className="role-grid">

          <div className="role-card">
            <div className="role-icon">
              <GraduationCap />
            </div>
            <h3>Students</h3>
            <p>
              Build verified skills, discover opportunities, take assessments
              and prepare for interviews.
            </p>
            <button>Student Portal <ArrowRight size={16} /></button>
          </div>

          <div className="role-card">
            <div className="role-icon">
              <Building2 />
            </div>
            <h3>Industry</h3>
            <p>
              Discover skill-ready candidates, post opportunities and
              collaborate on real-world projects.
            </p>
            <button>Industry Portal <ArrowRight size={16} /></button>
          </div>

          <div className="role-card">
            <div className="role-icon">
              <Users />
            </div>
            <h3>Institutions</h3>
            <p>
              Monitor placement readiness, identify skill gaps and manage
              industry collaboration.
            </p>
            <button>Institution Portal <ArrowRight size={16} /></button>
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="features" id="features">
        <div className="section-heading">
          <span>POWERFUL FEATURES</span>
          <h2>From skills to careers.</h2>
          <p>
            Technology designed to make academic-industry collaboration more
            transparent and effective.
          </p>
        </div>

        <div className="feature-grid">
          <div>
            <Sparkles />
            <h3>AI Skill Analytics</h3>
            <p>
              Analyze skills and benchmark student readiness against industry
              expectations.
            </p>
          </div>

          <div>
            <ShieldCheck />
            <h3>Verified Skill Index</h3>
            <p>
              Use GitHub activity and assessments to build evidence-backed
              skill profiles.
            </p>
          </div>

          <div>
            <BriefcaseBusiness />
            <h3>Smart Recruitment</h3>
            <p>
              Match candidates with opportunities based on skills and
              problem-solving ability.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div>
          <strong>Academia+Industry</strong>
          <p>Building a stronger bridge between education and industry.</p>
        </div>

        <span>SIH2604 • Academia–Industry Collaboration Portal</span>
      </footer>

    </div>
  );
}

export default Home;