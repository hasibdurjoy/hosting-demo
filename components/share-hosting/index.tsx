import Breadcrumb from "../common/breadcrumbs/breadcrumb";
import ChoseAreaHomeOne from "../homes/home/ChoseAreaHomeOne";
import TestimonailHomeOne from "../homes/home/TestimonailHomeOne";
import CoreFeatures from "../hosting/CoreFeatures";
import PriceArea from "../hosting/PriceArea";
import FooterOne from "../layout/footers/FooterOne";
import HeaderOne from "../layout/headers/header";

const ShareHosting = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="Shared Hosting" title="Shared Hosting" />
        <ChoseAreaHomeOne />
        <PriceArea />
        <CoreFeatures />
        <TestimonailHomeOne style={true} />
      </main>
      <FooterOne />
    </>
  );
};

export default ShareHosting;
