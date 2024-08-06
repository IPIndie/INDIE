import React, { useState } from 'react';
import './login.css'; // Import your CSS file

const Login = () => {
  
  const [action, setAction] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // Add name if needed for signup
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

const handleEmailChange = (event) => {
  setEmail(event.target.value);
};

const handlePasswordChange = (event)  => {
  setPassword(event.target.value);
};
const handleconfirmPasswordChange = (event)  => {
  setConfirmPassword(event.target.value);
};

const handleNameChange = (event)  => { // Add if needed for signup
  setName(event.target.value);
};

const handleSubmit = async (event) => {
  event.preventDefault();
  setErrorMessage(""); // Clear previous errors
  if (action === "Login") {
      handleLogin();
  } else {
      handleSignup();
  }
};


const handleLogin = async () => {
  // Prevent default form submission behavior

  // Implement login logic using your backend service
  // This is a placeholder, replace with your actual login functionality
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok)  
{
      throw new Error("Login failed");
    }

    // Handle successful login (e.g., redirect to another page)
    console.log("Login successful!");
  } catch (error) {
    setErrorMessage("Login failed. Please check your email and password.");
  }
};

const handleSignup = async () => {
   // Prevent default form submission behavior

  // Implement signup logic using your backend service
  // This is a placeholder, replace with your actual signup functionality
  try {
    const response = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, name }), // Add name if needed
    });

    if (!response.ok) {
      throw new Error("Signup failed");
    }

    // Handle successful signup (e.g., display success message)
    console.log("Signup successful!");
  } catch (error) {
    setErrorMessage("Signup failed. Please try again.");
  }
};

  return (

      <>
          <div className="container">
          <div className="header">
              <div className="text">{action}</div>
          </div>
          <form className="inputs" onSubmit={handleSubmit}>
              
                  <div className="input">
                      <input
                          type="text"
                          placeholder="Name: John Doe"
                          value={name}
                          onChange={handleNameChange}
                      />
                  </div>
              

              <div className="input">
                  <input
                      type="email"
                      placeholder="Email: user@gmail.com"
                      value={email}
                      onChange={handleEmailChange}
                  />
              </div>

              <div className="input">
                  <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={handlePasswordChange}
                  />
              </div>

              {action === "Sign Up" && (
                  <div className="input">
                      <input
                          type="password"
                          placeholder="Confirm Password"
                          value={confirmPassword}
                          onChange={handleconfirmPasswordChange}
                      />
                  </div>
              )}

              {action === "Login" && (
                
                  <div className="forgot-password">
                    <a href ="/passwordreset" >Forgot Password?</a>
                    </div>
              )}


              {errorMessage && <div className="error-message">{errorMessage}</div>}


 <div className="login-signup">
    {action === "Login" ? (
        <>
            <button type="submit" className="button-login">Login</button>
            <button
                type="button"
                className="button-switch"
                onClick={() => setAction("Sign Up")}
            >
                Sign Up
            </button>
        </>
    ) : (
        <>
            <button type="submit" className="button-login">Sign Up</button>
            <button
                type="button"
                className="button-switch"
                onClick={() => setAction("Login")}
            >
                Login
            </button>
        </>
    )}
</div>

          </form>
      </div>
      
      </>
  );
}

export default Login;
