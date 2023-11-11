import React from "react";
import HeaderOne from "../layout/headers/header";
import Breadcrumb from "../common/breadcrumbs/breadcrumb";
import ChoseAreaHomeOne from "../homes/home/ChoseAreaHomeOne";
import PriceArea from "./PriceArea";
import CoreFeatures from "./CoreFeatures";
import TestimonailHomeOne from "../homes/home/TestimonailHomeOne";
import FooterOne from "../layout/footers/FooterOne";

const Hosting = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="Shared Hosting" title="Shared Hosting" />
        <ChoseAreaHomeOne />
        <PriceArea />
        <CoreFeatures />
        {/* <TestimonailHomeOne style={true} /> */}
      </main>
      <FooterOne />
    </>
  );
};

export default Hosting;
