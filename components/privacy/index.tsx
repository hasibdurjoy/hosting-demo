import Breadcrumb from "../common/breadcrumbs/breadcrumb";
import FooterOne from "../layout/footers/FooterOne";
import HeaderOne from "../layout/headers/header";
import PrivacyArea from "./PrivacyArea";

const Privacy = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="Privacy & Policy" title="Privacy & Policy" />
        <PrivacyArea />
      </main>
      <FooterOne />
    </>
  );
};

export default Privacy;
