import Breadcrumb from "../common/breadcrumbs/breadcrumb";
import FooterOne from "../layout/footers/FooterOne";
import HeaderOne from "../layout/headers/header";
import RecoverArea from "./RecoverArea";

const Recover = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="Recover" title="Recover" />
        <RecoverArea />
      </main>
      <FooterOne />
    </>
  );
};

export default Recover;
