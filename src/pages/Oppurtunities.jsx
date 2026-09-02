import { useState } from "react";
import "./Opportunities.css";
import Opportunities from "./pages/Opportunities.jsx";

export default function Opportunities() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  const opportunities = [
    {
      id: 1,
      type: "Internship",
      title: "Frontend Developer Intern",
      company: "TechNova Solutions",
      location: "Remote",
      duration: "3 Months",
      stipend: "₹15,000 / month",
      skills: ["React", "JavaScript", "CSS"],
      posted: "2 days ago",
    },
    {
      id: 2,
      type: "Live Project",
      title: "AI-Powered Student Assistant",
      company: "InnovateLabs",
      location: "Hybrid",
      duration: "8 Weeks",
      stipend: "Certificate + PPO",
      skills: ["Python", "AI/ML", "NLP"],
      posted: "4 days ago",
    },
    {
      id: 3,
      type: "Job",
      title: "Junior Software Engineer",
      company: "CloudCore Technologies",
      location: "Bangalore",
      duration: "Full Time",
      stipend: "₹6–8 LPA",
      skills: ["Java", "Spring Boot", "SQL"],
      posted: "5 days ago",
    },
    {
      id: 4,
      type: "Internship",
      title: "Data Science Intern",
      company: "DataSphere Analytics",
      location: "Remote",
      duration: "6 Months",
      stipend: "₹20,000 / month",
      skills: ["Python", "Pandas", "Machine Learning"],
      posted: "1 week ago",
    },
    {
      id: 5,
      type: "Live Project",
      title: "Smart Campus Management System",
      company: "EduTech Innovations",
      location: "Hybrid",
      duration: "10 Weeks",
      stipend: "Certificate",
      skills: ["React", "Node.js", "MongoDB"],
      posted: "1 week ago",
    },
    {
      id: 6,
      type: "Job",
      title: "UI/UX Designer",
      company: "PixelWorks Studio",
      location: "Kolkata",
      duration: "Full Time",
      stipend: "₹4–6 LPA",
      skills: ["Figma", "UI Design", "UX Research"],
      posted: "2 weeks ago",
    },
  ];

  const filters = ["All", "Internship", "Live Project", "Job"];

  const filteredOpportunities = opportunities.filter((opportunity) => {
    const matchesFilter =
      activeFilter === "All" ||
      opportunity.type === activeFilter;

    const searchText = search.toLowerCase();

    const matchesSearch =
      opportunity.title.toLowerCase().includes(searchText) ||
      opportunity.company.toLowerCase().includes(searchText) ||
      opportunity.skills.some((skill) =>
        skill.toLowerCase().includes(searchText)
      );

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="opportunities-page">

      {/* HEADER */}
      <div className="opportunities-header">
        <div>
          <div className="page-label">
            OPPORTUNITIES
          </div>

          <h1>
            Discover your next <span>opportunity.</span>
          </h1>

          <p>
            Explore internships, live projects and jobs
            from our industry network.
          </p>
        </div>

        <div className="opportunity-count">
          <strong>{filteredOpportunities.length}</strong>
          <span>opportunities available</span>
        </div>
      </div>

      {/* SEARCH */}
      <div className="opportunities-toolbar">

        <div className="search-box">
          <span>⌕</span>

          <input
            type="text"
            placeholder="Search opportunities, companies or skills..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="filter-buttons">
          {filters.map((filter) => (
            <button
              key={filter}
              className={
                activeFilter === filter
                  ? "active"
                  : ""
              }
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

      </div>

      {/* OPPORTUNITY CARDS */}
      <div className="opportunities-grid">

        {filteredOpportunities.map((opportunity) => (
          <div
            className="opportunity-card"
            key={opportunity.id}
          >

            <div className="card-top">

              <span
                className={`opportunity-type ${opportunity.type
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                {opportunity.type}
              </span>

              <span className="posted">
                {opportunity.posted}
              </span>

            </div>

            <h2>
              {opportunity.title}
            </h2>

            <div className="company">
              <div className="company-icon">
                {opportunity.company
                  .charAt(0)
                  .toUpperCase()}
              </div>

              <span>
                {opportunity.company}
              </span>
            </div>

            <div className="opportunity-info">

              <div>
                <span>📍</span>
                {opportunity.location}
              </div>

              <div>
                <span>◷</span>
                {opportunity.duration}
              </div>

              <div>
                <span>₹</span>
                {opportunity.stipend}
              </div>

            </div>

            <div className="skills">

              {opportunity.skills.map((skill) => (
                <span key={skill}>
                  {skill}
                </span>
              ))}

            </div>

            <button
              className="view-opportunity"
              onClick={() =>
                alert(
                  `Opening ${opportunity.title}`
                )
              }
            >
              View opportunity
              <span>→</span>
            </button>

          </div>
        ))}

      </div>

      {/* EMPTY STATE */}
      {filteredOpportunities.length === 0 && (
        <div className="empty-state">

          <div className="empty-icon">
            🔎
          </div>

          <h2>
            No opportunities found
          </h2>

          <p>
            Try a different search term or filter.
          </p>

          <button
            onClick={() => {
              setSearch("");
              setActiveFilter("All");
            }}
          >
            Clear filters
          </button>

        </div>
      )}

    </div>
  );
}