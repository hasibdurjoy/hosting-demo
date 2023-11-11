"use client";
import DomainSearchBox from "../common/DomainSearchBox";
import Breadcrumb from "../common/breadcrumbs/breadcrumb";
import ChoseAreaHomeOne from "../homes/home/ChoseAreaHomeOne";
import TestimonailHomeOne from "../homes/home/TestimonailHomeOne";
import CoreFeatures from "../hosting/CoreFeatures";
import PriceArea from "../hosting/PriceArea";
import FooterOne from "../layout/footers/FooterOne";
import HeaderOne from "../layout/headers/header";

const DomainSearch = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="Search Domain" title="Domain Search" />
        <DomainSearchBox style={true} />
        <ChoseAreaHomeOne />
        <PriceArea style={true} />
        <CoreFeatures />
        <TestimonailHomeOne style={true} />
      </main>
      <FooterOne />
    </>
  );
};

export default DomainSearch;
