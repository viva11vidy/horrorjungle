"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import ReviewCard from "./ReviewCard";

const reviews = [
  {
    title: "Together",
    poster: "/assets/images/sample-image.jpg",
    genres: "Action | Drama | Horror",
    badge: "Cult Classic",
  },
  {
    title: "Skillhouse",
    poster: "/assets/images/sample-image.jpg",
    genres: "Action | Drama | Horror",
    badge: "Slasher of the Week",
  },
  {
    title: "Die’ced: Reloaded",
    poster: "/assets/images/sample-image.jpg",
    genres: "Action | Drama | Horror",
    badge: "New Release",
  },
  {
    title: "Together",
    poster: "/assets/images/sample-image.jpg",
    genres: "Action | Drama | Horror",
    badge: "Cult Classic",
  },
  {
    title: "Skillhouse",
    poster: "/assets/images/sample-image.jpg",
    genres: "Action | Drama | Horror",
    badge: "Slasher of the Week",
  },
  {
    title: "Die’ced: Reloaded",
    poster: "/assets/images/sample-image.jpg",
    genres: "Action | Drama | Horror",
    badge: "New Release",
  },
  {
    title: "Together",
    poster: "/assets/images/sample-image.jpg",
    genres: "Action | Drama | Horror",
    badge: "Cult Classic",
  },
  {
    title: "Skillhouse",
    poster: "/assets/images/sample-image.jpg",
    genres: "Action | Drama | Horror",
    badge: "Slasher of the Week",
  },
  {
    title: "Die’ced: Reloaded",
    poster: "/assets/images/sample-image.jpg",
    genres: "Action | Drama | Horror",
    badge: "New Release",
  },
  {
    title: "Together",
    poster: "/assets/images/sample-image.jpg",
    genres: "Action | Drama | Horror",
    badge: "Cult Classic",
  },
  {
    title: "Skillhouse",
    poster: "/assets/images/sample-image.jpg",
    genres: "Action | Drama | Horror",
    badge: "Slasher of the Week",
  },
  {
    title: "Die’ced: Reloaded",
    poster: "/assets/images/sample-image.jpg",
    genres: "Action | Drama | Horror",
    badge: "New Release",
  },
];

export default function TrendingReviews() {
  return (
    <section className="trending-section relative">
      <div className="section-header">
        <h2 className="section-heading">TRENDING / LATEST REVIEWS</h2>
        <div className="nav-buttons">
          <button className="swiper-prev">
            <i className="fa-light fa-circle-arrow-left"></i>
          </button>
          <button className="swiper-next">
            <i className="fa-light fa-circle-arrow-right"></i>
          </button>
        </div>
      </div>

      <Swiper modules={[Navigation]} spaceBetween={20} slidesPerView="auto"
      navigation={{
        prevEl: ".swiper-prev",
        nextEl: ".swiper-next",
      }}>
        {reviews.map((review,index) => (
          <SwiperSlide
            key={index}
            style={{ width: "260px" }}
          >
            <ReviewCard key={review.title} {...review} />
          </SwiperSlide>
        ))}
      </Swiper>
        
    </section>
  );
}