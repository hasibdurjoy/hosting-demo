import Breadcrumb from "../common/breadcrumbs/breadcrumb";
import HeaderOne from "../layout/headers/header";
import BlogDetailsArea from "./BlogDetailsArea";
import FooterOne from "../layout/footers/FooterOne";

const BlogDetails = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="Blog Details" title="Blog Details" />
        <BlogDetailsArea />
      </main>
      <FooterOne />
    </>
  );
};

export default BlogDetails;
