import Link from "next/link";
import BlogPillarSection from "@/components/BlogPillarSection";
import BlogTrendingSection from "@/components/BlogTrendingSection";
import BlogEditorPickSection from "@/components/BlogEditorPickSection";

export default function ArticlesDetails() {
    const array = [1,2,3,4,5,6,7,8]
  return (
    
    <div className="row">
        <div className="col-md-12">
            <div className="breadcrumb-area">
                <ul className="breadcrumb">
                    <li className="sb"><Link href="/">Home</Link></li>
                    <li className="sb"><span>/</span></li>
                    <li className="sb"><Link href="/blog">Blog</Link></li>
                    <li className="sb"><span>/</span></li>
                    <li className="sb"><span>Hereditary (2018) Explained: The Disturbing Truth Behind the Ending</span></li>
                </ul>
            </div>

            <div className="blog-content">
                <div className="row">
                    <div className="col-md-8">
                    <div className="section-header pt-2">
                        <h1 className="title-1">
                        Hereditary (2018) Explained: The Disturbing Truth Behind the Ending 
                        <span className="bt-tag ml-3">🔥 Featured Review</span>
                        </h1>
                        <p className="body-5 mb-0">A terrifying deep dive into grief, control, and the hidden demon manipulating everything from the shadows.</p>
                    </div>
                    <div className="banner-option-wrapper mb-3">
                        <div className="tag-wrapper">
                        <span> Nick John Monroe</span>
                        <span> 21 May 2025</span>
                        <span> 6 min read</span>
                        </div>
                    </div>
                    <img src="/assets/images/placeholder-image-2.jpg" alt="banner-image-sample" className="blog-details-main-image"/>

                    <div className="quick-summary-sec">
                        <h2 className="qs-title mb-3">Quick Summary</h2>
                        <p className="body-8 mb-3">Hereditary is not just a horror film — it’s a psychological nightmare about a family slowly losing control while being manipulated by a dark supernatural force.</p>
                        <div className="bd-qs-one">
                        <span className="body-5">Rating:</span>
                        <span className="body-8">8.5 ⭐</span>
                        </div>
                        <div className="bd-qs-one">
                        <span className="body-5">Genres:</span>
                        <span className="body-8">Psychological Horror, Supernatural, Slow Burn</span>
                        </div>
                        <div className="bd-qs-one">
                        <span className="body-5">Mood:</span>
                        <span className="body-8">Disturbing, Dark, Unsettling</span>
                        </div>
                    </div>

                    <div className="quick-summary-sec">
                        <h2 className="qs-title mb-3">Plot Summary</h2>
                        <p className="body-8 mb-0">The story follows Annie Graham, an artist grieving the death of her secretive mother. As strange events begin to unfold, her family — including her husband Steve, son Peter, and daughter Charlie — become entangled in a horrifying chain of supernatural occurrences.
                        <br/><br/>
                        After a tragic accident involving Charlie, the family’s grief spirals into paranoia, fear, and eventually something far more sinister.</p>
                    </div>


                    <div className="quick-summary-sec">
                        <h2 className="qs-title mb-3">ENDING EXPLAINED</h2>
                        <p className="body-8 mb-0">Who is Paimon?
                        <br/>
                        Paimon is a powerful demon king who seeks a male host. Throughout the film, a cult secretly orchestrates events to bring him into the body of Peter.
                        <br/>
                                            ⸻
                        <br/>
                                            Why did everything happen to this family?
                        <br/>
                                            Annie’s mother was part of a cult. She prepared her family as vessels for Paimon. Every tragedy in the movie is planned, not random.
                        <br/>
                                            ⸻
                        <br/>
                                            What happens to Peter?
                        <br/>
                        By the end, Peter is fully possessed by Paimon. His identity is completely erased.</p>
                    </div>

                    <div className="quick-summary-sec">
                        <h2 className="qs-title mb-3">HIDDEN DETAILS YOU MISSED</h2>
                    </div>

                    <div className="quick-summary-sec">
                        <h2 className="qs-title mb-3">FAN THEORIES</h2>
                    </div>

                    <div className="quick-summary-sec">
                        <h2 className="qs-title mb-3">REAL MEANING</h2>
                    </div>

                    <div className="quick-summary-sec">
                        <h2 className="qs-title mb-3">DID YOU NOTICE THIS?</h2>
                    </div>

                    <div className="quick-summary-sec">
                        <h2 className="qs-title mb-3">Poll</h2>
                        <div className="poll-area">
                            <div className="poll-title">Was Hereditary one of the scariest movies ever made?</div>
                            <div className="option">
                                <span className="option-title">Yes</span>
                                <span className="option-title">35%</span>
                                <span className="option-width" style={{width:"35%"}}></span>
                            </div>
                            <div className="option active">
                                <span className="option-title">no</span>
                                <span className="option-title">65%</span>
                                <span className="option-width" style={{width:"65%"}}></span>
                            </div>
                        </div>
                    </div>

                    <div className="quick-summary-sec">
                        <h2 className="qs-title mb-3">FAQ</h2>
                    </div>

                    <div className="author-area">
                        <h3 className="qs-title mb-3">About the Author</h3>
                        <div className="author-wrapper">
                        <img src="/assets/images/placeholder-image-2.jpg" alt="author-image" className="author-image"/>
                        <div className="author-info">
                            <p className="body-8 mb-1">Nick John Monroe</p>
                            <p className="body-8 mb-0">A lifelong horror fanatic, Nick has been analyzing and reviewing horror films for over a decade. His deep dives into the genre have earned him a dedicated following among horror enthusiasts.</p>
                        </div>
                        </div>
                    </div>

                    </div>
                    <div className="col-md-4">
                    <div className="blog-right-area">
                        <h3 className="section-heading-2 line-from-center mb-3">
                            <span>Share this article</span>
                        </h3>
                        <div className="social-wraper mb-4">
                        <a className="social-icon-share">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="facebook">
                            <path fill-rule="evenodd" d="M12 5.5H9v-2a1 1 0 0 1 1-1h1V0H9a3 3 0 0 0-3 3v2.5H4V8h2v8h3V8h2l1-2.5z" clip-rule="evenodd"></path>
                        </svg>
                        </a>
                        <a className="social-icon-share">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" viewBox="0 0 2476 2476" id="instagram">
                            <path d="M825.4 1238c0-227.9 184.7-412.7 412.6-412.7 227.9 0 412.7 184.8 412.7 412.7 0 227.9-184.8 412.7-412.7 412.7-227.9 0-412.6-184.8-412.6-412.7m-223.1 0c0 351.1 284.6 635.7 635.7 635.7s635.7-284.6 635.7-635.7-284.6-635.7-635.7-635.7S602.3 886.9 602.3 1238m1148-660.9c0 82 66.5 148.6 148.6 148.6 82 0 148.6-66.6 148.6-148.6s-66.5-148.5-148.6-148.5-148.6 66.5-148.6 148.5M737.8 2245.7c-120.7-5.5-186.3-25.6-229.9-42.6-57.8-22.5-99-49.3-142.4-92.6-43.3-43.3-70.2-84.5-92.6-142.3-17-43.6-37.1-109.2-42.6-229.9-6-130.5-7.2-169.7-7.2-500.3s1.3-369.7 7.2-500.3c5.5-120.7 25.7-186.2 42.6-229.9 22.5-57.8 49.3-99 92.6-142.4 43.3-43.3 84.5-70.2 142.4-92.6 43.6-17 109.2-37.1 229.9-42.6 130.5-6 169.7-7.2 500.2-7.2 330.6 0 369.7 1.3 500.3 7.2 120.7 5.5 186.2 25.7 229.9 42.6 57.8 22.4 99 49.3 142.4 92.6 43.3 43.3 70.1 84.6 92.6 142.4 17 43.6 37.1 109.2 42.6 229.9 6 130.6 7.2 169.7 7.2 500.3 0 330.5-1.2 369.7-7.2 500.3-5.5 120.7-25.7 186.3-42.6 229.9-22.5 57.8-49.3 99-92.6 142.3-43.3 43.3-84.6 70.1-142.4 92.6-43.6 17-109.2 37.1-229.9 42.6-130.5 6-169.7 7.2-500.3 7.2-330.5 0-369.7-1.2-500.2-7.2M727.6 7.5c-131.8 6-221.8 26.9-300.5 57.5-81.4 31.6-150.4 74-219.3 142.8C139 276.6 96.6 345.6 65 427.1 34.4 505.8 13.5 595.8 7.5 727.6 1.4 859.6 0 901.8 0 1238s1.4 378.4 7.5 510.4c6 131.8 26.9 221.8 57.5 300.5 31.6 81.4 73.9 150.5 142.8 219.3 68.8 68.8 137.8 111.1 219.3 142.8 78.8 30.6 168.7 51.5 300.5 57.5 132.1 6 174.2 7.5 510.4 7.5 336.3 0 378.4-1.4 510.4-7.5 131.8-6 221.8-26.9 300.5-57.5 81.4-31.7 150.4-74 219.3-142.8 68.8-68.8 111.1-137.9 142.8-219.3 30.6-78.7 51.6-168.7 57.5-300.5 6-132.1 7.4-174.2 7.4-510.4s-1.4-378.4-7.4-510.4c-6-131.8-26.9-221.8-57.5-300.5-31.7-81.4-74-150.4-142.8-219.3C2199.4 139 2130.3 96.6 2049 65c-78.8-30.6-168.8-51.6-300.5-57.5-132-6-174.2-7.5-510.4-7.5-336.3 0-378.4 1.4-510.5 7.5"></path>
                        </svg>
                        
                        </a>
                        <a className="social-icon-share">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="facebook">
                            <path fill-rule="evenodd" d="M12 5.5H9v-2a1 1 0 0 1 1-1h1V0H9a3 3 0 0 0-3 3v2.5H4V8h2v8h3V8h2l1-2.5z" clip-rule="evenodd"></path>
                        </svg>
                        </a>
                        <a className="social-icon-share">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="facebook">
                            <path fill-rule="evenodd" d="M12 5.5H9v-2a1 1 0 0 1 1-1h1V0H9a3 3 0 0 0-3 3v2.5H4V8h2v8h3V8h2l1-2.5z" clip-rule="evenodd"></path>
                        </svg>
                        </a>
                        </div> 
                        <h3 className="section-heading-2 line-from-center mb-3">
                            <span>Table of contents</span>
                        </h3>
                        <ul className="toc-ul mb-4">
                        <li>
                            <a className="body-5" href="#quick-summary">Quick Summary</a>
                        </li>
                        <li>
                            <a className="body-5" href="#fan-theories">Fan Theories</a>
                        </li>
                        <li>
                            <a className="body-5" href="#real-meaning">Real Meaning</a>
                        </li>
                        <li>
                            <a className="body-5" href="#did-you-notice">Did You Notice This?</a>
                        </li>
                        <li>
                            <a className="body-5" href="#poll">Poll</a>
                        </li>
                        <li>
                            <a className="body-5" href="#faq">FAQ</a>
                        </li>
                        </ul>


                        <h3 className="section-heading-2 line-from-center mb-3">
                            <span>Other categories</span>
                        </h3>
                        <div className="single-movie-category mb-3">
                            <span className="smc-img-wrapper">
                                <img src="/assets/images/camera.svg" alt="banner-image-sample" />
                            </span>
                            <p className="exp-text mb-2">Found Footage Horror</p>
                            <p className="body-7 mb-0">Realistic horror captured through cameras.</p>
                        </div>
                        <div className="single-movie-category">
                            <span className="smc-img-wrapper">
                                <img src="/assets/images/true-horror-stories.svg" alt="banner-image-sample" />
                            </span>
                            <p className="exp-text mb-2">True Horror Stories</p>
                            <p className="body-7 mb-0">Real-life disturbing stories that are scarier than fiction.</p>
                        </div>

                    </div>
                    </div>

                </div>


                <div className="related-area">
                    <h3 className="section-heading mb-3">Related Articles</h3>
                    <div className="row">
                    <div className="col-md-3">
                        <div className="single-blog-item">
                        <img src="/assets/images/placeholder-image-2.jpg" alt="banner-image-sample" />
                        <div className="blog-grid-content-wrapper">
                            <div className="banner-option-wrapper mb-3">
                                <div className="tag-wrapper">
                                    <span>⭐ 8.5/10</span>
                                    <span>⏱ 6 min read</span>
                                </div>
                            </div>
                            <h3 className="single-pillar-heading mb-3">The Nun True Story - Real Horror Behind the Film</h3>
                            <p className="body-1 mb-0">A deeply disturbing psychological horror that explores grief and occult symbolism.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="single-blog-item">
                        <img src="/assets/images/placeholder-image-2.jpg" alt="banner-image-sample" />
                        <div className="blog-grid-content-wrapper">
                            <div className="banner-option-wrapper mb-3">
                                <div className="tag-wrapper">
                                    <span>⭐ 8.5/10</span>
                                    <span>⏱ 6 min read</span>
                                </div>
                            </div>
                            <h3 className="single-pillar-heading mb-3">The Nun True Story - Real Horror Behind the Film</h3>
                            <p className="body-1 mb-0">A deeply disturbing psychological horror that explores grief and occult symbolism.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="single-blog-item">
                        <img src="/assets/images/placeholder-image-2.jpg" alt="banner-image-sample" />
                        <div className="blog-grid-content-wrapper">
                            <div className="banner-option-wrapper mb-3">
                                <div className="tag-wrapper">
                                    <span>⭐ 8.5/10</span>
                                    <span>⏱ 6 min read</span>
                                </div>
                            </div>
                            <h3 className="single-pillar-heading mb-3">The Nun True Story - Real Horror Behind the Film</h3>
                            <p className="body-1 mb-0">A deeply disturbing psychological horror that explores grief and occult symbolism.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="single-blog-item">
                        <img src="/assets/images/placeholder-image-2.jpg" alt="banner-image-sample" />
                        <div className="blog-grid-content-wrapper">
                            <div className="banner-option-wrapper mb-3">
                                <div className="tag-wrapper">
                                    <span>⭐ 8.5/10</span>
                                    <span>⏱ 6 min read</span>
                                </div>
                            </div>
                            <h3 className="single-pillar-heading mb-3">The Nun True Story - Real Horror Behind the Film</h3>
                            <p className="body-1 mb-0">A deeply disturbing psychological horror that explores grief and occult symbolism.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                
                <div className="row">
                    <div className="col-md-12">
                        <BlogPillarSection />
                    </div>
                    <div className="col-md-12">
                        <div className="pillar-section">
                            <h2 className="pillar-heading">Join Horror Club</h2>
                            <p className="pillar-subheading my-3">Get the scariest horror recommendations, hidden gems, and disturbing stories directly in your inbox.</p>
                            <div className="newsletter-wrapper">
                                <input type="email" placeholder="Enter your email" className="email-input"/>
                                <button className="btn-1">
                                    <span>Subscribe</span>
                                    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M4 16a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1z" fill="currentColor"></path><path d="M17.293 6.293a1 1 0 0 1 1.414 0l9 9a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-1.414-1.414L25.586 16l-8.293-8.293a1 1 0 0 1 0-1.414z" fill="currentColor"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                </div>
              



            </div>

        </div>
    </div>

    
  );
}