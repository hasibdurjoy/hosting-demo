import Link from "next/link";
import Image from "next/image"; 
import services_data_type from "../../types/service-types";
// service images 
import service_img_1 from "../../../public/assets/img/icon/s01.png";
import service_img_2 from "../../../public/assets/img/icon/s02.png";
import service_img_3 from "../../../public/assets/img/icon/s03.png";
import service_img_4 from "../../../public/assets/img/icon/s04.png";
import service_img_5 from "../../../public/assets/img/icon/s05.png";
import service_img_6 from "../../../public/assets/img/icon/s06.png"; 
// service data 
const services_data = [
  {
    id: 1,
    img: service_img_1,
    title: "Shared Hosting",
    sm_des:
      "Our Shared Hosting service provides a reliable and cost-effective solution for individuals and small businesses. Enjoy the benefits of shared resources with optimal performance and security. ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 2,
    img: service_img_2,
    title: "VPS Hosting",
    sm_des:
      "Experience enhanced control and flexibility with our VPS Hosting. Ideal for growing websites and applications, VPS Hosting offers dedicated resources and the ability to customize your server environment. ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 3,
    img: service_img_3,
    title: "Reseller Hosting",
    sm_des:
      "Start your own hosting business with our Reseller Hosting packages. Enjoy the benefits of managing multiple hosting accounts under your brand. Perfect for web developers and entrepreneurs. ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 4,
    img: service_img_4,
    title: "Cloud Hosting",
    sm_des:
      "Harness the power of the cloud with our Cloud Hosting services. Experience scalability, high performance, and reliability for your websites and applications. ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 5,
    img: service_img_5,
    title: "Dedicated Hosting",
    sm_des:
      "For resource-intensive applications, Dedicated Hosting provides the ultimate performance and security. Enjoy a dedicated server exclusively for your website or application. ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 6,
    img: service_img_6,
    title: "Domain Name",
    sm_des:
      "Secure your online identity with our Domain Name registration services. Choose from a variety of domain extensions and find the perfect name for your website. ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
  },
];

// You can use the services_data array as needed in your application

interface service_content_type {
  title: string;
  sub_title: string;
}
const service_content: service_content_type = {
  title: "Our Services",
  sub_title: "Grab the best services from us",
};
const { title, sub_title } = service_content;

const ServicesHomeOne = () => {
  return (
    <>
      <section className="services-area pt-115 pb-20">
        <div className="container">
          <div className="row align-items-center mb-40">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title mb-30">
                <h2>{title}</h2>
                <p>{sub_title}</p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-4">
              <div className="section-link text-left text-lg-right mb-30">
                <a href="#" className="btn btn-soft-border">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            {services_data.map((item, i) => (
              <div key={i} className="col-xl-4 col-lg-4 col-md-6">
                <div
                  className="services-box text-center mb-30 wow fadeInUp animated"
                  data-wow-delay="0.3s"
                >
                  <div className="services-icon mb-35">
                    <Image src={item.img} alt="theme-pure" />
                  </div>
                  <div className="services-content">
                    <h3>
                      <Link href="/service-details">{item.title}</Link>
                    </h3>
                    <p>{item.sm_des}</p>
                    <Link href="/share-hosting" className="services-link">
                      {/* <a className="services-link"> */}
                      <i className="far fa-chevron-right"></i>
                      {/* </a> */}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesHomeOne;