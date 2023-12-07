"use client";
import { useRouter } from "next/navigation";
import LoginForm from "../forms/LoginForm";
import { useEffect } from "react";

const LoginArea = () => {
  const router = useRouter();
  useEffect(() => {
    const localData = localStorage?.getItem("userDetails");
    const userData = localData && JSON.parse(localData);
    if (userData) {
      router.push("/");
    }
  }, [localStorage?.getItem("userDetails")]);
  return (
    <>
      <div className="login-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="basic-login">
                <h3 className="text-center mb-60">Login From Here</h3>
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginArea;
