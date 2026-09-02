import { useNavigate } from "react-router-dom";
import "./Team.css";

function Team() {
  const navigate = useNavigate();

  const members = [
    {
      name: "Rushmi Roy",
      role: "Team Lead",
      email: "rushmi@example.com",
      initial: "R",
      color: "purple",
    },
    {
      name: "Member 2",
      role: "Frontend Developer",
      email: "member2@example.com",
      initial: "M",
      color: "blue",
    },
    {
      name: "Member 3",
      role: "Backend Developer",
      email: "member3@example.com",
      initial: "M",
      color: "pink",
    },
    {
      name: "Member 4",
      role: "UI/UX Designer",
      email: "member4@example.com",
      initial: "M",
      color: "cyan",
    },
    {
      name: "Member 5",
      role: "Research & Documentation",
      email: "member5@example.com",
      initial: "M",
      color: "orange",
    },
    {
      name: "Member 6",
      role: "Data & Analytics",
      email: "member6@example.com",
      initial: "M",
      color: "green",
    },
  ];

  return (
    <div className="team-page">

      {/* Background glow */}
      <div className="team-glow glow-one"></div>
      <div className="team-glow glow-two"></div>

      {/* HEADER */}
      <header className="team-header">

        <div className="header-left">

          <button
            className="back-button"
            onClick={() => navigate("/dashboard")}
          >
            <span>←</span>
            Dashboard
          </button>

          <div className="title-row">
            <div className="title-icon">✦</div>

            <div>
              <div className="eyebrow">
                PROJECT COLLABORATION
              </div>

              <h1>My Team</h1>

              <p>
                Your project team and collaborators
              </p>
            </div>
          </div>

        </div>

        <div className="team-status">
          <span className="status-dot"></span>
          Team Complete
        </div>

      </header>

      {/* TEAM OVERVIEW */}
      <section className="team-overview">

        <div className="overview-main">

          <div className="project-label">
            YOUR PROJECT
          </div>

          <h2>
            Academia–Industry
            <br />
            Collaboration Portal
          </h2>

          <p>
            Building a unified ecosystem connecting students,
            academia and industry.
          </p>

          <div className="project-tags">
            <span>SIH 2026</span>
            <span>SIH2604</span>
            <span>Web Platform</span>
          </div>

        </div>

        <div className="overview-stats">

          <div className="overview-stat">
            <span>TEAM SIZE</span>
            <strong>06</strong>
            <small>/ 06 members</small>
          </div>

          <div className="overview-stat">
            <span>COLLABORATION</span>
            <strong>100%</strong>
            <small>team capacity</small>
          </div>

        </div>

      </section>

      {/* SECTION TITLE */}
      <div className="members-heading">

        <div>
          <div className="eyebrow">
            TEAM MEMBERS
          </div>

          <h2>Meet your team</h2>
        </div>

        <div className="member-pill">
          <span>06</span>
          members
        </div>

      </div>

      {/* MEMBERS */}
      <section className="members-grid">

        {members.map((member, index) => (

          <article
            className="member-card"
            key={member.email}
          >

            <div className="card-number">
              0{index + 1}
            </div>

            <div className={`member-avatar ${member.color}`}>
              {member.initial}
            </div>

            <div className="member-content">

              <div className="member-name-row">

                <h3>{member.name}</h3>

                {index === 0 && (
                  <span className="lead-tag">
                    LEAD
                  </span>
                )}

              </div>

              <div className="member-role">
                {member.role}
              </div>

              <div className="member-email">
                <span>✉</span>
                {member.email}
              </div>

            </div>

            <div className="card-arrow">
              ↗
            </div>

          </article>

        ))}

      </section>

      {/* BOTTOM INFO */}
      <section className="team-footer-card">

        <div className="footer-icon">
          ✓
        </div>

        <div>
          <h3>Team is ready</h3>

          <p>
            All 6 members have been added to the project.
            You can now continue collaborating on your
            AcademiaConnect solution.
          </p>
        </div>

        <div className="footer-count">
          6<span>/6</span>
        </div>

      </section>

    </div>
  );
}

export default Team;