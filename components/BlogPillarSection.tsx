"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const horrorGuides = [
  {
    image: "/assets/images/n-image/ultimate-guide.jpg",
    title: "Horror Subgenres Explained – Complete Guide (2026)",
    subtitle: "Explore psychological horror, supernatural horror, slashers, found footage, and more to discover what truly scares you.",
    btnText: "Read Full Guide"
  },
  {
    image: "/assets/images/n-image/horror_movies_for_beginners.jpg",
    title: "Horror Movies for Beginners",
    subtitle: "New to horror? Start with easy-to-watch films before exploring darker ones.",
    btnText: "Explore List"
  },
  {
    image: "/assets/images/n-image/horror_movies_for_beginners.jpg",
    title: "Best Psychological Horror Movies",
    subtitle: "Slow, disturbing films that stay in your mind long after watching.",
    btnText: "Read Full Guide"
  },
   {
    image: "/assets/images/n-image/horror_movies_for_beginners.jpg",
    title: "Best Supernatural Horror Movies",
    subtitle: "Ghosts, demons, and possession stories beyond reality.",
    btnText: "Explore List"
  },
  {
    image: "/assets/images/n-image/horror_movies_for_beginners.jpg",
    title: "Horror Movie Endings Explained",
    subtitle: "Simple explanations of confusing and shocking endings."
  },
  {
    image: "/assets/images/n-image/horror_movies_for_beginners.jpg",
    title: "Underrated Horror Movies",
    subtitle: "Hidden gems most people haven’t discovered."
  },
  {
    image: "/assets/images/n-image/horror_movies_for_beginners.jpg",
    title: "Scariest Horror Movies of All Time",
    subtitle: "The most terrifying films — ranked and explained."
  },
  {
    image: "/assets/images/n-image/horror_movies_for_beginners.jpg",
    title: "Horror Movies Based on True Stories",
    subtitle: "Real-life inspired horror that feels even scarier."
  }
];

export default function BlogPillarSection() {
  return (
    <div className="pillar-section">
      <h2 className="pillar-heading">🫣 Essential Horror Guides</h2>
      <p className="pillar-subheading my-3">New to horror or exploring deeper? These guides will help you understand different types of horror movies, discover hidden gems, and find what truly scares you.</p>

      
      <Swiper modules={[Navigation, Mousewheel]} spaceBetween={20} slidesPerView="auto"
      navigation={{
        prevEl: ".swiper-prev",
        nextEl: ".swiper-next",
      }}
      mousewheel={{
        forceToAxis: true,
        releaseOnEdges: true,
        sensitivity: 1,
      }}>
        {horrorGuides.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: index === 0 ? "680px" : "370px",
            }}
          >
            <div className="pillar-card">
              <p className="card-number">{index+1}</p>
              <img src={item.image} className="pillar-card-img"/>
              <div className={`sp-content ${index === 0 ? "  " : ""}`}>
                
                <div className="sbs-first">
                  <p className="single-pillar-heading">{item.title}</p>
                  <p className={`single-pillar-subheading  ${index === 0 ? "mb-3" : "mb-3"}`}>{item.subtitle}</p>
                </div>
                {/* {index === 0 &&  */}
                <a className={`btn-1 ${index === 0 ? "" : "transparent-btn"}`}>
                  <span>{item.btnText}</span>
                  <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M4 16a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1z" fill="currentColor"></path><path d="M17.293 6.293a1 1 0 0 1 1.414 0l9 9a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-1.414-1.414L25.586 16l-8.293-8.293a1 1 0 0 1 0-1.414z" fill="currentColor"></path></svg>
                </a>
                {/* } */}
                
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="pillar-nav-buttons">
        <button className="swiper-prev">
          <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M4 16a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1z" fill="currentColor"></path><path d="M17.293 6.293a1 1 0 0 1 1.414 0l9 9a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-1.414-1.414L25.586 16l-8.293-8.293a1 1 0 0 1 0-1.414z" fill="currentColor"></path></svg>
          {/* <span>Prev</span> */}
        </button>
        <button className="swiper-next">
          {/* <span>Next</span> */}
          <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M4 16a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1z" fill="currentColor"></path><path d="M17.293 6.293a1 1 0 0 1 1.414 0l9 9a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-1.414-1.414L25.586 16l-8.293-8.293a1 1 0 0 1 0-1.414z" fill="currentColor"></path></svg>
        </button>
      </div>

     
    </div>
  );
}