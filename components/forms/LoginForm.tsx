"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (typeof window !== "undefined") {
      if (username.length && password.length) {
        const localData = localStorage?.getItem("userDetails");
        const userData = localData && JSON.parse(localData);
        const data = {
          username: userData.username,
          email: userData.email,
          password: userData.password,
          isLoggedIn: true,
        };
        if (
          (userData.username === username || userData.email === username) &&
          userData.password === password
        ) {
          localStorage.setItem("userDetails", JSON.stringify(data));
          router.push("/");
        } else {
          alert("Incorrect username or password");
        }
      } else {
        alert("Fill up all");
      }
    }
  };
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="name">
          Email Address <span>**</span>
        </label>
        <input
          id="name"
          type="text"
          placeholder="Enter Username or Email address..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="pass">
          Password <span>**</span>
        </label>
        <input
          id="pass"
          type="password"
          placeholder="Enter password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="login-action mb-20 fix">
          <span className="log-rem f-left">
            <input id="remember" type="checkbox" />
            <label htmlFor="remember">Remember me!</label>
          </span>
          <span className="forgot-login f-right">
            <a href="#">Lost your password?</a>
          </span>
        </div>
        <button
          className="btn btn-2 btn-black w-100"
          type="submit"
          onClick={() => handleLogin()}
        >
          Login Now
        </button>
        <div className="or-divide">
          <span>or</span>
        </div>
        <Link href={"/register"}>
          <button className="btn btn-2 w-100">Register Now</button>
        </Link>
      </form>
    </>
  );
};

export default LoginForm;
