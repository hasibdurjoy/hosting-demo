
"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const RegisterForm = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (username?.length && email.length && password.length) {
      const localData = localStorage?.getItem("userDetails");
      const userData = localData && JSON.parse(localData);
      if (userData?.username === username) {
        alert("Username already exist");
      } else if (userData?.email === email) {
        alert("email already exist");
      } else {
        const data = {
          username,
          email,
          password,
          isLoggedIn: true,
        };
        localStorage?.setItem("userDetails", JSON.stringify(data));
        router.push("/login");
      }
    } else {
      if(username.length===0){
        alert("Enter Username");
      }
      else if(email.length===0){
        alert("Enter email");
      }
      else if(password.length===0){
        alert("Enter password");
      }
    }
  };
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="name">
          Username <span>**</span>
        </label>
        <input
          id="name"
          type="text"
          placeholder="Enter Username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="email-id">
          Email Address <span>**</span>
        </label>
        <input
          id="email-id"
          type="text"
          placeholder="Email address..."
          onChange={(e) => setEmail(e.target.value)}
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
        <div className="mt-10"></div>
        <button
          className="btn btn-2 w-100"
          type="submit"
          onClick={() => handleRegister()}
        >
          Register Now
        </button>
        <div className="or-divide">
          <span>or</span>
        </div>
        <Link href={"/login"}>
          <button className="btn btn-2 w-100">login Now</button>
        </Link>
      </form>
    </>
  );
};

export default RegisterForm;
