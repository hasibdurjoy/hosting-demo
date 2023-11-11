interface about_content_type {
    sub_title: string;
    title: string;
    title_2: string;
    sm_des: JSX.Element;
}

const about_content: about_content_type = {
  sub_title: "About Us",
  title: "Meet With Our Alive Cool Services.",
  title_2: "Meet With Our Alive Cool Services.",
  sm_des: (
    <>
      At Hosti Miner, we are dedicated to powering your online presence through
      cutting-edge hosting solutions. With a commitment to excellence and a
      passion for innovation, we strive to be your trusted partner in the
      digital landscape.Hosti Miner was founded with a clear mission — to
      provide reliable, scalable, and secure hosting services that empower
      businesses and individuals to thrive online. We believe in harnessing the
      latest technology to offer hosting solutions that meet the evolving needs
      of our diverse clientele.
    </>
  ),
};
const {sub_title, title, title_2, sm_des} = about_content
const AboutUsArea = () => {
    return (
        <>
            <div className="about-us-area pt-120 pb-90" style={{backgroundImage: `url(/assets/img/bg/about-bg.jpg)`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-8">
                            <div className="about-wrapper mb-30 wow fadeIn" data-wow-delay="0.3s">
                            <div className="section-header">
                                <span>{sub_title}</span>
                                <h2>{title}</h2>
                                <h4>{title_2}</h4>
                                <p>{sm_des}</p>
                                <div className="btn btn-2 mt-10">Get Started Now</div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUsArea;