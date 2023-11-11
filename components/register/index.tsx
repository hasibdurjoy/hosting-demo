import React from "react";
import HeaderOne from "../layout/headers/header";
import Breadcrumb from "../common/breadcrumbs/breadcrumb";
import RegisterArea from "./RegisterArea";

const Register = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="Register" title="Register" />
        <RegisterArea />
      </main>
    </>
  );
};

export default Register;
