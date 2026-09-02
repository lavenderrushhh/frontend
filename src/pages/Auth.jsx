import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

export default function Auth() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const switchMode = () => {
    setIsLogin((prev) => !prev);

    setName("");
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      if (!email || !password) {
        alert("Please enter your email and password.");
        return;
      }

      const savedUser = JSON.parse(
        localStorage.getItem("academiaUser") || "null"
      );

      let userName = email.split("@")[0];
      let userUsername = "";

      if (
        savedUser &&
        savedUser.email &&
        savedUser.email.toLowerCase() === email.toLowerCase()
      ) {
        userName = savedUser.name || userName;
        userUsername = savedUser.username || "";
      }

      localStorage.setItem(
        "academiaUser",
        JSON.stringify({
          name: userName,
          username: userUsername,
          email: email.trim(),
          password: savedUser?.password || password,
        })
      );

      navigate("/dashboard");
      return;
    }

    if (
      !name.trim() ||
      !username.trim() ||
      !email.trim() ||
      !password ||
      !confirmPassword
    ) {
      alert("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const user = {
      name: name.trim(),
      username: username.trim(),
      email: email.trim(),
      password: password,
    };

    localStorage.setItem(
      "academiaUser",
      JSON.stringify(user)
    );

    alert("Account created successfully!");

    navigate("/dashboard");
  };

  return (
    <div className="auth-page">
      <div className="auth-left">
        <div className="auth-brand">
          <div className="auth-brand-icon">
            A
          </div>

          <span>
            Academia<span>Connect</span>
          </span>
        </div>

        <div className="auth-left-content">
          <div className="auth-badge">
            <span className="badge-dot"></span>
            ACADEMIA × INDUSTRY
          </div>

          <h1>
            Where talent
            <br />
            meets <span>opportunity.</span>
          </h1>

          <p>
            Connect with industry, discover meaningful
            opportunities, find mentors and build your
            professional journey.
          </p>

          <div className="auth-stats">
            <div>
              <strong>2.4K+</strong>
              <span>Students</span>
            </div>

            <div>
              <strong>340+</strong>
              <span>Companies</span>
            </div>

            <div>
              <strong>180+</strong>
              <span>Institutions</span>
            </div>
          </div>

          <div className="auth-quote">
            <span></span>

            <p>
              Bridging academic potential with
              real-world opportunity.
            </p>
          </div>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-card">

          <button
            type="button"
            className="auth-back"
            onClick={() => navigate("/")}
          >
            ← Back to home
          </button>

          <div className="auth-card-logo">
            A
          </div>

          <div className="secure-label">
            {isLogin
              ? "SECURE ACCESS"
              : "JOIN THE ECOSYSTEM"}
          </div>

          <h2>
            {isLogin
              ? "Welcome back."
              : "Create your account."}
          </h2>

          <p className="auth-description">
            {isLogin
              ? "Sign in to continue to AcademiaConnect."
              : "Join the academia–industry ecosystem."}
          </p>

          <form onSubmit={handleSubmit}>

            {!isLogin && (
              <div className="field">
                <label>
                  FULL NAME
                </label>

                <input
                  type="text"
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                />
              </div>
            )}

            {/* USERNAME BOX */}
            {!isLogin && (
              <div className="field">
                <label>
                  USERNAME
                </label>

                <input
                  type="text"
                  placeholder="Choose a username"
                  value={username}
                  onChange={(e) =>
                    setUsername(e.target.value)
                  }
                />
              </div>
            )}

            <div className="field">
              <label>
                EMAIL ADDRESS
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />
            </div>

            <div className="field">
              <div className="password-row">

                <label>
                  PASSWORD
                </label>

                {isLogin && (
                  <button
                    type="button"
                    className="forgot"
                    onClick={() =>
                      alert(
                        "Password reset feature will be added later."
                      )
                    }
                  >
                    Forgot password?
                  </button>
                )}

              </div>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />
            </div>

            {!isLogin && (
              <div className="field">

                <label>
                  CONFIRM PASSWORD
                </label>

                <input
                  type="password"
                  placeholder="Re-enter your password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
                  }
                />

              </div>
            )}

            <button
              type="submit"
              className="auth-submit"
            >
              <span>
                {isLogin
                  ? "Sign in"
                  : "Create account"}
              </span>

              <span>
                →
              </span>
            </button>

          </form>

          <div className="divider">
            <span></span>
            OR
            <span></span>
          </div>

          <button
            type="button"
            className="google-button"
            onClick={() =>
              alert(
                "Google authentication will be connected later."
              )
            }
          >
            <b>G</b>
            Continue with Google
          </button>

          <div className="auth-switch">

            <span>
              {isLogin
                ? "Don't have an account?"
                : "Already have an account?"}
            </span>

            <button
              type="button"
              onClick={switchMode}
            >
              {isLogin
                ? "Sign up"
                : "Sign in"}
            </button>

          </div>

          <div className="security">
            🔒 Your information is securely protected
          </div>

        </div>
      </div>
    </div>
  );
}