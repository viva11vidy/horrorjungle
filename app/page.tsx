import Image from "next/image";
import TrendingReviews from "@/components/TrendingReviews";


export default function Home() {
  return (
    <>
      
		
		<div className="m-text">
			<p>Hello text in the world and it matters</p>
		</div>
		<div className="row">
			<div className="col-md-8">
				<div className="main-banner-area">
					<div className="banner-top" 
						style={{
							backgroundImage: "url('/assets/images/sample-image.jpg')",
						}}>
						<div className="banner-top-content">
							<span className="bt-tag">Featured Review of the Week</span>
							<p className="title-1">The Conjuring: The Devil Made Me Do It</p>
							<div className="banner-option-wrapper">
								<div className="imdb">
									<img src="/assets/images/imdb-logo.svg" alt="imdb-logo"/>
									<span>7.5</span>
								</div>
								<div className="rot">
									<img src="/assets/images/rotten_tomatoes.svg" alt="imdb-logo"/>
									<span>98%</span>
								</div>
								<div className="tag-wrapper">
									<span>Horror</span>
									<span>Thriller</span>
									<span>Mystery</span>
									<span>Based on True Story</span>
								</div>
							</div>
							<p className="body-1">A young man commits a brutal crime, claiming he was controlled by a demon. The Warrens uncover a sinister curse linking the case to a far older, darker presence. To save the innocent, they must confront an entity that bends faith, fear, and fate.</p>

							<div className="btn-wrapper">
								<div className="btn-1">
									<span>Full Review</span>
									<i className="fa-light fa-arrow-right"></i>
								</div>
								<div className="btn-2">
									<span>Trailer </span>
									<i className="fa-light fa-video"></i>
								</div>
							</div>
						</div>
					</div>
					<div className="banner-bottom">
						<div className="single-banner-pagination">
							<img src="/assets/images/banner-image-sample.webp" />
						</div>
						<div className="single-banner-pagination">
							<img src="/assets/images/banner-image-sample.webp" />
						</div>
							<div className="single-banner-pagination">
							<img src="/assets/images/banner-image-sample.webp" />
						</div>
						<div className="single-banner-pagination">
							<img src="/assets/images/banner-image-sample.webp" />
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-4">
				<div className="daily-horror-pick">
					<div className="dhp-top">
						<span className="bt-tag">Daily Horror Picks </span>
						
						<Image
							src="/assets/images/sample-image.jpg"
							alt="Movie poster"
							width={300}
							height={450}
						/>
					</div>
					<div className="dhp-bottom">
						<p className="title-1">Wolf Man</p>
						<div className="banner-option-wrapper">
							<div className="imdb">
								<img src="/assets/images/imdb-logo.svg" alt="imdb-logo"/>
								<span>7.5</span>
							</div>
							<div className="rot">
								<img src="/assets/images/rotten_tomatoes.svg" alt="imdb-logo"/>
								<span>98%</span>
							</div>
						</div>
						<p className="body-1">A young man commits a brutal crime, claiming he was controlled by a demon. The Warrens uncover a sinister curse linking the case to a far older, darker presence. To save the innocent, they must confront an entity that bends faith, fear, and fate.</p>

						<div className="btn-wrapper">
							<div className="btn-1">
								<span>Full Review</span>
								<i className="fa-light fa-arrow-right"></i>
							</div>
							<div className="btn-2">
								<span>Trailer </span>
								<i className="fa-light fa-video"></i>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="col-md-12 mb-4">
				<TrendingReviews />
			</div>

			<div className="col-md-4 mt-5">
				<div className="scare-meter">
					<div className="scare-top">
						<p className="scare-heading mb-0">Scare<br />Meter</p>
						<p className="title-3 mb-0 mt-3">What's keeping horror fans awake this week?</p>
					</div>
					<span className="ticket-tear"></span>
					<div className="scare-bottom">
						<Image
							src="/assets/images/poster.png"
							alt="Movie poster"
							width={157}
							height={235}
							className="scare-poster"
						/>
						<div className="scare-right">
							<span className="bt-tag">This week's horror</span>
							<p className="title-1 mt-1 mb-1">Weapons</p>
							<div className="star-rated">
								<i className="fa-solid fa-star"></i>
								<span>4.5 (12k votes)</span>
							</div>
							<p className="scare-quote mt-4 mb-0">“I couldn’t sleep after watching this! It’s so scary."</p>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-8 mt-5">
				<div className="vote-next">
					<div className="vote-top">
						<p className="vote-card-heading mb-3">Vote for next week</p>
					</div>
					<div className="row">
						<div className="col-md-3">
							<div className="vote-next-card">
								<span className="vote-number">1</span>
								<div className="vote-card-img">
									<img src="/assets/images/vote-next-1.jpg" alt="Vote Card Images" />
								</div>
								<div className="vote-card-content">
									<p className="title-3 mt-1 mb-1">Black Phone 2</p>
								</div>
							</div>
						</div>
						<div className="col-md-3">
							<div className="vote-next-card">
								<span className="vote-number">2</span>
								<div className="vote-card-img">
									<img src="/assets/images/vote-next-1.jpg" alt="Vote Card Images" />
								</div>
								<div className="vote-card-content">
									<p className="title-3 mt-1 mb-1">Black Phone 2</p>
								</div>
							</div>
						</div>
						<div className="col-md-3">
							<div className="vote-next-card">
								<span className="vote-number">3</span>
								<div className="vote-card-img">
									<img src="/assets/images/vote-next-1.jpg" alt="Vote Card Images" />
								</div>
								<div className="vote-card-content">
									<p className="title-3 mt-1 mb-1">Black Phone 2</p>
								</div>
							</div>
						</div>
						<div className="col-md-3">
							<div className="vote-next-card">
								<span className="vote-number">4</span>
								<div className="vote-card-img">
									<img src="/assets/images/vote-next-1.jpg" alt="Vote Card Images" />
								</div>
								<div className="vote-card-content">
									<p className="title-3 mt-1 mb-1">Black Phone 2</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>






			<div className="col-md-12 mt-5">
				<section className="trending-section relative">
					<div className="section-header">
						<h2 className="section-heading">MOOD-BASED RECOMMENDATIONS</h2>
						<div className="nav-buttons">
							<button className="swiper-prev">
								<i className="fa-light fa-circle-arrow-left"></i>
							</button>
							<button className="swiper-next">
								<i className="fa-light fa-circle-arrow-right"></i>
							</button>
						</div>
					</div>
				</section>
			</div>
			<div className="home-category-wrapper">
				<a className="home-single-category active">Supernatural</a>
				<a className="home-single-category">Human Horror</a>
				<a className="home-single-category">Psychological</a>
				<a className="home-single-category">Gore & Violence</a>
				<a className="home-single-category">Filmmaking Style</a>
				<a className="home-single-category">Setting / Location</a>
				<a className="home-single-category">Creatures/Monsters</a>
			</div>
			<div className="home-tag-wrapper mt-4">
				<a className="home-single-tag active">Ghosts / Hauntings</a>
				<a className="home-single-tag">Demons / Possession</a>
				<a className="home-single-tag">Witches / Occult</a>
				<a className="home-single-tag">Vampires</a>
				<a className="home-single-tag">Werewolves</a>
				<a className="home-single-tag">Zombies</a>
				<a className="home-single-tag">Cursed Objects</a>
				<a className="home-single-tag">Supernatural Beings</a>
				<a className="home-single-tag">Spirits</a>
			</div>
			<div className="movie-under-cat-wrapper">
				<div className="single-mucw">
					<img src="/assets/images/banner-image-sample.webp" />
					<div>
						<p className="mucw-title">The Plague</p>
						<p className="mucw-sub-title">Mar 2026</p>
					</div>
				</div>
				<div className="single-mucw special">
					<p className="mucw-spcl-title">Most fans this week chose </p>
					<p className="mucw-spcl-subtitle">Psychological Horror</p>
					<a>Explore</a>
					<img src="/assets/images/fan-chose.png" />
				</div>
				<div className="single-mucw">
					<img src="/assets/images/banner-image-sample.webp" />
					<div>
						<p className="mucw-title">The Plague</p>
						<p className="mucw-sub-title">Jan 2023</p>
					</div>
				</div>
			</div>








			<div className="col-md-12 mt-5">
				<section className="trending-section relative">
					<div className="section-header">
						<h2 className="section-heading">GENRE HIGHLIGHTS</h2>
						<div className="nav-buttons">
							<button className="swiper-prev">
								<i className="fa-light fa-circle-arrow-left"></i>
							</button>
							<button className="swiper-next">
								<i className="fa-light fa-circle-arrow-right"></i>
							</button>
						</div>
					</div>
				</section>

				<div className="home-genre-wrapper">
					<div className="home-single-genre">
						<div className="hsg-image-wrapper">
							<img src="/assets/images/genre-haunted.png" />
						</div>
						<span>Haunted</span>
					</div>
					<div className="home-single-genre">
						<div className="hsg-image-wrapper">
							<img src="/assets/images/genre-found-footage.png" />
						</div>
						<span>Found Footage</span>
					</div>
					<div className="home-single-genre">
						<div className="hsg-image-wrapper">
							<img src="/assets/images/genre-slasher.png" />
						</div>
						<span>Slasher</span>
					</div>
					<div className="home-single-genre">
						<div className="hsg-image-wrapper">
							<img src="/assets/images/genre-creature.png" />
						</div>
						<span>Creature</span>
					</div>
					<div className="home-single-genre">
						<div className="hsg-image-wrapper">
							<img src="/assets/images/genre-pshycho.png" />
						</div>
						<span>Psychological</span>
					</div>
					<div className="home-single-genre">
						<div className="hsg-image-wrapper">
							<img src="/assets/images/genre-gore.png" />
						</div>
						<span>Gore</span>
					</div>
					<div className="home-single-genre">
						<div className="hsg-image-wrapper">
							<img src="/assets/images/genre-paranormal.png" />
						</div>
						<span>Paranormal</span>
					</div>
					<div className="home-single-genre">
						<div className="hsg-image-wrapper">
							<img src="/assets/images/genre-haunted.png" />
						</div>
						<span>Haunted</span>
					</div>
				</div>
				
			</div>

			


			


			<div className="col-md-8 phm-main mt-5">
				<span className="phm-bg"></span>
				<section className="relative">
					<div className="section-header">
						<h2 className="section-heading">POPULAR HORROR MOVIES</h2>
						<div className="nav-buttons">
							<button className="swiper-prev">
								<i className="fa-light fa-circle-arrow-left"></i>
							</button>
							<button className="swiper-next">
								<i className="fa-light fa-circle-arrow-right"></i>
							</button>
						</div>
					</div>

					<div className="row">
						<div className="col-md-4 mb-4">
							<div className="phm">
								<div className="poster-wrapper">
									<span className="bt-tag">asasasa</span>
									<img src="/assets/images/banner-image-sample.webp" className="phm-image"/>
								</div>
								<div className="review-card-content">
									<h3 className="title-3 mb-2">Conjuring</h3>
									<div className="tag-wrapper">
										<span>⭐ 8.5/10</span>
										<span>Psychological Horror</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="phm">
								<div className="poster-wrapper">
									<span className="bt-tag">asasasa</span>
									<img src="/assets/images/banner-image-sample.webp" className="phm-image"/>
								</div>
								<div className="review-card-content">
									<h3 className="title-3 mb-2">Conjuring</h3>
									<div className="tag-wrapper">
										<span>⭐ 8.5/10</span>
										<span>Psychological Horror</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="phm">
								<div className="poster-wrapper">
									<span className="bt-tag">asasasa</span>
									<img src="/assets/images/banner-image-sample.webp" className="phm-image"/>
								</div>
								<div className="review-card-content">
									<h3 className="title-3 mb-2">Conjuring</h3>
									<div className="tag-wrapper">
										<span>⭐ 8.5/10</span>
										<span>Psychological Horror</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="phm">
								<div className="poster-wrapper">
									<span className="bt-tag">asasasa</span>
									<img src="/assets/images/banner-image-sample.webp" className="phm-image"/>
								</div>
								<div className="review-card-content">
									<h3 className="title-3 mb-2">Conjuring</h3>
									<div className="tag-wrapper">
										<span>⭐ 8.5/10</span>
										<span>Psychological Horror</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="phm">
								<div className="poster-wrapper">
									<span className="bt-tag">asasasa</span>
									<img src="/assets/images/banner-image-sample.webp" className="phm-image"/>
								</div>
								<div className="review-card-content">
									<h3 className="title-3 mb-2">Conjuring</h3>
									<div className="tag-wrapper">
										<span>⭐ 8.5/10</span>
										<span>Psychological Horror</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="phm">
								<div className="poster-wrapper">
									<span className="bt-tag">asasasa</span>
									<img src="/assets/images/banner-image-sample.webp" className="phm-image"/>
								</div>
								<div className="review-card-content">
									<h3 className="title-3 mb-2">Conjuring</h3>
									<div className="tag-wrapper">
										<span>⭐ 8.5/10</span>
										<span>Psychological Horror</span>
									</div>
								</div>
							</div>
						</div>
					</div>

				</section>
			</div>

			

			<div className="col-md-4 mt-5">
				<section className="relative">
					<div className="section-header">
						<h2 className="mow-heading">MONSTER OF THE WEEK</h2>
					</div>
				</section>
				<div className="mow-main">
					<img src="/assets/images/mow-image.png" alt="banner-image-sample" className="mow-image"/>

					<div className="mow-content">
						<p className="mow-title">Ghostface</p>
						<div className="other-app-wrapper">
							<a>Scream (1999)</a>
							<a>Scream 2</a>
							<a>Scream 3</a>
						</div>
						<p className="mow-text">A masked killer known as Ghostface terrorizes a small town, turning horror-movie rules into deadly reality.</p>
						<div className="btn-1">
							<span className="btn-1-border-new"></span>
							<span>View Full Profile</span>
							<i className="fa-light fa-arrow-right"></i>
						</div>
					</div>
				</div>
			</div>



			<div className="col-md-12 mt-5">
				<section className="relative">
					<div className="section-header">
						<h2 className="section-heading">MOVIES BY IMDb RATING</h2>
						<div className="nav-buttons">
							<button className="swiper-prev">
								<i className="fa-light fa-circle-arrow-left"></i>
							</button>
							<button className="swiper-next">
								<i className="fa-light fa-circle-arrow-right"></i>
							</button>
						</div>
					</div>
					
					<div className="mbi-wrapper">
						<div className="single-mbi">
							<img src="https://m.media-amazon.com/images/I/81dzWlccrGS.jpg" alt="banner-image-sample" className="mbi-image"/>
							<div className="mbi-content">
								<span className="line"></span>
								<p className="title-3 mb-2">Abigail</p>
								<div className="imdb">
									<img src="/assets/images/imdb-logo.svg" alt="imdb-logo"/>
									<span>7.5</span>
								</div>
							</div>
						</div>
						<div className="single-mbi">
							<img src="https://image.tmdb.org/t/p/original/gb5NUyCTbiblRmEwQQXQEMAegol.jpg" alt="banner-image-sample" className="mbi-image"/>
							<div className="mbi-content">
								<span className="line"></span>
								<p className="title-3 mb-2">Abigail</p>
								<div className="imdb">
									<img src="/assets/images/imdb-logo.svg" alt="imdb-logo"/>
									<span>7.5</span>
								</div>
							</div>
						</div>
						<div className="single-mbi">
							<img src="https://m.media-amazon.com/images/I/81dzWlccrGS.jpg" alt="banner-image-sample" className="mbi-image"/>
							<div className="mbi-content">
								<span className="line"></span>
								<p className="title-3 mb-2">Abigail</p>
								<div className="imdb">
									<img src="/assets/images/imdb-logo.svg" alt="imdb-logo"/>
									<span>7.5</span>
								</div>
							</div>
						</div>
						<div className="single-mbi">
							<img src="https://m.media-amazon.com/images/I/81dzWlccrGS.jpg" alt="banner-image-sample" className="mbi-image"/>
							<div className="mbi-content">
								<span className="line"></span>
								<p className="title-3 mb-2">Abigail</p>
								<div className="imdb">
									<img src="/assets/images/imdb-logo.svg" alt="imdb-logo"/>
									<span>7.5</span>
								</div>
							</div>
						</div>
						<div className="single-mbi">
							<img src="https://m.media-amazon.com/images/I/81dzWlccrGS.jpg" alt="banner-image-sample" className="mbi-image"/>
							<div className="mbi-content">
								<span className="line"></span>
								<p className="title-3 mb-2">Abigail</p>
								<div className="imdb">
									<img src="/assets/images/imdb-logo.svg" alt="imdb-logo"/>
									<span>7.5</span>
								</div>
							</div>
						</div>
						<div className="single-mbi">
							<img src="https://m.media-amazon.com/images/I/81dzWlccrGS.jpg" alt="banner-image-sample" className="mbi-image"/>
							<div className="mbi-content">
								<span className="line"></span>
								<p className="title-3 mb-2">Abigail</p>
								<div className="imdb">
									<img src="/assets/images/imdb-logo.svg" alt="imdb-logo"/>
									<span>7.5</span>
								</div>
							</div>
						</div>
					</div>

				</section>
			</div>







			<div className="col-md-12 mt-4">
				<section className="trending-section relative">
					<div className="section-header">
						<h2 className="section-heading">UPCOMING HORROR RELEASES</h2>
						<div className="nav-buttons">
							<button className="swiper-prev">
								<i className="fa-light fa-circle-arrow-left"></i>
							</button>
							<button className="swiper-next">
								<i className="fa-light fa-circle-arrow-right"></i>
							</button>
						</div>
					</div>
				</section>
				<div className="row">
					<div className="col-md-5">
						<div className="uhr-wrapper">
							<div className="uhr-image-wrapper">
								<img src="https://www.joblo.com/wp-content/uploads/2024/01/longlegs-poster-featured-1280x720.jpg" />
							</div>
							<div className="uhr-content-wrapper">
								<p className="uhr-title title-1 mb-0">LongLegs</p>
								<p className="uhr-director">Directed By - Osgood Perkins</p>
								<div className="tag-wrapper">
									<span>Psychological Horror</span>
								</div>
								<p className="main-realse-date">
									<svg  viewBox="0 0 34 34" className=""><g><path d="M29.6 2h-3v3c0 .6-.5 1-1 1s-1-.4-1-1V2h-16v3c0 .6-.5 1-1 1s-1-.4-1-1V2h-3C2.1 2 1 3.3 1 5v3.6h32V5c0-1.7-1.8-3-3.4-3zM1 10.7V29c0 1.8 1.1 3 2.7 3h26c1.6 0 3.4-1.3 3.4-3V10.7zm8.9 16.8H7.5c-.4 0-.8-.3-.8-.8v-2.5c0-.4.3-.8.8-.8H10c.4 0 .8.3.8.8v2.5c-.1.5-.4.8-.9.8zm0-9H7.5c-.4 0-.8-.3-.8-.8v-2.5c0-.4.3-.8.8-.8H10c.4 0 .8.3.8.8v2.5c-.1.5-.4.8-.9.8zm8 9h-2.5c-.4 0-.8-.3-.8-.8v-2.5c0-.4.3-.8.8-.8h2.5c.4 0 .8.3.8.8v2.5c0 .5-.3.8-.8.8zm0-9h-2.5c-.4 0-.8-.3-.8-.8v-2.5c0-.4.3-.8.8-.8h2.5c.4 0 .8.3.8.8v2.5c0 .5-.3.8-.8.8zm8 9h-2.5c-.4 0-.8-.3-.8-.8v-2.5c0-.4.3-.8.8-.8h2.5c.4 0 .8.3.8.8v2.5c0 .5-.3.8-.8.8zm0-9h-2.5c-.4 0-.8-.3-.8-.8v-2.5c0-.4.3-.8.8-.8h2.5c.4 0 .8.3.8.8v2.5c0 .5-.3.8-.8.8z" fill="#000000" opacity="1" data-original="#000000" className=""></path></g></svg>
									<span>Release in: 4 days</span>
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-7">
						<div className="row uhr-other">
							<div className="col-md-3">
								<div className="phm">
									<div className="poster-wrapper">
										<img src="/assets/images/banner-image-sample.webp" className="phm-image"/>
									</div>
									<div className="review-card-content">
										<h3 className="uhr-other-title">Conjuring</h3>
										<p className="main-realse-date">
											<span>13 Sep 2026</span>
										</p>
									</div>
								</div>
							</div>
							<div className="col-md-3">
								<div className="phm">
									<div className="poster-wrapper">
										<img src="/assets/images/banner-image-sample.webp" className="phm-image"/>
									</div>
									<div className="review-card-content">
										<h3 className="uhr-other-title">Conjuring</h3>
										<p className="main-realse-date">
											<span>13 Sep 2026</span>
										</p>
									</div>
								</div>
							</div>
							<div className="col-md-3">
								<div className="phm">
									<div className="poster-wrapper">
										<img src="/assets/images/banner-image-sample.webp" className="phm-image"/>
									</div>
									<div className="review-card-content">
										<h3 className="uhr-other-title">Conjuring</h3>
										<p className="main-realse-date">
											<span>13 Sep 2026</span>
										</p>
									</div>
								</div>
							</div>
							<div className="col-md-3">
								<div className="phm">
									<div className="poster-wrapper">
										<img src="/assets/images/banner-image-sample.webp" className="phm-image"/>
									</div>
									<div className="review-card-content">
										<h3 className="uhr-other-title">Conjuring</h3>
										<p className="main-realse-date">
											<span>13 Sep 2026</span>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>






			<div className="col-md-12 mt-5">
				<section className="trending-section relative">
					<div className="section-header">
						<h2 className="section-heading">WHAT’S STREAMING NOW</h2>
						<div className="nav-buttons">
							<button className="swiper-prev">
								<i className="fa-light fa-circle-arrow-left"></i>
							</button>
							<button className="swiper-next">
								<i className="fa-light fa-circle-arrow-right"></i>
							</button>
						</div>
					</div>
				</section>
			</div>
			<div className="home-category-wrapper">
				<a className="home-single-category active">Movies</a>
				<a className="home-single-category">Series</a>
			</div>
			<div className="home-tag-wrapper mt-4">
				<a className="home-single-tag active">Netflix</a>
				<a className="home-single-tag">Prime Video</a>
				<a className="home-single-tag">Jio Hotstar</a>
				<a className="home-single-tag">Shudder</a>
				<a className="home-single-tag">Sony Liv</a>
				<a className="home-single-tag">Apple TV</a>
				<a className="home-single-tag">Zee5</a>
			</div>

			<div className="row mt-5">
				<div className="col-md-2 mb-4">
					<div className="phm">
						<div className="poster-wrapper">
							<img src="/assets/images/banner-image-sample.webp" className="phm-image"/>
						</div>
						<div className="review-card-content">
							<h3 className="title-3 mb-2">Conjuring</h3>
							<div className="tag-wrapper">
								<span>Psychological Horror</span>
							</div>
						</div>
					</div>
				</div>

				<div className="col-md-2 mb-4">
					<div className="phm">
						<div className="poster-wrapper">
							<img src="/assets/images/banner-image-sample.webp" className="phm-image"/>
						</div>
						<div className="review-card-content">
							<h3 className="title-3 mb-2">Conjuring</h3>
							<div className="tag-wrapper">
								<span>Psychological Horror</span>
							</div>
						</div>
					</div>
				</div>
			</div>





			<div className="col-md-12 mt-0">
				<section className="relative">
					<div className="section-header">
						<h2 className="section-heading">Latest Horror Articles</h2>
						<div className="nav-buttons">
							<button className="swiper-prev">
								<i className="fa-light fa-circle-arrow-left"></i>
							</button>
							<button className="swiper-next">
								<i className="fa-light fa-circle-arrow-right"></i>
							</button>
						</div>
					</div>
					
					<div className="row">
						<div className="col-md-3">
							<div className="single-blog-item">
								<img src="/assets/images/placeholder-image-2.jpg" alt="banner-image-sample" />

								<div className="blog-grid-content-wrapper">
									<div className="banner-option-wrapper mb-3">
										<div className="tag-wrapper">
											<span>⏱ 6 min read</span>
										</div>
									</div>
									<h3 className="single-pillar-heading mb-0">The Nun True Story - Real Horror Behind the Film</h3>
								</div>

							</div>
						</div>

						<div className="col-md-3">
							<div className="single-blog-item">
								<img src="/assets/images/placeholder-image-2.jpg" alt="banner-image-sample" />

								<div className="blog-grid-content-wrapper">
									<div className="banner-option-wrapper mb-3">
										<div className="tag-wrapper">
											<span>⏱ 6 min read</span>
										</div>
									</div>
									<h3 className="single-pillar-heading mb-0">The Nun True Story - Real Horror Behind the Film</h3>
								</div>

							</div>
						</div>

						<div className="col-md-3">
							<div className="single-blog-item">
								<img src="/assets/images/placeholder-image-2.jpg" alt="banner-image-sample" />

								<div className="blog-grid-content-wrapper">
									<div className="banner-option-wrapper mb-3">
										<div className="tag-wrapper">
											<span>⏱ 6 min read</span>
										</div>
									</div>
									<h3 className="single-pillar-heading mb-0">The Nun True Story - Real Horror Behind the Film</h3>
								</div>

							</div>
						</div>

						<div className="col-md-3">
							<div className="single-blog-item">
								<img src="/assets/images/placeholder-image-2.jpg" alt="banner-image-sample" />

								<div className="blog-grid-content-wrapper">
									<div className="banner-option-wrapper mb-3">
										<div className="tag-wrapper">
											<span>⏱ 6 min read</span>
										</div>
									</div>
									<h3 className="single-pillar-heading mb-0">The Nun True Story - Real Horror Behind the Film</h3>
								</div>

							</div>
						</div>

						<div className="col-md-3">
							<div className="single-blog-item">
								<img src="/assets/images/placeholder-image-2.jpg" alt="banner-image-sample" />

								<div className="blog-grid-content-wrapper">
									<div className="banner-option-wrapper mb-3">
										<div className="tag-wrapper">
											<span>⏱ 6 min read</span>
										</div>
									</div>
									<h3 className="single-pillar-heading mb-0">The Nun True Story - Real Horror Behind the Film</h3>
								</div>

							</div>
						</div>

						<div className="col-md-3">
							<div className="single-blog-item">
								<img src="/assets/images/placeholder-image-2.jpg" alt="banner-image-sample" />

								<div className="blog-grid-content-wrapper">
									<div className="banner-option-wrapper mb-3">
										<div className="tag-wrapper">
											<span>⏱ 6 min read</span>
										</div>
									</div>
									<h3 className="single-pillar-heading mb-0">The Nun True Story - Real Horror Behind the Film</h3>
								</div>

							</div>
						</div>

						<div className="col-md-3">
							<div className="single-blog-item">
								<img src="/assets/images/placeholder-image-2.jpg" alt="banner-image-sample" />

								<div className="blog-grid-content-wrapper">
									<div className="banner-option-wrapper mb-3">
										<div className="tag-wrapper">
											<span>⏱ 6 min read</span>
										</div>
									</div>
									<h3 className="single-pillar-heading mb-0">The Nun True Story - Real Horror Behind the Film</h3>
								</div>

							</div>
						</div>

						<div className="col-md-3">
							<div className="single-blog-item">
								<img src="/assets/images/placeholder-image-2.jpg" alt="banner-image-sample" />

								<div className="blog-grid-content-wrapper">
									<div className="banner-option-wrapper mb-3">
										<div className="tag-wrapper">
											<span>⏱ 6 min read</span>
										</div>
									</div>
									<h3 className="single-pillar-heading mb-0">The Nun True Story - Real Horror Behind the Film</h3>
								</div>

							</div>
						</div>
					</div>
					<div className="horizontal-center">
						<div className="btn-1">
							<span className="btn-1-border-new"></span>
							<span>View Full Profile</span>
						</div>
					</div>
				</section>
			</div>







			<div className="col-md-12 mt-3 mb-4">
				<section className="trending-section relative">
					<div className="section-header">
						<h2 className="mow-heading">Did You Know?</h2>
						<div className="nav-buttons">
							<button className="swiper-prev">
								<i className="fa-light fa-circle-arrow-left"></i>
							</button>
							<button className="swiper-next">
								<i className="fa-light fa-circle-arrow-right"></i>
							</button>
						</div>
					</div>
				</section>
				<div className="row">
					<div className="col-md-3">
						<div className="single-did">
							<img src="/assets/images/info-circle.svg" alt="banner-image-sample" className="single-did-img"/>
							<p>For the writing on the knife, an anagram of the movie title was used.</p>
						</div>
					</div>
					<div className="col-md-3">
						<div className="single-did">
							<img src="/assets/images/info-circle.svg" alt="banner-image-sample" className="single-did-img"/>
							<p>For the writing on the knife, an anagram of the movie title was used.</p>
						</div>
					</div>
					<div className="col-md-3">
						<div className="single-did">
							<img src="/assets/images/info-circle.svg" alt="banner-image-sample" className="single-did-img"/>
							<p>For the writing on the knife, an anagram of the movie title was used.</p>
						</div>
					</div>
					<div className="col-md-3">
						<div className="single-did">
							<img src="/assets/images/info-circle.svg" alt="banner-image-sample" className="single-did-img"/>
							<p>For the writing on the knife, an anagram of the movie title was used.</p>
						</div>
					</div>
				</div>
			</div>







			








			








			





			<div className="col-md-4 mt-5">
				<section className="home-quiz-section relative">
					<img src="/assets/images/stn-image.png" className="quiz-props"/>
					<h2 className="mow-heading mt-4">SURVIVE THE NIGHT</h2>
					<p className="hqs-sub">Take this 60 second journey into the dark and discover how you truly are.</p>
					<div className="btn-1">
						<span className="btn-1-border-new"></span>
						<span>Begin the fear</span>
					</div>
				</section>
			</div>

			<div className="col-md-8 mt-5">
				<div className="end-to-end mb-3">
                	<h2 className="section-heading mb-0">Articles By Category</h2>
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
				</div>
			</div>








			
		</div>
		
    </>
  );
}