import Breadcrumb from "../common/breadcrumbs/breadcrumb";
import FooterOne from "../layout/footers/FooterOne";
import HeaderOne from "../layout/headers/header";
import OurOfficeArea from "./OurOfficeArea";
import TeamArea from "./TeamArea";

const Team = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="Team Member" title="Team" />
        <TeamArea />
        <OurOfficeArea />
      </main>
      <FooterOne />
    </>
  );
};

export default Team;
