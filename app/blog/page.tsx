import Link from "next/link";
import BlogPillarSection from "@/components/BlogPillarSection";
import BlogTrendingSection from "@/components/BlogTrendingSection";
import BlogEditorPickSection from "@/components/BlogEditorPickSection";

export default function BlogPage() {
    const array = [1,2,3,4,5,6,7,8]
  return (
    
      <div className="row">
        
        <div className="col-md-12">
            <div className="breadcrumb-area">
                <ul className="breadcrumb">
                    <li className="sb">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="sb"><span>/</span></li>
                    <li className="sb">
                        <span>Blog</span>
                    </li>
                </ul>
            </div>
        </div>

        <div className="col-md-12">
          <div className="section-header pt-2">
            <h1 className="title-1">Horror Movie Reviews, Ending Explained & Disturbing True Stories</h1>
            <p className="body-5 mb-0">Discover the scariest horror movies, deep psychological breakdowns, hidden meanings, and real-life horror stories. From disturbing cult films to modern horror masterpieces, explore everything that truly scares you.</p>
            
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
                    <input type="text" placeholder="Search horror movies, endings, stories..."/>
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
                <p className="body-1 text-grey mb-0">Watch this random horror suggestion</p>
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
                        <img src="/assets/images/n-image/original.jpg" alt="banner-image-sample" className="featured-review-img"/>
                        <div className="review-content">
                            <span className="bt-tag">🔥 Featured Review</span>
                            <div className="banner-option-wrapper mt-3 mb-3">
                                <div className="tag-wrapper">
                                    <span>⭐ 8.5/10</span>
                                    <span>Psychological Horror</span>
                                </div>
                            </div>
                            <h3 className="single-pillar-heading mb-3">Hereditary (2018) - Most Disturbing Psychological Horror Ever Made?</h3>
                            <p className="body-1">A deeply disturbing psychological horror that explores grief and occult symbolism. This breakdown uncovers hidden meanings, shocking details, and terrifying truth behind Paimon.</p>
                            <a className="btn-1 ">
                                <span>Read Full Breakdown</span>
                                <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M4 16a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1z" fill="currentColor"></path><path d="M17.293 6.293a1 1 0 0 1 1.414 0l9 9a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-1.414-1.414L25.586 16l-8.293-8.293a1 1 0 0 1 0-1.414z" fill="currentColor"></path></svg>
                            </a>
                        </div>
                    </div>
                </div> 
                <div className="col-md-6">
                    <div className="featured-review">
                        <img src="/assets/images/n-image/original.jpg" alt="banner-image-sample" className="featured-review-img"/>
                        <div className="review-content">
                            <span className="bt-tag">🔥 Featured Review</span>
                            <div className="banner-option-wrapper mt-3 mb-3">
                                <div className="tag-wrapper">
                                    <span>⭐ 8.5/10</span>
                                    <span>Psychological Horror</span>
                                </div>
                            </div>
                            <h3 className="single-pillar-heading mb-3">Hereditary (2018) - Most Disturbing Psychological Horror Ever Made?</h3>
                            <p className="body-1">A deeply disturbing psychological horror that explores grief and occult symbolism. This breakdown uncovers hidden meanings, shocking details, and terrifying truth behind Paimon.</p>
                            <a className="btn-1 ">
                                <span>Read Full Breakdown</span>
                                <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M4 16a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1z" fill="currentColor"></path><path d="M17.293 6.293a1 1 0 0 1 1.414 0l9 9a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-1.414-1.414L25.586 16l-8.293-8.293a1 1 0 0 1 0-1.414z" fill="currentColor"></path></svg>
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
                        <img src="/assets/images/psychological-horror.svg" alt="banner-image-sample" />
                    </span>
                    <p className="exp-text mb-2">Psychological Horror</p>
                    <p className="body-7 mb-0">Slow-burn horror that messes with your mind and emotions.</p>
                </div>
                <div className="single-movie-category">
                    <span className="smc-img-wrapper">
                        <img src="/assets/images/supernatural-icon.svg" alt="banner-image-sample" />
                    </span>
                    <p className="exp-text mb-2"> Supernatural Horror</p>
                    <p className="body-7 mb-0">Ghosts, demons, and paranormal terror.</p>
                </div>
                <div className="single-movie-category">
                    <span className="smc-img-wrapper">
                        <img src="/assets/images/slasher-icon.svg" alt="banner-image-sample" />
                    </span>
                    <p className="exp-text mb-2">Slasher Movies</p>
                    <p className="body-7 mb-0">Classic killers, gore, and survival horror.</p>
                </div>
                <div className="single-movie-category">
                    <span className="smc-img-wrapper">
                        <img src="/assets/images/camera.svg" alt="banner-image-sample" />
                    </span>
                    <p className="exp-text mb-2">Found Footage Horror</p>
                    <p className="body-7 mb-0">Realistic horror captured through cameras.</p>
                </div>
                <div className="single-movie-category">
                    <span className="smc-img-wrapper">
                        <img src="/assets/images/ending-explained.svg" alt="banner-image-sample" />
                    </span>
                    <p className="exp-text mb-2">Ending Explained <span className="content-count">98</span></p>
                    <p className="body-7 mb-0">Deep breakdowns of confusing and disturbing endings.</p>
                </div>
                <div className="single-movie-category">
                    <span className="smc-img-wrapper">
                        <img src="/assets/images/true-horror-stories.svg" alt="banner-image-sample" />
                    </span>
                    <p className="exp-text mb-2">True Horror Stories</p>
                    <p className="body-7 mb-0">Real-life disturbing stories that are scarier than fiction.</p>
                </div>
                <div className="single-movie-category">
                    <span className="smc-img-wrapper">
                        <img src="/assets/images/horror-movie-review.svg" alt="banner-image-sample" />
                    </span>
                    <p className="exp-text mb-2">Horror Movie Reviews</p>
                    <p className="body-7 mb-0">Slow-burn horror that messes with your mind and emotions.</p>
                </div>
                <div className="single-movie-category">
                    <span className="smc-img-wrapper">
                        <img src="/assets/images/ranking.svg" alt="banner-image-sample" />
                    </span>
                    <p className="exp-text mb-2">Ranking and Others</p>
                    <p className="body-7 mb-0">Curated lists to help you discover best horror content.</p>
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
                        <img src="/assets/images/placeholder-image-2.jpg" alt="banner-image-sample" />

                        <div className="blog-grid-content-wrapper">
                            <div className="banner-option-wrapper mb-3">
                                <div className="tag-wrapper">
                                    <span>⭐ 8.5/10</span>
                                    <span>Psychological Horror</span>
                                    <span>⏱ 6 min read</span>
                                </div>
                            </div>
                            <h3 className="single-pillar-heading mb-3">The Nun True Story - Real Horror Behind the Film</h3>
                            <p className="body-1 mb-0">A deeply disturbing psychological horror that explores grief and occult symbolism.</p>
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
                <a href="#" className="active">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#" className="not-allowed">...</a>
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
    
  );
}