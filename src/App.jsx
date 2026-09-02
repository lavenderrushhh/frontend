import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";


import Auth from "./pages/Auth.jsx";
import Home from "./pages/home.jsx";

import "./App.css";


/* =========================
   DASHBOARD
========================= */

function Dashboard() {
  const navigate = useNavigate();

  const [activeSection, setActiveSection] = useState("Overview");
  const [searchTerm, setSearchTerm] = useState("");

  const savedUser = JSON.parse(
    localStorage.getItem("academiaUser") || "null"
  );

  /* USERNAME */
  const name =
    savedUser?.username ||
    savedUser?.name ||
    "Student";

  const email = savedUser?.email || "";


  const handleSignOut = () => {
    localStorage.removeItem("academiaUser");
    navigate("/auth");
  };


  const opportunities = [
    {
      company: "Microsoft",
      role: "Software Engineering Intern",
      type: "Internship",
      location: "Bangalore / Hybrid",
      stipend: "₹45,000/month",
      skills: ["React", "JavaScript", "DSA"],
      logo: "M",
    },
    {
      company: "Deloitte",
      role: "Technology Analyst Intern",
      type: "Internship",
      location: "Hyderabad",
      stipend: "₹35,000/month",
      skills: ["Python", "SQL", "Cloud"],
      logo: "D",
    },
    {
      company: "TCS Research",
      role: "AI Research Project",
      type: "Live Project",
      location: "Remote",
      stipend: "Certificate + PPO",
      skills: ["Python", "Machine Learning", "NLP"],
      logo: "T",
    },
    {
      company: "Google",
      role: "Software Engineering Intern",
      type: "Internship",
      location: "Bangalore",
      stipend: "₹60,000/month",
      skills: ["C++", "DSA", "System Design"],
      logo: "G",
    },
  ];


  const filteredOpportunities = opportunities.filter((item) => {
    const search = searchTerm.toLowerCase();

    return (
      item.company.toLowerCase().includes(search) ||
      item.role.toLowerCase().includes(search) ||
      item.skills.some((skill) =>
        skill.toLowerCase().includes(search)
      )
    );
  });


  return (
    <div className="dashboard-page">

      {/* SIDEBAR */}

      <aside className="sidebar">

        <div className="sidebar-brand">

          <div className="brand-mark">
            A
          </div>

          <div className="brand-text">
            <strong>AcademiaConnect</strong>
            <span>Student Portal</span>
          </div>

        </div>


        <nav className="sidebar-nav">

          <button
            className={
              activeSection === "Overview"
                ? "nav-item active"
                : "nav-item"
            }
            onClick={() => setActiveSection("Overview")}
          >
            <span>⌂</span>
            Overview
          </button>


          <button
            className={
              activeSection === "Opportunities"
                ? "nav-item active"
                : "nav-item"
            }
            onClick={() => setActiveSection("Opportunities")}
          >
            <span>◈</span>
            Opportunities
          </button>


          <button
            className={
              activeSection === "Applications"
                ? "nav-item active"
                : "nav-item"
            }
            onClick={() => setActiveSection("Applications")}
          >
            <span>▣</span>
            Applications
          </button>


          <button
            className={
              activeSection === "Projects"
                ? "nav-item active"
                : "nav-item"
            }
            onClick={() => setActiveSection("Projects")}
          >
            <span>◇</span>
            Projects
          </button>


          <button
            className={
              activeSection === "Mentorship"
                ? "nav-item active"
                : "nav-item"
            }
            onClick={() => setActiveSection("Mentorship")}
          >
            <span>♧</span>
            Mentorship
          </button>


          <button
            className={
              activeSection === "My Profile"
                ? "nav-item active"
                : "nav-item"
            }
            onClick={() => setActiveSection("My Profile")}
          >
            <span>◎</span>
            My Profile
          </button>

        </nav>


        <div className="sidebar-bottom">

          <div className="sidebar-user">

            <div className="mini-avatar">
              {name.charAt(0).toUpperCase()}
            </div>

            <div className="sidebar-user-info">
              <strong>{name}</strong>
              <span>Student</span>
            </div>

          </div>


          <button
            className="signout-button"
            onClick={handleSignOut}
          >
            <span>↪</span>
            Sign out
          </button>

        </div>

      </aside>


      {/* MAIN */}

      <main className="dashboard-main">

        {/* TOP BAR */}

        <header className="dashboard-topbar">

          <div className="topbar-search">

            <span>⌕</span>

            <input
              type="text"
              placeholder="Search AcademiaConnect..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
            />

          </div>


          <div className="topbar-actions">

            <button className="notification-button">
              🔔
            </button>


            <div className="topbar-profile">

              <div className="mini-avatar">
                {name.charAt(0).toUpperCase()}
              </div>

              <div>
                <strong>{name}</strong>
                <span>Student</span>
              </div>

            </div>

          </div>

        </header>


        {/* CONTENT */}

        <div className="dashboard-content">

          {/* ================= OVERVIEW ================= */}

          {activeSection === "Overview" && (
            <>

              <div className="dashboard-heading">

                <div>

                  <p className="eyebrow">
                    STUDENT DASHBOARD
                  </p>

                  <h1>
                    Welcome back, {name}
                  </h1>

                  <p>
                    Track your opportunities, projects and
                    career growth.
                  </p>

                </div>

              </div>


              {/* STATS */}

              <div className="stats-grid">

                <div className="stat-card">

                  <div className="stat-icon">
                    💼
                  </div>

                  <div>
                    <strong>12</strong>
                    <span>Applications</span>
                  </div>

                </div>


                <div className="stat-card">

                  <div className="stat-icon">
                    🚀
                  </div>

                  <div>
                    <strong>4</strong>
                    <span>Active Projects</span>
                  </div>

                </div>


                <div className="stat-card">

                  <div className="stat-icon">
                    🎯
                  </div>

                  <div>
                    <strong>8</strong>
                    <span>Matched Opportunities</span>
                  </div>

                </div>


                <div className="stat-card">

                  <div className="stat-icon">
                    👨‍🏫
                  </div>

                  <div>
                    <strong>2</strong>
                    <span>Mentors</span>
                  </div>

                </div>

              </div>


              {/* RECOMMENDED */}

              <section className="dashboard-section">

                <div className="section-header">

                  <div>

                    <h2>
                      Recommended opportunities
                    </h2>

                    <p>
                      Based on your skills and profile.
                    </p>

                  </div>


                  <button
                    className="text-button"
                    onClick={() =>
                      setActiveSection("Opportunities")
                    }
                  >
                    View all →
                  </button>

                </div>


                <div className="opportunity-grid">

                  {opportunities
                    .slice(0, 3)
                    .map((item) => (
                      <OpportunityCard
                        key={item.company}
                        item={item}
                      />
                    ))}

                </div>

              </section>


              {/* ACTIVITY */}

              <section className="dashboard-section">

                <div className="section-header">

                  <div>

                    <h2>
                      Recent activity
                    </h2>

                    <p>
                      Your latest updates.
                    </p>

                  </div>

                </div>


                <div className="activity-card">

                  <div className="activity-item">

                    <div className="activity-dot" />

                    <div>

                      <strong>
                        Profile updated
                      </strong>

                      <p>
                        Your profile was successfully
                        updated.
                      </p>

                    </div>

                    <span>
                      Today
                    </span>

                  </div>


                  <div className="activity-item">

                    <div className="activity-dot" />

                    <div>

                      <strong>
                        Application submitted
                      </strong>

                      <p>
                        Software Engineering Intern at
                        Microsoft.
                      </p>

                    </div>

                    <span>
                      2 days ago
                    </span>

                  </div>


                  <div className="activity-item">

                    <div className="activity-dot" />

                    <div>

                      <strong>
                        New opportunity matched
                      </strong>

                      <p>
                        An AI Research Project matches
                        your skills.
                      </p>

                    </div>

                    <span>
                      4 days ago
                    </span>

                  </div>

                </div>

              </section>

            </>
          )}


          {/* ================= OPPORTUNITIES ================= */}

          {activeSection === "Opportunities" && (
            <>

              <div className="dashboard-heading">

                <p className="eyebrow">
                  OPPORTUNITIES
                </p>

                <h1>
                  Find your next opportunity
                </h1>

                <p>
                  Explore internships, jobs and live
                  industry projects.
                </p>

              </div>


              <div className="opportunity-toolbar">

                <div className="large-search">

                  <span>
                    ⌕
                  </span>

                  <input
                    placeholder="Search companies, roles or skills..."
                    value={searchTerm}
                    onChange={(e) =>
                      setSearchTerm(e.target.value)
                    }
                  />

                </div>

              </div>


              <div className="opportunity-grid">

                {filteredOpportunities.map((item) => (
                  <OpportunityCard
                    key={item.company}
                    item={item}
                  />
                ))}

              </div>

            </>
          )}


          {/* ================= APPLICATIONS ================= */}

          {activeSection === "Applications" && (
            <>

              <div className="dashboard-heading">

                <p className="eyebrow">
                  APPLICATIONS
                </p>

                <h1>
                  Your applications
                </h1>

                <p>
                  Track the status of your applications.
                </p>

              </div>


              <div className="application-list">

                {(() => {
                  const savedApplications = JSON.parse(
                    localStorage.getItem("academiaApplications") || "[]"
                  );

                  if (savedApplications.length === 0) {
                    return (
                      <div className="application-card">

                        <div className="company-logo">
                          —
                        </div>

                        <div className="application-info">
                          <h3>
                            No applications yet
                          </h3>

                          <p>
                            Apply to an opportunity and it
                            will appear here.
                          </p>
                        </div>

                      </div>
                    );
                  }

                  return savedApplications.map(
                    (application, index) => {

                      let statusClass = "pending";

                      if (
                        application.status === "Selected"
                      ) {
                        statusClass = "selected";
                      } else if (
                        application.status === "Shortlisted"
                      ) {
                        statusClass = "shortlisted";
                      }

                      return (
                        <div
                          className="application-card"
                          key={`${application.company}-${application.role}-${index}`}
                        >

                          <div className="company-logo">
                            {application.company
                              .charAt(0)
                              .toUpperCase()}
                          </div>

                          <div className="application-info">

                            <h3>
                              {application.role}
                            </h3>

                            <p>
                              {application.company}
                            </p>

                            <small>
                              Applied on{" "}
                              {application.appliedAt}
                            </small>

                          </div>

                          <span
                            className={`status-pill ${statusClass}`}
                          >
                            {application.status}
                          </span>

                        </div>
                      );
                    }
                  );
                })()}

              </div>

            </>
          )}


          {/* ================= PROJECTS ================= */}

          {activeSection === "Projects" && (
            <>

              <div className="dashboard-heading">

                <p className="eyebrow">
                  PROJECTS
                </p>

                <h1>
                  Industry projects
                </h1>

                <p>
                  Build real-world experience with
                  industry partners.
                </p>

              </div>


              <div className="project-grid">

                <div className="project-card">

                  <span className="project-label">
                    ACTIVE
                  </span>

                  <h3>
                    Intelligent Document Processing
                  </h3>

                  <p>
                    Build an AI-powered document
                    processing pipeline using NLP and
                    machine learning.
                  </p>

                  <div className="project-info">
                    AI / ML · 8 weeks
                  </div>

                  <button
                    onClick={() =>
                      alert(
                        "Project details coming soon!"
                      )
                    }
                  >
                    View project
                  </button>

                </div>


                <div className="project-card">

                  <span className="project-label">
                    OPEN
                  </span>

                  <h3>
                    Campus Recruitment Platform
                  </h3>

                  <p>
                    Design and develop a scalable
                    recruitment platform with an
                    industry team.
                  </p>

                  <div className="project-info">
                    Web Development · 12 weeks
                  </div>

                  <button
                    onClick={() =>
                      alert(
                        "Project details coming soon!"
                      )
                    }
                  >
                    View project
                  </button>

                </div>

              </div>

            </>
          )}


          {/* ================= MENTORSHIP ================= */}

          {activeSection === "Mentorship" && (
            <>

              <div className="dashboard-heading">

                <p className="eyebrow">
                  MENTORSHIP
                </p>

                <h1>
                  Find a mentor
                </h1>

                <p>
                  Connect with experienced industry
                  professionals.
                </p>

              </div>


              <div className="mentor-grid">

                <Mentor
                  initials="AS"
                  title="Industry Mentor"
                  role="Senior Software Engineer"
                  skills="React · System Design · Career"
                />


                <Mentor
                  initials="RK"
                  title="Research Mentor"
                  role="AI / ML Researcher"
                  skills="Python · Machine Learning · Research"
                />

              </div>

            </>
          )}


          {/* ================= PROFILE ================= */}

          {activeSection === "My Profile" && (
            <>

              <div className="dashboard-heading">

                <p className="eyebrow">
                  MY PROFILE
                </p>

                <h1>
                  {name}
                </h1>

                <p>
                  {email}
                </p>

              </div>


              <div className="profile-container">

                <div className="profile-main-card">

                  <div className="profile-avatar">
                    {name.charAt(0).toUpperCase()}
                  </div>

                  <h2>
                    {name}
                  </h2>

                  <p>
                    {email}
                  </p>

                  <span className="verified">
                    ✓ Verified Student
                  </span>

                </div>


                <div className="profile-details">

                  <div className="profile-detail-card">

                    <h3>
                      Skills
                    </h3>

                    <div className="skill-list">

                      <span>
                        React
                      </span>

                      <span>
                        JavaScript
                      </span>

                      <span>
                        Python
                      </span>

                      <span>
                        SQL
                      </span>

                      <span>
                        Machine Learning
                      </span>

                      <span>
                        Git
                      </span>

                    </div>

                  </div>


                  <div className="profile-detail-card">

                    <h3>
                      Education
                    </h3>

                    <strong>
                      Computer Science & Engineering
                    </strong>

                    <p>
                      Undergraduate Student
                    </p>

                  </div>

                </div>

              </div>

            </>
          )}

        </div>

      </main>

    </div>
  );
}


