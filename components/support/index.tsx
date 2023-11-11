import FAQArea from "../affiliate/FAQArea";
import Breadcrumb from "../common/breadcrumbs/breadcrumb";
import FaqContactForm from "../faq/FaqContactForm";
import HeaderOne from "../layout/headers/header";
import FooterOne from "./../layout/footers/FooterOne";

const Support = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="Support" title="Support" />
        <FAQArea style={true} />
        <FaqContactForm />
      </main>
      <FooterOne />
    </>
  );
};

export default Support;
