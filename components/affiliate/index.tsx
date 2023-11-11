import ChoseAreaHomeOne from "../homes/home/ChoseAreaHomeOne";
import PriceArea from "../hosting/PriceArea";
import FooterOne from "../layout/footers/FooterOne";
import HeaderOne from "../layout/headers/header";
import Breadcrumb from "./../common/breadcrumbs/breadcrumb";
import FAQArea from "./FAQArea";
import IntroVideoArea from "./IntroVideoArea";

const Affiliate = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="Affiliate" title="Affiliate" />
        <ChoseAreaHomeOne />
        <PriceArea />
        <IntroVideoArea />
        <FAQArea />
      </main>
      <FooterOne />
    </>
  );
};

export default Affiliate;
