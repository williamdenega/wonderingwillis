import React, { useState } from "react";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "@firebase/auth";
import "./Login.css";

export default function Login({ setIsAuth }) {
  let navigate = useNavigate();

  const [error, setError] = useState(false);
  const [formData, setFormData] = useState("");

  const login = (e) => {
    e.preventDefault();

    try {
      signInWithEmailAndPassword(auth, process.env.REACT_APP_LOGIN_KEY, formData)
        .then(() => {
          setError(false);
          navigate("/");
        })
        .catch(() => {
          setError(true);
        });
    } catch (error) {
      console.log(error.message);
      console.log(error.code);
      setError(true);
    }
  };

  function handleChange(e) {
    setFormData(e.target.value);
  }

  return (
    <div className="login-page">
      <form onSubmit={login}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData}
          onChange={handleChange}
          required
        />
        {error && <p className="error-message">Wrong password, try again.</p>}
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
