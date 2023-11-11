import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/assets/img/logo/logo.png";
import SocialLinks from "../../common/social-links";


const SlideBar = ({sidebarOppen, setSidebarOppen}: any) => {
    return (
      <>
        <div className={`extra-info ${sidebarOppen && "info-open"}`}>
          <div className="close-icon">
            <button onClick={() => setSidebarOppen(false)}>
              <i className="far fa-window-close"></i>
            </button>
          </div>
          <div className="logo-side mb-30">
            <Link href="/">
              <Image src={Logo} alt="logo" style={{ width: "100%" }} />
            </Link>
          </div>
          <div className="side-info mb-30">
            <div className="contact-list mb-30">
              <h4>Office Address</h4>
              <p>45 Constance Street, London, England, E16 2DQ</p>
            </div>
            <div className="contact-list mb-30">
              <h4>Phone Number</h4>
              <p>+447308597871</p>
            </div>
            <div className="contact-list mb-30">
              <h4>Email Address</h4>
              <p>info@hostiminer.com</p>
              <p>www.hostiminer.com</p>
            </div>
          </div>
          <div className="instagram">
            <a href="#">
              <img src="assets/img/blog/ins1.jpg" alt="theme-pure" />
            </a>
            <a href="#">
              <img src="assets/img/blog/ins2.jpg" alt="theme-pure" />
            </a>
            <a href="#">
              <img src="assets/img/blog/ins3.jpg" alt="theme-pure" />
            </a>
            <a href="#">
              <img src="assets/img/blog/ins4.jpg" alt="theme-pure" />
            </a>
            <a href="#">
              <img src="assets/img/blog/ins5.jpg" alt="theme-pure" />
            </a>
            <a href="#">
              <img src="assets/img/blog/ins1.jpg" alt="theme-pure" />
            </a>
          </div>
          <div className="social-icon-right mt-20">
            <SocialLinks />
          </div>
        </div>
      </>
    );
};

export default SlideBar;