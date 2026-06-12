import "./Login.css";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [role, setRole] = useState("admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");

    // Admin Login
    if (role === "admin") {
      if (
        email === "admin@gmail.com" &&
        password === "admin123"
      ) {
        navigate("/admin-dashboard");
      } else {
        setError(
          "Invalid Admin Email or Password"
        );
      }
    }

    // Teacher Login
    if (role === "teacher") {
      if (
        email === "teacher@gmail.com" &&
        password === "teacher123"
      ) {
        navigate("/teacher-dashboard");
      } else {
        setError(
          "Invalid Teacher Email or Password"
        );
      }
    }

    // Parent Login
    if (role === "parent") {
      if (
        email === "parent@gmail.com" &&
        password === "parent123"
      ) {
        navigate("/parent-dashboard");
      } else {
        setError(
          "Invalid Parent Email or Password"
        );
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-overlay">
        <div className="login-card">
          <h1>Welcome Back</h1>

          <p className="login-subtitle">
            Sign into your EduSync account
          </p>

          <div className="role-switch">
            <button
              type="button"
              className={
                role === "admin"
                  ? "role-btn active"
                  : "role-btn"
              }
              onClick={() => {
                setRole("admin");
                setError("");
                setEmail("");
                setPassword("");
              }}
            >
              Admin
            </button>

            <button
              type="button"
              className={
                role === "teacher"
                  ? "role-btn active"
                  : "role-btn"
              }
              onClick={() => {
                setRole("teacher");
                setError("");
                setEmail("");
                setPassword("");
              }}
            >
              Teacher
            </button>

            <button
              type="button"
              className={
                role === "parent"
                  ? "role-btn active"
                  : "role-btn"
              }
              onClick={() => {
                setRole("parent");
                setError("");
                setEmail("");
                setPassword("");
              }}
            >
              Parent
            </button>
          </div>

          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>Email</label>

              <div className="input-box">
                <Mail size={20} />

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>Password</label>

              <div className="input-box">
                <Lock size={20} />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) =>
                    setPassword(
                      e.target.value
                    )
                  }
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <p className="login-error">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="signin-btn"
            >
              Sign In
            </button>
          </form>

          <div className="demo-credentials">
            <h4>Demo Credentials</h4>

            <div className="credential-item">
              <strong>Admin:</strong> admin@gmail.com / admin123
            </div>

            <div className="credential-item">
              <strong>Teacher:</strong> teacher@gmail.com / teacher123
            </div>

            <div className="credential-item">
              <strong>Parent:</strong> parent@gmail.com / parent123
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;