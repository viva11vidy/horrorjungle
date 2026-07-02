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

export default function BlogTrendingSection() {
  return (
    <div className="pillar-section">
      <h2 className="pillar-heading mb-4">🔥 Trending Horror Articles</h2>
      
      <div className="row">
        <div className="col-md-4">
          <div className="featured-review">
            <img src="/assets/images/n-image/original.jpg" alt="banner-image-sample" className="featured-review-img"/>
            <div className="review-content">
              <h3 className="single-pillar-heading mb-3">Hereditary (2018) - Most Disturbing Psychological Horror Ever Made?</h3>
              <div className="banner-option-wrapper mt-3">
                <div className="tag-wrapper">
                  <span>⭐ 8.5/10</span>
                  <span>Psychological Horror</span>
                </div>
              </div>
              <p className="body-1 mb-0">⏱ 6 min read</p>
            </div>
          </div>
        </div> 
        <div className="col-md-4">
          <div className="featured-review">
            <img src="/assets/images/n-image/original.jpg" alt="banner-image-sample" className="featured-review-img"/>
            <div className="review-content">
              <h3 className="single-pillar-heading mb-3">Hereditary (2018) - Most Disturbing Psychological Horror Ever Made?</h3>
              <div className="banner-option-wrapper mt-3">
                <div className="tag-wrapper">
                  <span>⭐ 8.5/10</span>
                  <span>Psychological Horror</span>
                </div>
              </div>
              <p className="body-1 mb-0">⏱ 6 min read</p>
            </div>
          </div>
        </div> 
        <div className="col-md-4">
          <div className="featured-review">
            <img src="/assets/images/n-image/original.jpg" alt="banner-image-sample" className="featured-review-img"/>
            <div className="review-content">
              <h3 className="single-pillar-heading mb-3">Hereditary (2018) - Most Disturbing Psychological Horror Ever Made?</h3>
              <div className="banner-option-wrapper mt-3">
                <div className="tag-wrapper">
                  <span>⭐ 8.5/10</span>
                  <span>Psychological Horror</span>
                </div>
              </div>
              <p className="body-1 mb-0">⏱ 6 min read</p>
            </div>
          </div>
        </div> 
      </div>

     
    </div>
  );
}