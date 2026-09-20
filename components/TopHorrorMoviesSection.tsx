"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const topHorrorMovies = [
  {
    title: "Midsommar",
    poster: "/assets/images/sample-image.jpg",
    rating: "7.1/10",
    year: "2019",
  },
  {
    title: "Hereditary",
    poster: "/assets/images/sample-image.jpg",
    rating: "7.3/10",
    year: "2018",
  },
  {
    title: "The Witch",
    poster: "/assets/images/sample-image.jpg",
    rating: "7.0/10",
    year: "2015",
  },
  {
    title: "Talk To Me",
    poster: "/assets/images/sample-image.jpg",
    rating: "7.2/10",
    year: "2023",
  },
  {
    title: "Smile",
    poster: "/assets/images/sample-image.jpg",
    rating: "6.8/10",
    year: "2022",
  },
];

export default function TopHorrorMoviesSection() {
  return (
    <div className="single-box-section margin-t">
      <div className="section-heading-wrapper">
        <h2 className="section-heading">Top Horror Movies</h2>
        <a className="section-heading-link">View All</a>
      </div>

      <div className="section-heading-wrapper">
        <div className="nav-buttons">
          <button className="top-prev">
            <i className="fa-light fa-circle-arrow-left"></i>
          </button>
          <button className="top-next">
            <i className="fa-light fa-circle-arrow-right"></i>
          </button>
        </div>
      </div>

      <div className="top-horror-main-wrapper">
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView="auto"
          navigation={{
            prevEl: ".top-prev",
            nextEl: ".top-next",
          }}
        >
          {topHorrorMovies.map((movie, index) => (
            <SwiperSlide key={index} style={{ width: "160px" }}>
              <div className="top-horror-movie-wrapper">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="top-horror-movie-img"
                  width={150}
                  height={225}
                />
                <div className="top-horror-movie-info">
                  <p>{movie.title}</p>
                  <div>
                    <span>⭐</span>
                    <span>{movie.rating}</span>
                    <span>- {movie.year}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
