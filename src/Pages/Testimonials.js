import React from "react";
import avatar1 from "../assets/avatar1.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";
import avatar4 from "../assets/avatar4.jpg";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      avatar: avatar1,
      name: "Tima Show",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam eveniet maiores neque natus unde non soluta eius nulla, quasi voluptatibus! Dolorum consequatur excepturi eaque praesentium voluptatem libero, nulla saepe? Impedit?",
    },
    {
      id: 2,
      avatar: avatar2,
      name: "Portfolio Website",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam eveniet maiores neque natus unde non soluta eius nulla, quasi voluptatibus! Dolorum consequatur excepturi eaque praesentium voluptatem libero, nulla saepe? Impedit?",
    },
    {
      id: 3,
      avatar: avatar3,
      name: "Build & Deploy",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam eveniet maiores neque natus unde non soluta eius nulla, quasi voluptatibus! Dolorum consequatur excepturi eaque praesentium voluptatem libero, nulla saepe? Impedit?",
    },
    {
      id: 4,
      avatar: avatar4,
      name: "JS Portfolio",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam eveniet maiores neque natus unde non soluta eius nulla, quasi voluptatibus! Dolorum consequatur excepturi eaque praesentium voluptatem libero, nulla saepe? Impedit?",
    },
  ];
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={50}
        pagination={{ clickable: true }}
      >
        {data.map((i) => (
          <SwiperSlide key={i.id} className="testimonial">
            <div className="client__avatar">
              <img src={i.avatar} alt="" />
            </div>
            <h5 className="client__name">{i.name}</h5>
            <small className="client__review">{i.review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
