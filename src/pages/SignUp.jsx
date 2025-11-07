import React from "react";
import "../styles/SignUp.css";

const Signup = () => {
  return (
    <div className="auth-container">
      {/* Left Side */}
      <div className="auth-left">
        <p className="auth-switch">
          Have an account? <a href="/login">Sign in</a>
        </p>

        <h2>Welcome to <span className="brand">RoutEx</span></h2>
        <p className="subtitle">
          Benefit from secured and smart access to your account.
        </p>

        <form className="auth-form">
          <label>Email</label>
          <input type="email" placeholder="example@mail.com" required />

          <label>Password</label>
          <input type="password" placeholder="8+ strong characters" required />

          <button className="auth-btn">Create an account</button>
        </form>

        <div className="social-login">
          <p>Or sign up with</p>
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
          <h1>Make a Dream.</h1>
          <p className="quote-text">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
          </p>
          <div className="author">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Author"
              className="author-img"
            />
            <div>
              <h4>Waleed Lozano</h4>
              <p>Product Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
