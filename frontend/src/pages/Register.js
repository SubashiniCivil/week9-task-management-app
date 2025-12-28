import "../styles/Auth.css";

function Register({ switchToLogin }) {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create Account</h2>
        <p>Start managing your tasks</p>

        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button className="auth-btn">Register</button>

        <span onClick={switchToLogin}>
          Already have an account? <b>Login</b>
        </span>
      </div>
    </div>
  );
}

export default Register;