/* =========================
   OPPORTUNITY CARD
========================= */

function OpportunityCard({ item }) {

  const handleApply = () => {

    const savedApplications = JSON.parse(
      localStorage.getItem("academiaApplications") || "[]"
    );

    const alreadyApplied = savedApplications.some(
      (application) =>
        application.company === item.company &&
        application.role === item.role
    );

    if (alreadyApplied) {
      alert(
        "You have already applied for this opportunity."
      );
      return;
    }

    const newApplication = {
      company: item.company,
      role: item.role,
      type: item.type,
      location: item.location,
      stipend: item.stipend,
      skills: item.skills,
      status: "Under Review",
      appliedAt: new Date().toLocaleDateString(),
    };

    localStorage.setItem(
      "academiaApplications",
      JSON.stringify([
        ...savedApplications,
        newApplication,
      ])
    );

    alert(
      `Application submitted for ${item.role}!`
    );
  };

  return (
    <div className="opportunity-card">

      <div className="opportunity-card-top">

        <div className="company-logo">
          {item.logo}
        </div>

        <span className="opportunity-type">
          {item.type}
        </span>

      </div>


      <h3>
        {item.role}
      </h3>


      <p className="company-name">
        {item.company}
      </p>


      <div className="opportunity-meta">

        <span>
          📍 {item.location}
        </span>

        <span>
          💰 {item.stipend}
        </span>

      </div>


      <div className="skill-list">

        {item.skills.map((skill) => (
          <span key={skill}>
            {skill}
          </span>
        ))}

      </div>


      <button
        className="apply-button"
        onClick={handleApply}
      >
        Apply now
      </button>

    </div>
  );
}


/* =========================
   APPLICATION
========================= */

function Application({
  logo,
  title,
  company,
  status,
  statusClass,
}) {
  return (
    <div className="application-card">

      <div className="company-logo">
        {logo}
      </div>

      <div className="application-info">

        <h3>
          {title}
        </h3>

        <p>
          {company}
        </p>

      </div>

      <span
        className={`status-pill ${statusClass}`}
      >
        {status}
      </span>

    </div>
  );
}


/* =========================
   MENTOR
========================= */

function Mentor({
  initials,
  title,
  role,
  skills,
}) {
  return (
    <div className="mentor-card">

      <div className="mentor-avatar">
        {initials}
      </div>

      <h3>
        {title}
      </h3>

      <p>
        {role}
      </p>

      <div className="mentor-skills">
        {skills}
      </div>

      <button
        onClick={() =>
          alert(
            "Mentorship request sent!"
          )
        }
      >
        Request mentorship
      </button>

    </div>
  );
}


/* =========================
   APP ROUTES
========================= */

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/auth"
        element={<Auth />}
      />

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

    </Routes>
  );
}


export default App;