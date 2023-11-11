"use client"
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
// chose images
import chose_icon_1 from "../../../public/assets/img/chose/c01.png" ;
import chose_icon_2 from "../../../public/assets/img/chose/c02.png" ;
import chose_icon_3 from "../../../public/assets/img/chose/c03.png" ;
// chose data type
interface chose_data_type {
    id: number;
    active: string;
    sirial_no: string;
    icon: StaticImageData;
    title: string;
    info: string;
}
// chose data
const chose_data:chose_data_type[] = [
    {
        id: 1,
        active: "",
        sirial_no: "01",
        icon: chose_icon_1,
        title: "Data Migration",
        info: "PioHosting flexible Managed Backup Solutions will help simplify the protection of your data.",
    },
    {
        id: 2,
        active: "active",
        sirial_no: "02",
        icon: chose_icon_2,
        title: "DDoS Protection",
        info: "PioHosting flexible Managed Backup Solutions will help simplify the protection of your data.",
    },
    {
        id: 3,
        active: "",
        sirial_no: "03",
        icon: chose_icon_3,
        title: "Data Security",
        info: "PioHosting flexible Managed Backup Solutions will help simplify the protection of your data.",
    },
]
const ChoseAreaHomeOne = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const handleMouseEnter = (index: number) => {
      setActiveIndex(index);
    };

    return (
      <>
        <section className="chose-area pt-115 pb-90">
          <div className="container">
            <div className="row ">
              <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                <div className="section-title text-center mb-70">
                  <h2>Why Choose Us?</h2>
                  <p>
                    At Hosti Miner, we prioritize your online success with a
                    commitment to unparalleled performance, ensuring
                    lightning-fast load times and continuous website
                    availability for your visitors. Security is at the forefront
                    of our mission, implementing robust measures to safeguard
                    your data against potential threats, providing you with
                    peace of mind. Whether you're a startup or an enterprise,
                    our hosting solutions are designed for scalability, allowing
                    you to upgrade seamlessly as your website grows. Our
                    dedicated 24/7 support team is always ready to assist,
                    handling technical queries and providing general assistance
                    to ensure your hosting experience is smooth and
                    trouble-free. Embracing innovation, we stay ahead of the
                    curve by continuously exploring new technologies, ensuring
                    we offer the best possible hosting solutions to meet your
                    evolving needs. Hosti Miner is not just a hosting provider;
                    we are your trusted partner in achieving online excellence.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="row chose-row wow fadeInUp animated"
              data-wow-delay="0.3s"
            >
              {chose_data.map((item, i) => (
                <div key={i} className="col-xl-4 col-lg-4">
                  <div
                    className={`chose-box text-center ${
                      activeIndex === i ? "active" : ""
                    } mb-30`}
                    onMouseEnter={() => handleMouseEnter(i)}
                  >
                    <Image src={item.icon} alt="theme-pure" />
                    <div className="chose-content">
                      <span>{item.sirial_no}</span>
                      <h3>{item.title}</h3>
                      <p>{item.info}</p>
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

export default ChoseAreaHomeOne;