import React from "react";
import HeaderOne from "../layout/headers/header";
import FooterOne from "../layout/footers/FooterOne";
import Breadcrumb from "../common/breadcrumbs/breadcrumb";

const Payment = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="Purchase" title="Purchase" />
        <h2>Details</h2>
      </main>
      <FooterOne />
    </>
  );
};

export default Payment;
