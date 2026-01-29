import React from "react";

function Landing({ onNavigate }) {
    return (
        <>
            <div style={{ padding: "20px" }}>
                <h1>Welcome to Our Application</h1>
                <nav style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
                    <button onClick={() => onNavigate("home")}>Home</button>
                    <button onClick={() => onNavigate("about")}>About</button>
                    <button onClick={() => onNavigate("register")}>Register</button>
                    <button onClick={() => onNavigate("contact")}>Contact</button>
                    <button onClick={() => onNavigate("login")}>Login</button>
                </nav>
                <p>Welcome to our application. Use the navigation above to explore.</p>
            </div>
        </>
    );
}
export default Landing;