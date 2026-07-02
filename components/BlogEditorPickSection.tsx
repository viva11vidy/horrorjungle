"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const horrorGuides = [
  {
    image: "/assets/images/n-image/the-light-house.jpg",
    title: "The Lighthouse Ending Explained – Madness or Reality?",
    subtitle: "Explore psychological horror, supernatural horror, slashers, found footage, and more to discover what truly scares you.",
    btnText: "Read Full Guide"
  },
  {
    image: "/assets/images/n-image/midsommar.jpg",
    title: "Midsommar Explained – The Dark Meaning Behind the Ritual",
    subtitle: "New to horror? Start with easy-to-watch films before exploring darker ones.",
    btnText: "Explore List"
  },
  {
    image: "/assets/images/n-image/sinister.avif",
    title: "Sinister – Why It’s One of the Scariest Movies Ever",
    subtitle: "Slow, disturbing films that stay in your mind long after watching.",
    btnText: "Read Full Guide"
  },
];

export default function BlogEditorPickSection() {
  return (
    <div className="pillar-section">
      <h2 className="pillar-heading">✍️ Editor's Picks</h2>
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
              width: "450px",
            }}
          >
            <div className="pillar-card">
              <img src={item.image} className="pillar-card-img"/>
              <div className="sp-content">
                
                <div className="sbs-first">
                  <p className="single-pillar-heading mb-0">{item.title}</p>
                </div>
                
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