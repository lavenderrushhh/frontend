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
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const savedUser = JSON.parse(
    localStorage.getItem("academiaUser") || "null"
  );

  const name =
    savedUser?.username ||
    savedUser?.name ||
    "Student";

  const email = savedUser?.email || "";

  const handleSignOut = () => {
    localStorage.removeItem("academiaUser");
    navigate("/auth");
  };

  /* =========================
     OPPORTUNITIES DATA
  ========================= */

  const opportunities = [
    {
      company: "Microsoft",
      role: "Software Engineering Intern",
      type: "Internship",
      location: "Bangalore / Hybrid",
      duration: "3 Months",
      stipend: "₹45,000/month",
      skills: ["React", "JavaScript", "DSA"],
      logo: "M",
      deadline: "30 September 2026",
      description:
        "Work with Microsoft's engineering team to build scalable software solutions and contribute to real-world products.",
      responsibilities: [
        "Develop and maintain frontend and backend features.",
        "Write clean, efficient and maintainable code.",
        "Collaborate with engineers and product teams.",
        "Participate in code reviews and technical discussions.",
      ],
      requirements: [
        "Currently pursuing a degree in Computer Science or related field.",
        "Strong programming fundamentals.",
        "Knowledge of JavaScript and React.",
        "Understanding of data structures and algorithms.",
      ],
    },

    {
      company: "Deloitte",
      role: "Technology Analyst Intern",
      type: "Internship",
      location: "Hyderabad",
      duration: "3 Months",
      stipend: "₹35,000/month",
      skills: ["Python", "SQL", "Cloud"],
      logo: "D",
      deadline: "15 October 2026",
      description:
        "Join Deloitte's technology team and work on data, cloud and enterprise technology solutions.",
      responsibilities: [
        "Assist in developing technology solutions.",
        "Work with databases and SQL queries.",
        "Support cloud-based applications.",
        "Collaborate with analysts and developers.",
      ],
      requirements: [
        "Knowledge of Python.",
        "Working knowledge of SQL.",
        "Basic understanding of cloud computing.",
        "Good analytical and communication skills.",
      ],
    },

    {
      company: "TCS Research",
      role: "AI Research Project",
      type: "Live Project",
      location: "Remote",
      duration: "8 Weeks",
      stipend: "Certificate + PPO",
      skills: ["Python", "Machine Learning", "NLP"],
      logo: "T",
      deadline: "25 September 2026",
      description:
        "Work on an industry-oriented AI research project involving machine learning and natural language processing.",
      responsibilities: [
        "Research machine learning techniques.",
        "Build and evaluate NLP models.",
        "Analyse datasets and experiment with algorithms.",
        "Prepare technical documentation and reports.",
      ],
      requirements: [
        "Strong Python fundamentals.",
        "Basic knowledge of Machine Learning.",
        "Understanding of NLP concepts.",
        "Interest in research and experimentation.",
      ],
    },

    {
      company: "Google",
      role: "Software Engineering Intern",
      type: "Internship",
      location: "Bangalore",
      duration: "3 Months",
      stipend: "₹60,000/month",
      skills: ["C++", "DSA", "System Design"],
      logo: "G",
      deadline: "10 October 2026",
      description:
        "Gain hands-on experience working with software engineers on challenging technical problems.",
      responsibilities: [
        "Design and implement software components.",
        "Solve complex engineering problems.",
        "Work with large-scale systems.",
        "Collaborate with engineering teams.",
      ],
      requirements: [
        "Strong programming skills.",
        "Excellent understanding of DSA.",
        "Knowledge of C++ or equivalent programming language.",
        "Strong problem-solving ability.",
      ],
    },

    {
      company: "DataSphere Analytics",
      role: "Data Science Intern",
      type: "Internship",
      location: "Remote",
      duration: "6 Months",
      stipend: "₹20,000/month",
      skills: ["Python", "Pandas", "Machine Learning"],
      logo: "D",
      deadline: "5 November 2026",
      description:
        "Work with real-world datasets and develop data-driven solutions using Python and machine learning.",
      responsibilities: [
        "Clean and preprocess datasets.",
        "Perform exploratory data analysis.",
        "Build machine learning models.",
        "Create reports and communicate insights.",
      ],
      requirements: [
        "Python programming.",
        "Knowledge of Pandas and NumPy.",
        "Basic understanding of machine learning.",
        "Analytical mindset.",
      ],
    },

    {
      company: "EduTech Innovations",
      role: "Smart Campus Management System",
      type: "Live Project",
      location: "Hybrid",
      duration: "10 Weeks",
      stipend: "Certificate",
      skills: ["React", "Node.js", "MongoDB"],
      logo: "E",
      deadline: "20 October 2026",
      description:
        "Build a smart campus management platform connecting students, faculty and administrators.",
      responsibilities: [
        "Develop responsive web interfaces.",
        "Build REST APIs.",
        "Design and manage database collections.",
        "Work with a team to deliver project milestones.",
      ],
      requirements: [
        "React fundamentals.",
        "Basic Node.js knowledge.",
        "MongoDB fundamentals.",
        "Ability to work in a team.",
      ],
    },

    {
      company: "PixelWorks Studio",
      role: "UI/UX Designer",
      type: "Job",
      location: "Kolkata",
      duration: "Full Time",
      stipend: "₹4–6 LPA",
      skills: ["Figma", "UI Design", "UX Research"],
      logo: "P",
      deadline: "30 October 2026",
      description:
        "Join a creative product team and design intuitive digital experiences for web and mobile applications.",
      responsibilities: [
        "Create wireframes and prototypes.",
        "Design modern user interfaces.",
        "Conduct UX research.",
        "Collaborate with developers and product managers.",
      ],
      requirements: [
        "Strong knowledge of Figma.",
        "Understanding of UI/UX principles.",
        "Good visual design skills.",
        "Portfolio demonstrating design work.",
      ],
    },
  ];

  const filteredOpportunities = opportunities.filter((item) => {
    const search = searchTerm.toLowerCase();

    return (
      item.company.toLowerCase().includes(search) ||
      item.role.toLowerCase().includes(search) ||
      item.type.toLowerCase().includes(search) ||
      item.location.toLowerCase().includes(search) ||
      item.skills.some((skill) =>
        skill.toLowerCase().includes(search)
      )
    );
  });

  /* =========================
     VIEW OPPORTUNITY
  ========================= */

  const handleViewOpportunity = (item) => {
    setSelectedOpportunity(item);
  };

  const handleBackToOpportunities = () => {
    setSelectedOpportunity(null);
  };

  /* =========================
     OPPORTUNITY DETAILS
  ========================= */

  if (selectedOpportunity) {
    return (
      <div className="dashboard-page">

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
              className="nav-item"
              onClick={() => {
                setSelectedOpportunity(null);
                setActiveSection("Overview");
              }}
            >
              <span>⌂</span>
              Overview
            </button>

            <button
              className="nav-item active"
              onClick={() => {
                setSelectedOpportunity(null);
                setActiveSection("Opportunities");
              }}
            >
              <span>◈</span>
              Opportunities
            </button>

            <button
              className="nav-item"
              onClick={() => {
                setSelectedOpportunity(null);
                setActiveSection("Applications");
              }}
            >
              <span>▣</span>
              Applications
            </button>

            <button
              className="nav-item"
              onClick={() => {
                setSelectedOpportunity(null);
                setActiveSection("Projects");
              }}
            >
              <span>◇</span>
              Projects
            </button>

            <button
              className="nav-item"
              onClick={() => {
                setSelectedOpportunity(null);
                setActiveSection("Mentorship");
              }}
            >
              <span>♧</span>
              Mentorship
            </button>

            <button
              className="nav-item"
              onClick={() => {
                setSelectedOpportunity(null);
                setActiveSection("My Profile");
              }}
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

        <main className="dashboard-main">

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

          <div className="dashboard-content">

            <button
              className="text-button"
              onClick={handleBackToOpportunities}
              style={{
                marginBottom: "25px",
                fontSize: "15px",
              }}
            >
              ← Back to opportunities
            </button>

            <div className="dashboard-heading">

              <p className="eyebrow">
                {selectedOpportunity.type.toUpperCase()}
              </p>

              <h1>
                {selectedOpportunity.role}
              </h1>

              <p>
                {selectedOpportunity.company}
              </p>

            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "minmax(0, 2fr) minmax(280px, 1fr)",
                gap: "25px",
                marginTop: "30px",
              }}
            >

              <div>

                <div className="profile-detail-card">

                  <h3>About the opportunity</h3>

                  <p
                    style={{
                      lineHeight: "1.7",
                      marginTop: "12px",
                    }}
                  >
                    {selectedOpportunity.description}
                  </p>

                </div>

                <div
                  className="profile-detail-card"
                  style={{ marginTop: "20px" }}
                >

                  <h3>Responsibilities</h3>

                  <ul
                    style={{
                      lineHeight: "1.8",
                      paddingLeft: "22px",
                    }}
                  >
                    {selectedOpportunity.responsibilities.map(
                      (item, index) => (
                        <li key={index}>
                          {item}
                        </li>
                      )
                    )}
                  </ul>

                </div>

                <div
                  className="profile-detail-card"
                  style={{ marginTop: "20px" }}
                >

                  <h3>Requirements</h3>

                  <ul
                    style={{
                      lineHeight: "1.8",
                      paddingLeft: "22px",
                    }}
                  >
                    {selectedOpportunity.requirements.map(
                      (item, index) => (
                        <li key={index}>
                          {item}
                        </li>
                      )
                    )}
                  </ul>

                </div>

                <div
                  className="profile-detail-card"
                  style={{ marginTop: "20px" }}
                >

                  <h3>Required skills</h3>

                  <div className="skill-list">

                    {selectedOpportunity.skills.map(
                      (skill) => (
                        <span key={skill}>
                          {skill}
                        </span>
                      )
                    )}

                  </div>

                </div>

              </div>

              <div>

                <div className="profile-detail-card">

                  <div
                    style={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "18px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "30px",
                      fontWeight: "700",
                      background:
                        "rgba(255,255,255,0.08)",
                      marginBottom: "18px",
                    }}
                  >
                    {selectedOpportunity.logo}
                  </div>

                  <h3>
                    {selectedOpportunity.company}
                  </h3>

                  <p>
                    📍 {selectedOpportunity.location}
                  </p>

                  <p>
                    ⏱ {selectedOpportunity.duration}
                  </p>

                  <p>
                    💰 {selectedOpportunity.stipend}
                  </p>

                  <p>
                    📅 Deadline:{" "}
                    {selectedOpportunity.deadline}
                  </p>

                  <button
                    className="apply-button"
                    style={{
                      width: "100%",
                      marginTop: "15px",
                    }}
                    onClick={() =>
                      handleApply(selectedOpportunity)
                    }
                  >
                    Apply for this position
                  </button>

                </div>

              </div>

            </div>

          </div>

        </main>

      </div>
    );
  }

  /* =========================
     MAIN DASHBOARD
  ========================= */

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
            onClick={() => {
              setSelectedProject(null);
              setActiveSection("Projects");
            }}
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
                        onView={handleViewOpportunity}
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
                    key={`${item.company}-${item.role}`}
                    item={item}
                    onView={handleViewOpportunity}
                  />
                ))}

              </div>

              {filteredOpportunities.length === 0 && (
                <div
                  className="application-card"
                  style={{ marginTop: "25px" }}
                >

                  <div className="application-info">

                    <h3>
                      No opportunities found
                    </h3>

                    <p>
                      Try searching for a different company,
                      role or skill.
                    </p>

                  </div>

                </div>
              )}

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
                    localStorage.getItem(
                      "academiaApplications"
                    ) || "[]"
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
              {!selectedProject ? (
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
                          setSelectedProject({
                            title:
                              "Intelligent Document Processing",
                            status: "ACTIVE",
                            category: "AI / ML",
                            duration: "8 weeks",
                            description:
                              "Build an AI-powered document processing pipeline using NLP and machine learning.",
                            skills: [
                              "Python",
                              "Machine Learning",
                              "NLP",
                            ],
                            responsibilities: [
                              "Design and develop document processing pipelines.",
                              "Apply NLP and machine learning techniques.",
                              "Process and analyse real-world datasets.",
                              "Build and evaluate intelligent models.",
                            ],
                          })
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
                          setSelectedProject({
                            title:
                              "Campus Recruitment Platform",
                            status: "OPEN",
                            category: "Web Development",
                            duration: "12 weeks",
                            description:
                              "Design and develop a scalable recruitment platform with an industry team.",
                            skills: [
                              "React",
                              "Node.js",
                              "MongoDB",
                            ],
                            responsibilities: [
                              "Develop responsive web interfaces.",
                              "Build REST APIs.",
                              "Design and manage database collections.",
                              "Work with a team to deliver project milestones.",
                            ],
                          })
                        }
                      >
                        View project
                      </button>

                    </div>

                  </div>

                </>
              ) : (
                <>

                  <button
                    className="text-button"
                    onClick={() => setSelectedProject(null)}
                    style={{
                      marginBottom: "25px",
                      fontSize: "15px",
                    }}
                  >
                    ← Back to projects
                  </button>

                  <div className="dashboard-heading">

                    <p className="eyebrow">
                      {selectedProject.status}
                    </p>

                    <h1>
                      {selectedProject.title}
                    </h1>

                    <p>
                      {selectedProject.category} ·{" "}
                      {selectedProject.duration}
                    </p>

                  </div>

                  <div
                    className="profile-detail-card"
                    style={{ marginTop: "30px" }}
                  >

                    <h3>
                      About the project
                    </h3>

                    <p
                      style={{
                        lineHeight: "1.7",
                        marginTop: "12px",
                      }}
                    >
                      {selectedProject.description}
                    </p>

                  </div>

                  <div
                    className="profile-detail-card"
                    style={{ marginTop: "20px" }}
                  >

                    <h3>
                      Responsibilities
                    </h3>

                    <ul
                      style={{
                        lineHeight: "1.8",
                        paddingLeft: "22px",
                      }}
                    >
                      {selectedProject.responsibilities.map(
                        (item, index) => (
                          <li key={index}>
                            {item}
                          </li>
                        )
                      )}
                    </ul>

                  </div>

                  <div
                    className="profile-detail-card"
                    style={{ marginTop: "20px" }}
                  >

                    <h3>
                      Required skills
                    </h3>

                    <div className="skill-list">

                      {selectedProject.skills.map(
                        (skill) => (
                          <span key={skill}>
                            {skill}
                          </span>
                        )
                      )}

                    </div>

                  </div>

                </>
              )}
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
   APPLY FUNCTION
========================= */

function handleApply(item) {

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
    id: Date.now(),
    company: item.company,
    role: item.role,
    type: item.type,
    location: item.location,
    duration: item.duration,
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
}

/* =========================
   OPPORTUNITY CARD
========================= */

function OpportunityCard({ item, onView }) {

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

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "18px",
        }}
      >

        <button
          className="text-button"
          onClick={() => onView(item)}
          style={{
            flex: 1,
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "10px",
            padding: "11px 12px",
          }}
        >
          View Opportunity
        </button>

        <button
          className="apply-button"
          onClick={() => handleApply(item)}
          style={{
            flex: 1,
          }}
        >
          Apply now
        </button>

      </div>

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