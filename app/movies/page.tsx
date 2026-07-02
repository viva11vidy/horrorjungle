"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import BlogPillarSection from "@/components/BlogPillarSection";
import BlogTrendingSection from "@/components/BlogTrendingSection";
import BlogEditorPickSection from "@/components/BlogEditorPickSection";

export default function Movies() {
    const array = [1,2,3,4,5,6,7,8];
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index: number) => {
      setActiveIndex(activeIndex === index ? -1 : index);
    };
    const faqs = [
      {
        question: "Is Hereditary scary?",

        answer:
          "Yes. Hereditary is considered one of the scariest psychological horror films due to its unsettling atmosphere, disturbing imagery, and emotional intensity.",
      },

      {
        question: "Is Hereditary worth watching?",

        answer:
          "Absolutely. If you enjoy slow-burn psychological horror with exceptional performances and storytelling, it's highly recommended.",
      },

      {
        question: "Is Hereditary based on a true story?",

        answer:
          "No. The film is entirely fictional, although it explores realistic themes of grief, trauma, and family relationships.",
      },

      {
        question: "Does Hereditary have jump scares?",

        answer:
          "Yes, but very few. It relies more on tension, atmosphere, and psychological horror than frequent jump scares.",
      },

      {
        question: "Is Hereditary disturbing?",

        answer:
          "Yes. It contains disturbing imagery, emotional trauma, violence, and unsettling supernatural elements.",
      },

      {
        question: "Where can I watch Hereditary?",

        answer:
          "Availability depends on your country. Check streaming services like Netflix, Prime Video, Max, or Apple TV.",
      },

      {
        question: "Is there a post-credit scene?",

        answer: "No. There is no post-credit scene in Hereditary.",
      },
    ];
		const topHorrorMovies = [
			{
				title: "Midsommar",
				poster: "https://placehold.co/1000x1500.jpg",
				rating: "7.1/10",
				year: "2019",
			},
			{
				title: "Hereditary",
				poster: "https://placehold.co/1000x1500.jpg",
				rating: "7.3/10",
				year: "2018",
			},
			{
				title: "The Witch",
				poster: "https://placehold.co/1000x1500.jpg",
				rating: "7.0/10",
				year: "2015",
			},
			{
				title: "Talk To Me",
				poster: "https://placehold.co/1000x1500.jpg",
				rating: "7.2/10",
				year: "2023",
			},
			{
				title: "Smile",
				poster: "https://placehold.co/1000x1500.jpg",
				rating: "6.8/10",
				year: "2022",
			},
		];
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="breadcrumb-area">
          <ul className="breadcrumb">
            <li className="sb">
              <Link href="/">Home</Link>
            </li>
            <li className="sb">
              <span>/</span>
            </li>
            <li className="sb">
              <Link href="/movies">Movies</Link>
            </li>
            <li className="sb">
              <span>/</span>
            </li>
            <li className="sb">
              <span>Hereditary</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="col-md-12">
        <div className="row">
          <div className="col-md-3">
            <div className="movie-poster-wrapper">
              <Image
                src="https://placehold.co/1000x1500.jpg"
                alt="Movie Title"
                className="movie-poster"
                width={1000}
                height={1500}
              />
            </div>
          </div>
          <div className="col-md-5">
            <div className="movie-info-wrapper">
              <h1 className="movie-title">Hereditary (2018)</h1>
              <div className="movie-tag-wrapper">
                <span className="type-tag">Movie</span>
                <span className="normal-tag">Psychological Horror</span>
                <span className="normal-tag">Supernatural Horror</span>
              </div>
              <div className="movie-info-bottom-wrapper">
                <div className="single-minfo">
                  <i className="fi fi-rr-calendar"></i>
                  <span>June 8, 2018</span>
                </div>
                <div className="single-minfo">
                  <i className="fi fi-rr-clock-three"></i>
                  <span>127 Min</span>
                </div>
                <div className="single-minfo">
                  <i className="fi fi-rr-features-alt"></i>
                  <span>R</span>
                </div>
                <div className="single-minfo">
                  <i className="fi fi-rr-world"></i>
                  <span>United States</span>
                </div>
                <div className="single-minfo">
                  <i className="fi fi-rr-language"></i>
                  <span>English</span>
                </div>
              </div>
              <p className="body-text intro-text">
                A terrifying deep dive into grief, control, and the hidden demon
                manipulating everything from the shadows. A terrifying deep dive into grief, control, and the hidden demon
                manipulating everything from the shadows. A terrifying deep dive into grief, control, and the hidden demon
                manipulating everything from the shadows. A terrifying deep dive into grief, control, and the hidden demon
                manipulating everything from the shadows.
              </p>
              <div className="rating-main-wrapper">
                <div className="single-rating-wrapper hj-rating">
                  <span className="hj-rating-icon">
                    {/* <i className="fi fi-rr-skull"></i> */}
                    <i className="fi fi-ss-star"></i>
                  </span>
                  <div className="">
                    <p className="rating-value">
                      8.5<span>/10</span>
                    </p>
                    <p className="rating-text">Horror Jungle Rating</p>
                  </div>
                </div>
                <div className="single-rating-wrapper imdb-rating">
                  <span className="hj-rating-icon">
                    <i className="fi fi-brands-imdb"></i>
                  </span>
                  <div className="">
                    <p className="rating-value">
                      7.3<span>/10</span>
                    </p>
                    <p className="rating-text">IMDb Rating</p>
                  </div>
                </div>
                <div className="single-rating-wrapper worth-rating">
                  <span>
                    <i className="fi fi-tr-feedback-review"></i>
                  </span>
                  <div className="">
                    <p className="rating-value">95%</p>
                    <p className="rating-text">Worth Watching</p>
                  </div>
                </div>
              </div>

              <a className="btn-1 mr-3">
                <i className="fi fi-ss-play"></i>
                <span>Watch Trailer</span>
              </a>

              <a className="btn-2">
                <i className="fi fi-ss-tv-retro"></i>
                <span>Where to Watch</span>
              </a>
            </div>
          </div>
          <div className="col-md-4">

            <div className="single-box-section">
              <h2 className="section-heading">Quick Snapshot</h2>
              <div className="quick-snapshot-wrapper">
                <div className="single-snapshot">
                  <span className="snapshot-label">Scare Level</span>
                  <div className="snapshot-bar">
                    <div className="snapshot-fill" style={{ width: "80%" }}></div>
                  </div>
                  <span className="snapshot-value">8/10</span>
                </div>
                <div className="single-snapshot">
                  <span className="snapshot-label">Psychological Impact</span>
                  <div className="snapshot-bar">
                    <div
                      className="snapshot-fill"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                  <span className="snapshot-value">10/10</span>
                </div>

                <div className="single-snapshot">
                  <span className="snapshot-label">Jump Scares</span>
                  <div className="snapshot-bar">
                    <div className="snapshot-fill" style={{ width: "50%" }}></div>
                  </div>
                  <span className="snapshot-value">5/10</span>
                </div>

                <div className="single-snapshot">
                  <span className="snapshot-label">Gore Level</span>
                  <div className="snapshot-bar">
                    <div className="snapshot-fill" style={{ width: "60%" }}></div>
                  </div>
                  <span className="snapshot-value">6/10</span>
                </div>

                <div className="single-snapshot">
                  <span className="snapshot-label">Violence Level</span>
                  <div className="snapshot-bar">
                    <div className="snapshot-fill" style={{ width: "70%" }}></div>
                  </div>
                  <span className="snapshot-value">7/10</span>
                </div>

                <div className="single-snapshot">
                  <span className="snapshot-label">Disturbing Level</span>
                  <div className="snapshot-bar">
                    <div
                      className="snapshot-fill"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                  <span className="snapshot-value">10/10</span>
                </div>

                <div className="single-snapshot">
                  <span className="snapshot-label">Atmosphere</span>
                  <div className="snapshot-bar">
                    <div
                      className="snapshot-fill"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                  <span className="snapshot-value">10/10</span>
                </div>

                <div className="single-snapshot">
                  <span className="snapshot-label">Tension</span>
                  <div className="snapshot-bar">
                    <div
                      className="snapshot-fill"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                  <span className="snapshot-value">10/10</span>
                </div>

                <div className="single-snapshot">
                  <span className="snapshot-label">Ending Satisfaction</span>
                  <div className="snapshot-bar">
                    <div
                      className="snapshot-fill"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                  <span className="snapshot-value">10/10</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="col-md-3 margin-t">
        <div className="single-box-section">
          <h2 className="section-heading">Should you watch it?</h2>
          <div className="should-watch-main-wrapper">
            <div className="should-watch-wrapper">
              <div className="should-watch-content yes">
                <i className="fi fi-br-check"></i>
                <span>Worth Watching?</span>
              </div>
              <span className="yes">Yes</span>
            </div>
            <div className="should-watch-wrapper">
              <div className="should-watch-content yes">
                <i className="fi fi-br-check"></i>
                <span>Watch Alone?</span>
              </div>
              <span className="yes">Yes</span>
            </div>

            <div className="should-watch-wrapper">
              <div className="should-watch-content no">
                <i className="fi fi-br-cross"></i>
                <span>Watch With Parents?</span>
              </div>
              <span className="no">No</span>
            </div>

            <div className="should-watch-wrapper">
              <div className="should-watch-content yes">
                <i className="fi fi-br-check"></i>
                <span>Beginner Friendly?</span>
              </div>
              <span className="yes">Yes</span>
            </div>

            <div className="should-watch-wrapper">
              <div className="should-watch-content no">
                <i className="fi fi-br-cross"></i>
                <span>Family Friendly?</span>
              </div>
              <span className="no">No</span>
            </div>

            <div className="should-watch-wrapper">
              <div className="should-watch-content yes">
                <i className="fi fi-br-check"></i>
                <span>Slow Burn?</span>
              </div>
              <span className="yes">Yes</span>
            </div>

            <div className="should-watch-wrapper">
              <div className="should-watch-content yes">
                <i className="fi fi-br-check"></i>
                <span>Headphones Recommended?</span>
              </div>
              <span className="yes">Yes</span>
            </div>

            <div className="should-watch-wrapper">
              <div className="should-watch-content">
                <i className="fi fi-bs-age-alt" style={{height:"16px"}}></i>
                <span>Age Recommendation</span>
              </div>
              <span className="age">18+</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4 margin-t">
        <div className="single-box-section">
          <h2 className="section-heading">Where to watch</h2>
          <div className="where-to-watch-main-wrapper">
            <div className="where-to-watch-wrapper">
              <div className="where-to-watch-content">
                <div className="where-to-watch-img">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/1/18/Netflix_2016_N_logo.svg"
                    alt="Netflix"
                  />
                </div>
                <span>Netflix</span>
              </div>
              <span className="available">Available</span>
            </div>
            <div className="where-to-watch-wrapper">
              <div className="where-to-watch-content">
                <div className="where-to-watch-img">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/90/Prime_Video_logo_%282024%29.svg"
                    alt="Amazon Prime Video"
                  />
                </div>
                <span>Amazon Prime Video</span>
              </div>
              <span className="available">Available</span>
            </div>
            <div className="where-to-watch-wrapper">
              <div className="where-to-watch-content">
                <div className="where-to-watch-img">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Apple_TV_logo.svg"
                    alt="Apple Tv"
                  />
                </div>
                <span>Apple Tv</span>
              </div>
              <span className="rent">Rent/Buy</span>
            </div>
          </div>
          <div className="updated-wrapper">
            <p>Last Updated: May 24, 2025</p>
          </div>
        </div>
      </div>

      <div className="col-md-5 margin-t">
        <div className="single-box-section">
          <h2 className="section-heading">Official Trailer</h2>
          <div className="trailer-section">
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube-nocookie.com/embed/YHxcDbai7aU?controls=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row">

        <div className="col-md-8">
          <div className="row">
            <div className="col-md-12 margin-t">
              <div className="single-box-section">
                <h2 className="section-heading">Introduction</h2>
                <p className="body-text m-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci eum sequi quae blanditiis error aliquam autem iste
                  eius molestiae magni voluptate, quo animi, alias accusamus
                  dolores consectetur odit eos amet? Repellat earum et nostrum
                  iusto tenetur culpa possimus ratione molestias fugiat tempora
                  numquam rerum amet nulla, magnam nisi rem reiciendis officiis
                  hic doloribus exercitationem! Quos ad aliquid tempora
                  consectetur cumque.
                </p>
              </div>
            </div>
            <div className="col-md-12 margin-t">
              <div className="single-box-section">
                <h2 className="section-heading">Spoiler Free Review</h2>
                <p className="body-text m-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci eum sequi quae blanditiis error aliquam autem iste
                  eius molestiae magni voluptate, quo animi, alias accusamus
                  dolores consectetur odit eos amet? Repellat earum et nostrum
                  iusto tenetur culpa possimus ratione molestias fugiat tempora
                  numquam rerum amet nulla, magnam nisi rem reiciendis officiis
                  hic doloribus exercitationem! Quos ad aliquid tempora
                  consectetur cumque.
                </p>

                <div className="work-wrapper">
                  <div className="single-work positive">
                    <h3 className="works-positive">What Works</h3>
                    <div className="work-text-wrapper">
                      <div className="work-single">
                        <span>
                          <i className="fi fi-br-check"></i>
                        </span>
                        <span>Incredible performances</span>
                      </div>

                      <div className="work-single">
                        <span>
                          <i className="fi fi-br-check"></i>
                        </span>
                        <span>Terrifying atmosphere</span>
                      </div>

                      <div className="work-single">
                        <span>
                          <i className="fi fi-br-check"></i>
                        </span>
                        <span>Strong story and themes</span>
                      </div>

                      <div className="work-single">
                        <span>
                          <i className="fi fi-br-check"></i>
                        </span>
                        <span>Unpredictable and shocking</span>
                      </div>

                      <div className="work-single">
                        <span>
                          <i className="fi fi-br-check"></i>
                        </span>
                        <span>Excellent direction</span>
                      </div>
                    </div>
                  </div>

                  <div className="single-work negative">
                    <h3 className="works-negative">What Doesn't Work</h3>
                    <div className="work-text-wrapper">
                      <div className="work-single">
                        <span>
                          <i className="fi fi-br-cross"></i>
                        </span>
                        <span>Very slow pace (may not suit all)</span>
                      </div>

                      <div className="work-single">
                        <span>
                          <i className="fi fi-br-cross"></i>
                        </span>
                        <span>Emotionally heavy</span>
                      </div>

                      <div className="work-single">
                        <span>
                          <i className="fi fi-br-cross"></i>
                        </span>
                        <span>Disturbing content</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="final-wrapper">
                  <p className="final-heading">FINAL VERDICT:</p>
                  <div className="final-content">
                    <i className="fi fi-rr-mail-malware"></i>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Illo veniam ducimus laborum eius.
                    </p>
                  </div>
                </div>
              </div>
            </div>


            <div className="spoilers-ahead">
              <img src="/assets/images/icon/carefull.svg" alt="spoiler-warning" className="spoiler-icon"/>
              <p>Be Careful, Spoilers Ahead</p>
            </div>

            <div className="col-md-12 margin-t">
              <div className="single-box-section">
                <h2 className="section-heading">Plot Summary (Spoilers)</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci eum sequi quae blanditiis error aliquam autem iste
                  eius molestiae magni voluptate, quo animi, alias accusamus
                  dolores consectetur odit eos amet? Repellat earum et nostrum
                  iusto tenetur culpa possimus ratione molestias fugiat tempora
                  numquam rerum amet nulla, magnam nisi rem reiciendis officiis
                  hic doloribus exercitationem! Quos ad aliquid tempora
                  consectetur cumque.
                </p>
              </div>
            </div>
            <div className="col-md-12 margin-t">
              <div className="single-box-section">
                <h2 className="section-heading">Ending Explained</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci eum sequi quae blanditiis error aliquam autem iste
                  eius molestiae magni voluptate, quo animi, alias accusamus
                  dolores consectetur odit eos amet? Repellat earum et nostrum
                  iusto tenetur culpa possimus ratione molestias fugiat tempora
                  numquam rerum amet nulla, magnam nisi rem reiciendis officiis
                  hic doloribus exercitationem! Quos ad aliquid tempora
                  consectetur cumque.
                </p>
              </div>
            </div>


            <div className="col-md-12 margin-t">
              <div className="single-box-section">
                <h2 className="section-heading">Hidden Meaning & Symbolism</h2>
                <ul className="pointers">
                  <li>
                    <p className="pointer-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </li>
                  <li>
                    <p className="pointer-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </li>
                  <li>
                    <p className="pointer-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </li>
                </ul>
              </div>
            </div>


            <div className="col-md-12 margin-t">
              <div className="single-box-section">
                <h2 className="section-heading">Scaries Moments</h2>
                <div className="number-wrapper">
                  <div className="single-number">
                    <span className="number">1</span>
                    <p className="number-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                  <div className="single-number">
                    <span className="number">2</span>
                    <p className="number-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                  <div className="single-number">
                    <span className="number">3</span>
                    <p className="number-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                  <div className="single-number">
                    <span className="number">4</span>
                    <p className="number-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 margin-t">
              <div className="single-box-section">
                <h2 className="section-heading">
                  Parents Guide / Trigger Warnings
                </h2>
                <div className="warning-wrapper">
                  <div className="single-warning">
                    <span className="warning-image">
                      <img
                        src="/assets/images/icon/graphic-gore.svg"
                        alt="banner-image-sample"
                        className="warning-img"
                      />
                    </span>
                    <p className="warning-text-one">Graphic Gore</p>
                    <p className="warning-text-two">Moderate</p>
                  </div>
                  <div className="single-warning">
                    <span className="warning-image">
                      <img
                        src="/assets/images/icon/child-death.svg"
                        alt="banner-image-sample"
                        className="warning-img"
                      />
                    </span>
                    <p className="warning-text-one">Child Death</p>
                    <p className="warning-text-two">Yes</p>
                  </div>
                  <div className="single-warning">
                    <span className="warning-image">
                      <img
                        src="/assets/images/icon/animal-death.svg"
                        alt="banner-image-sample"
                        className="warning-img"
                      />
                    </span>
                    <p className="warning-text-one">Animal Death</p>
                    <p className="warning-text-two">Yes</p>
                  </div>
                  <div className="single-warning">
                    <span className="warning-image">
                      <img
                        src="/assets/images/icon/sexually-content.svg"
                        alt="banner-image-sample"
                        className="warning-img"
                      />
                    </span>
                    <p className="warning-text-one">Sexually Content</p>
                    <p className="warning-text-two">Very Mild</p>
                  </div>
                  <div className="single-warning">
                    <span className="warning-image">
                      <img
                        src="/assets/images/icon/nudity.svg"
                        alt="banner-image-sample"
                        className="warning-img"
                      />
                    </span>
                    <p className="warning-text-one">Nudity</p>
                    <p className="warning-text-two">None</p>
                  </div>
                  <div className="single-warning">
                    <span className="warning-image">
                      <img
                        src="/assets/images/icon/self-harm.svg"
                        alt="banner-image-sample"
                        className="warning-img"
                      />
                    </span>
                    <p className="warning-text-one">Sucidial / Self Harm</p>
                    <p className="warning-text-two">Implied</p>
                  </div>
                </div>
                <div className="final-wrapper mt-3">
                  <p className="final-heading">Trigger Warning Notes: </p>
                  <p className="final-content">Grief Mental Health,
                  Occult, Cults, Child Death, Animal Death, Violence, Gore,
                  Disturbing Imagery, Psychological Horror</p>
                </div>
              </div>
            </div>

            <div className="col-md-12 margin-t">
              <div className="single-box-section">
                <h2 className="section-heading">Trivia</h2>
                <ul className="pointers">
                  <li>
                    <p className="pointer-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </li>
                  <li>
                    <p className="pointer-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </li>
                  <li>
                    <p className="pointer-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-12 margin-t">
              <div className="single-box-section">
                <h2 className="section-heading">
                  FAQS (Frequently Asked Questions)
                </h2>
                {faqs.map((faq, index) => (
                  <div className="faq-item" key={index}>
                    <button className="faq-question" onClick={() => toggleAccordion(index)}>
                      <span>{faq.question}</span>
                      <i className={`fi fi-br-angle-small-down ${activeIndex === index ? "rotate" : ""}`}/>
                    </button>
                    <div className={`faq-answer ${activeIndex === index ? "active" : ""}`}>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
            <div className="single-box-section margin-t">
                <h2 className="section-heading">Movie Information</h2>
                <div className="sm-info-wrapper">
                  <div className="single-movie-info">
                      <span>Original Title</span>
                      <p>Hereditary</p>
                  </div>

                  <div className="single-movie-info">
                      <span>Release Date</span>
                      <p>June 8, 2018</p>
                  </div>

                  <div className="single-movie-info">
                      <span>Runtime</span>
                      <p>127 min</p>
                  </div>

                  <div className="single-movie-info">
                      <span>Country</span>
                      <p>United States</p>
                  </div>

                  <div className="single-movie-info">
                      <span>Language</span>
                      <p>English</p>
                  </div>

                  <div className="single-movie-info">
                      <span>Status</span>
                      <p>Released</p>
                  </div>

                  <div className="single-movie-info">
                      <span>Director</span>
                      <p>Ari Aster</p>
                  </div>

                  <div className="single-movie-info">
                      <span>Writer</span>
                      <p>Ari Aster</p>
                  </div>

                  <div className="single-movie-info">
                      <span>Main Cast</span>
                      <p>
                      Toni Collette, Milly Shapiro, Alex Wolff, Gabriel Byrne
                      </p>
                  </div>

                  <div className="single-movie-info">
                      <span>Production Company</span>
                      <p>Palisades Park Pictures, A24</p>
                  </div>

                  <div className="single-movie-info">
                      <span>Distributor</span>
                      <p>A24</p>
                  </div>

                  <div className="single-movie-info">
                      <span>IMDb Page</span>
                      <p>
                      <a className="section-heading-link" href="https://www.imdb.com/title/tt7784604/" target="_blank" rel="noopener noreferrer">
                        View on IMDb
                      </a>
                      </p>
                  </div>

                  <div className="single-movie-info">
                      <span>Also Known As</span>
                      <p>None</p>
                  </div>
                </div>
            </div>

            <div className="single-box-section margin-t">
                <div className="section-heading-wrapper">
                    <h2 className="section-heading">Similar Movies</h2>
                    <a className="section-heading-link">View All</a>
                </div>
                <div className="similar-movie-main-wrapper">
                  <div className="similar-movie-wrapper">
                      <Image
                        src="https://placehold.co/1000x1000.jpg"
                        alt="Movie Title"
                        className="similar-movie-img"
                        width={90}
                        height={90}
                      />
                      <div className="similar-movie-info">
                          <p>Midsommar</p>
                          <div className="similar-movie-info-content">
                              <i className="fi fi-ss-star"></i>
                              <span>6.8</span>
                              <span>- 2019</span>
                          </div>
                      </div>
                  </div>
                  <div className="similar-movie-wrapper">
                      <Image
                        src="https://placehold.co/1000x1000.jpg"
                        alt="Movie Title"
                        className="similar-movie-img"
                        width={90}
                        height={90}
                      />
                      <div className="similar-movie-info">
                          <p>Midsommar</p>
                          <div className="similar-movie-info-content">
                              <i className="fi fi-ss-star"></i>
                              <span>9.7</span>
                              <span>- 2019</span>
                          </div>
                      </div>
                  </div>
                </div>
            </div>

            <div className="single-box-section margin-t">
                <div className="section-heading-wrapper">
                  <h2 className="section-heading">Related Article</h2>
                  <a className="section-heading-link">View All</a>
                </div>
                <div className="similar-movie-main-wrapper">
                  <div className="similar-movie-wrapper">
                      <Image
                        src="https://placehold.co/1000x1000.jpg"
                        alt="Movie Title"
                        className="similar-movie-img"
                        width={90}
                        height={90}
                      />
                      <div className="re-article-info">
                          <p className="re-article-title">Hereditary Ending Explained</p>
                          <p className="re-article-subtitle">Full Breakdown of the ending</p>
                      </div>
                  </div>
                  <div className="similar-movie-wrapper">
                      <Image
                        src="https://placehold.co/1000x1000.jpg"
                        alt="Movie Title"
                        className="similar-movie-img"
                        width={90}
                        height={90}
                      />
                      <div className="re-article-info">
                          <p className="re-article-title">Hereditary Ending Explained</p>
                          <p className="re-article-subtitle">Full Breakdown of the ending</p>
                      </div>
                  </div>
                </div>
            </div>

        </div>

        <div className="col-md-12 margin-t">
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
									<SwiperSlide
										key={index}
										style={{ width: "160px" }}
									>
										<div className="top-horror-movie-wrapper">
											<Image
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
        </div>
        
      </div>









      <div className="col-md-12">
        <div className="section-header pt-2">
          <h1 className="title-1">
            Horror Movie Database, Ratings & Endings Explained
          </h1>
          <p className="body-5 mb-0">
            Explore the scariest horror movies, deep dives and real hidden
            meanings.
          </p>

          <div className="col-md-10">
            <div className="search-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="512"
                height="512"
                viewBox="0 0 612.01 612.01"
              >
                <path
                  d="M606.209 578.714 448.198 423.228C489.576 378.272 515 318.817 515 253.393 514.98 113.439 399.704 0 257.493 0S.006 113.439.006 253.393s115.276 253.393 257.487 253.393c61.445 0 117.801-21.253 162.068-56.586l158.624 156.099c7.729 7.614 20.277 7.614 28.006 0a19.291 19.291 0 0 0 .018-27.585zM257.493 467.8c-120.326 0-217.869-95.993-217.869-214.407S137.167 38.986 257.493 38.986c120.327 0 217.869 95.993 217.869 214.407S377.82 467.8 257.493 467.8z"
                  fill="currentColor"
                />
              </svg>
              <input
                type="text"
                placeholder="Search horror movies, endings, stories..."
              />
            </div>
          </div>
          <div className="search-sug">
            <p className="body-5">🔥 Trending Searches:</p>
            <a>Hereditary Ending Explained</a>
            <a>Best Psychological Horror Movies</a>
            <a>True Horror Stories</a>
            <a>Scariest Movies Ever</a>
          </div>
        </div>
      </div>

      <div className="col-md-12">
        <BlogPillarSection />
      </div>
      <div className="col-md-12">
        <BlogTrendingSection />
      </div>

      <div className="col-md-12 mt-5 mb-5">
        <div className="mb-4">
          <h2 className="section-heading mb-0">🎲 Feeling Brave?</h2>
          <p className="body-1 text-grey mb-0">
            Watch this random horror suggestion
          </p>
        </div>

        <div className="random-horror-wrapper">
          <div className="row">
            <div className="col-md-2">
              <div className="horror-pick-card">
                <p className="hpc-content-main">?</p>
                <p className="hpc-content">Click here to reveal</p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="horror-pick-card">
                <p className="hpc-content-main">?</p>
                <p className="hpc-content">Click here to reveal</p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="horror-pick-card">
                <p className="hpc-content-main">?</p>
                <p className="hpc-content">Click here to reveal</p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="horror-pick-card">
                <p className="hpc-content-main">?</p>
                <p className="hpc-content">Click here to reveal</p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="horror-pick-card">
                <p className="hpc-content-main">?</p>
                <p className="hpc-content">Click here to reveal</p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="horror-pick-card">
                <p className="hpc-content-main">?</p>
                <p className="hpc-content">Click here to reveal</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-12 mt-3">
        <div className="end-to-end mb-3">
          <h2 className="section-heading mb-0">🤩 Featured Articles</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="featured-review">
              <img
                src="/assets/images/n-image/original.jpg"
                alt="banner-image-sample"
                className="featured-review-img"
              />
              <div className="review-content">
                <span className="bt-tag">🔥 Featured Review</span>
                <div className="banner-option-wrapper mt-3 mb-3">
                  <div className="tag-wrapper">
                    <span>⭐ 8.5/10</span>
                    <span>Psychological Horror</span>
                  </div>
                </div>
                <h3 className="single-pillar-heading mb-3">
                  Hereditary (2018) - Most Disturbing Psychological Horror Ever
                  Made?
                </h3>
                <p className="body-1">
                  A deeply disturbing psychological horror that explores grief
                  and occult symbolism. This breakdown uncovers hidden meanings,
                  shocking details, and terrifying truth behind Paimon.
                </p>
                <a className="btn-1 ">
                  <span>Read Full Breakdown</span>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 16a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M17.293 6.293a1 1 0 0 1 1.414 0l9 9a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-1.414-1.414L25.586 16l-8.293-8.293a1 1 0 0 1 0-1.414z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="featured-review">
              <img
                src="/assets/images/n-image/original.jpg"
                alt="banner-image-sample"
                className="featured-review-img"
              />
              <div className="review-content">
                <span className="bt-tag">🔥 Featured Review</span>
                <div className="banner-option-wrapper mt-3 mb-3">
                  <div className="tag-wrapper">
                    <span>⭐ 8.5/10</span>
                    <span>Psychological Horror</span>
                  </div>
                </div>
                <h3 className="single-pillar-heading mb-3">
                  Hereditary (2018) - Most Disturbing Psychological Horror Ever
                  Made?
                </h3>
                <p className="body-1">
                  A deeply disturbing psychological horror that explores grief
                  and occult symbolism. This breakdown uncovers hidden meanings,
                  shocking details, and terrifying truth behind Paimon.
                </p>
                <a className="btn-1 ">
                  <span>Read Full Breakdown</span>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 16a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M17.293 6.293a1 1 0 0 1 1.414 0l9 9a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-1.414-1.414L25.586 16l-8.293-8.293a1 1 0 0 1 0-1.414z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-12 mt-4">
        <BlogEditorPickSection />
      </div>

      <div className="col-md-12 mt-5">
        <div className="end-to-end mb-4">
          <h2 className="section-heading mb-0">Explore By Category</h2>
        </div>
        <div className="single-movie-category-wrapper">
          <div className="single-movie-category">
            <span className="smc-img-wrapper">
              <img
                src="/assets/images/psychological-horror.svg"
                alt="banner-image-sample"
              />
            </span>
            <p className="exp-text mb-2">Psychological Horror</p>
            <p className="body-7 mb-0">
              Slow-burn horror that messes with your mind and emotions.
            </p>
          </div>
          <div className="single-movie-category">
            <span className="smc-img-wrapper">
              <img
                src="/assets/images/supernatural-icon.svg"
                alt="banner-image-sample"
              />
            </span>
            <p className="exp-text mb-2"> Supernatural Horror</p>
            <p className="body-7 mb-0">
              Ghosts, demons, and paranormal terror.
            </p>
          </div>
          <div className="single-movie-category">
            <span className="smc-img-wrapper">
              <img
                src="/assets/images/slasher-icon.svg"
                alt="banner-image-sample"
              />
            </span>
            <p className="exp-text mb-2">Slasher Movies</p>
            <p className="body-7 mb-0">
              Classic killers, gore, and survival horror.
            </p>
          </div>
          <div className="single-movie-category">
            <span className="smc-img-wrapper">
              <img src="/assets/images/camera.svg" alt="banner-image-sample" />
            </span>
            <p className="exp-text mb-2">Found Footage Horror</p>
            <p className="body-7 mb-0">
              Realistic horror captured through cameras.
            </p>
          </div>
          <div className="single-movie-category">
            <span className="smc-img-wrapper">
              <img
                src="/assets/images/ending-explained.svg"
                alt="banner-image-sample"
              />
            </span>
            <p className="exp-text mb-2">
              Ending Explained <span className="content-count">98</span>
            </p>
            <p className="body-7 mb-0">
              Deep breakdowns of confusing and disturbing endings.
            </p>
          </div>
          <div className="single-movie-category">
            <span className="smc-img-wrapper">
              <img
                src="/assets/images/true-horror-stories.svg"
                alt="banner-image-sample"
              />
            </span>
            <p className="exp-text mb-2">True Horror Stories</p>
            <p className="body-7 mb-0">
              Real-life disturbing stories that are scarier than fiction.
            </p>
          </div>
          <div className="single-movie-category">
            <span className="smc-img-wrapper">
              <img
                src="/assets/images/horror-movie-review.svg"
                alt="banner-image-sample"
              />
            </span>
            <p className="exp-text mb-2">Horror Movie Reviews</p>
            <p className="body-7 mb-0">
              Slow-burn horror that messes with your mind and emotions.
            </p>
          </div>
          <div className="single-movie-category">
            <span className="smc-img-wrapper">
              <img src="/assets/images/ranking.svg" alt="banner-image-sample" />
            </span>
            <p className="exp-text mb-2">Ranking and Others</p>
            <p className="body-7 mb-0">
              Curated lists to help you discover best horror content.
            </p>
          </div>
        </div>
      </div>

      <div className="blog-sec-header-wrapper">
        <div className="end-to-end ">
          <div>
            <h2 className="section-heading mb-0">All Horror Articles</h2>
            <p className="body-1 text-grey mb-0">
              Showing 1–9 of 126 Horror Articles
            </p>
          </div>
          <div className="end-wrapper">
            {/* <div className="filter-btn">
                    <span className="d-none">Filter By</span>
                    <select>
                        <option>Show All Articles</option>
                        <option>Horror Movie Reviews</option>
                        <option>Ending Explained</option>
                        <option>True Horror Stories</option>
                        <option>Psychological Thrillers</option>
                        <option>Horror Web Series</option>
                    </select>
                </div> */}
            <div className="filter-btn ml-3">
              <span>Sort By</span>
              <select>
                <option>Latest First</option>
                <option>Oldest First</option>
                <option>A to Z</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {array.map((item, index) => {
        return (
          <div className="col-md-4" key={index}>
            <div className="single-blog-item">
              <img
                src="/assets/images/placeholder-image-2.jpg"
                alt="banner-image-sample"
              />

              <div className="blog-grid-content-wrapper">
                <div className="banner-option-wrapper mb-3">
                  <div className="tag-wrapper">
                    <span>⭐ 8.5/10</span>
                    <span>Psychological Horror</span>
                    <span>⏱ 6 min read</span>
                  </div>
                </div>
                <h3 className="single-pillar-heading mb-3">
                  The Nun True Story - Real Horror Behind the Film
                </h3>
                <p className="body-1 mb-0">
                  A deeply disturbing psychological horror that explores grief
                  and occult symbolism.
                </p>
                {/* <a className="btn-1 transparent-btn">
                                <span>Read More</span>
                                <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M4 16a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1z" fill="currentColor"></path><path d="M17.293 6.293a1 1 0 0 1 1.414 0l9 9a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-1.414-1.414L25.586 16l-8.293-8.293a1 1 0 0 1 0-1.414z" fill="currentColor"></path></svg>
                            </a> */}
              </div>
            </div>
          </div>
        );
      })}
      <div className="col-md-12 text-center mb-4">
        <div className="pagination">
          <a href="#" className="not-allowed">
            <i className="fa-light fa-arrow-left text-xs"></i>
            Prev
          </a>
          <a href="#" className="active">
            1
          </a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#" className="not-allowed">
            ...
          </a>
          <a href="#">5</a>
          <a href="#">
            Next
            <i className="fa-light fa-arrow-right text-xs"></i>
          </a>
        </div>
      </div>

      <div className="col-md-12">
        <div className="pillar-section">
          <h2 className="pillar-heading">Get Weekly Horror Dose</h2>
          <p className="pillar-subheading my-3">
            Get the scariest horror recommendations, hidden gems, and disturbing
            stories directly in your inbox.
          </p>
          <div className="newsletter-wrapper">
            <input
              type="email"
              placeholder="Enter your email"
              className="email-input"
            />
            <button className="btn-1">
              <span>Subscribe</span>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 16a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1z"
                  fill="currentColor"
                ></path>
                <path
                  d="M17.293 6.293a1 1 0 0 1 1.414 0l9 9a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-1.414-1.414L25.586 16l-8.293-8.293a1 1 0 0 1 0-1.414z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}