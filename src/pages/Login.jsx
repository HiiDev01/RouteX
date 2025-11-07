import React from "react";
import "../styles/SignUp.css";

const Login = () => {
  return (
    <div className="auth-container">
      {/* Left Side */}
      <div className="auth-left">
        <p className="auth-switch">
          Don’t have an account? <a href="/signup">Sign up</a>
        </p>

        <h2>Welcome Back</h2>
        <p className="subtitle">
          Login to access your full dashboard.
        </p>

        <form className="auth-form">
          <label>Email</label>
          <input type="email" placeholder="example@mail.com" required />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />

          <button className="auth-btn">Sign In</button>
        </form>

        <div className="social-login">
          <p>Or sign in with</p>
          <div className="social-icons">
            <button><img src="https://img.icons8.com/color/48/google-logo.png" alt="Google" /></button>
            <button><img src="https://img.icons8.com/fluency/48/facebook-new.png" alt="Facebook" /></button>
            <button><img src="https://img.icons8.com/ios-filled/50/mac-os.png" alt="Apple" /></button>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="auth-right">
        <div className="quote">
          <p className="quote-icon">❝</p>
          <h1>Think Big.</h1>
          <p className="quote-text">
            “Dream it. Build it. Grow it. Make your vision a reality.”
          </p>
          <div className="author">
            <img
              src="https://randomuser.me/api/portraits/women/50.jpg"
              alt="Author"
              className="author-img"
            />
            <div>
              <h4>Sophia Turner</h4>
              <p>UI Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
