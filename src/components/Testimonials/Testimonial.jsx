import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
      "Anup consistently delivers exceptional work that exceeds our expectations. His attention to detail, creativity, and dedication have significantly contributed to our product's success. He has a deep understanding of user experience principles and ensures our projects are both visually appealing and user-friendly."
    },
    {
      img: profilePic2,
      review:
      "Anup has been an invaluable asset to our team. His ability to grasp complex requirements and translate them into intuitive designs is unparalleled. He's a true professional who always puts the client's needs first, resulting in a final product that is both visually stunning and highly functional.",
    },
    {
      img: profilePic3,
      review:
      "Anup's work ethic, technical skills, and creativity have made him an indispensable member of our team. He consistently delivers exceptional work, and his ability to work under tight deadlines without compromising quality is truly impressive. We highly recommend him for any UI/UX design project.",
    },
    {
      img: profilePic4,
      review:
      "Working with Anup has been a pleasure. His exceptional work has not only met our expectations but surpassed them. His keen eye for design, commitment to accessibility, and ability to collaborate effectively with developers have significantly improved our product's user experience and engagement.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
