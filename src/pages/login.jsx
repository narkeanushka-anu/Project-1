import { useState } from "react";

function Login({ onLogin, onSignupClick }) {   // ✅ destructuring props
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handle = (e) => {
    e.preventDefault();

    if (
      email === "narkeanushka@gmail.com" &&
      password === "password2211"
    ) {
      onLogin();   // ✅ this NOW works
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h2>Login Page</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px", boxSizing: "border-box" }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px", boxSizing: "border-box" }}
      />

      <button onClick={handle} style={{ width: "100%", padding: "10px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", marginBottom: "10px" }}>Login</button>

      {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}

      <p style={{ textAlign: "center" }}>Don't have an account? <button onClick={onSignupClick} style={{ background: "none", border: "none", color: "#007bff", cursor: "pointer", textDecoration: "underline" }}>Sign Up</button></p>
    </div>
  );
}

export default Login;