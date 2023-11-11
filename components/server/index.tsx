import Breadcrumb from "../common/breadcrumbs/breadcrumb";
import TestimonailHomeOne from "../homes/home/TestimonailHomeOne";
import CoreFeatures from "../hosting/CoreFeatures";
import PriceArea from "../hosting/PriceArea";
import FooterOne from "../layout/footers/FooterOne";
import HeaderOne from "../layout/headers/header";
import ChoseAreaHomeOne from "./../homes/home/ChoseAreaHomeOne";

const Server = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="Servers" title="Servers" />
        <ChoseAreaHomeOne />
        <PriceArea style={true} />
        <CoreFeatures />
        <TestimonailHomeOne style={true} />
      </main>
      <FooterOne />
    </>
  );
};

export default Server;
