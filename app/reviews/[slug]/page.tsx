import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export const metadata: Metadata = {
  title: "Movie Review | Horrorjungle",
  description:
    "An honest horror movie review to help you decide if it’s worth watching and where to stream it.",
};

export default function ReviewPage({ params }: Props) {
  return (
    <main style={{ maxWidth: "800px", margin: "40px auto", padding: "0 20px" }}>
      {/* Movie Title */}
      <h1>Movie Name Review</h1>

      {/* Quick Verdict */}
      <p>
        <strong>Quick Verdict:</strong> A short, honest summary of whether this
        horror movie is worth watching.
      </p>

      {/* Movie Meta */}
      <ul>
        <li><strong>Genre:</strong> Psychological Horror</li>
        <li><strong>Year:</strong> 2024</li>
        <li><strong>Runtime:</strong> 110 minutes</li>
        <li><strong>Director:</strong> Director Name</li>
      </ul>

      {/* Rating */}
      <p>
        <strong>Rating:</strong> ⭐⭐⭐⭐☆ (4/5)
      </p>

      {/* Main Review */}
      <section>
        <h2>Full Review</h2>
        <p>
          Write the detailed review here. Focus on atmosphere, story, pacing,
          performances, and what kind of horror this movie delivers.
        </p>
      </section>

      {/* Who Should Watch */}
      <section>
        <h2>Who Should Watch This Movie?</h2>
        <ul>
          <li>Fans of slow-burn horror</li>
          <li>Viewers who enjoy psychological tension</li>
        </ul>
      </section>

      {/* Who Should Skip */}
      <section>
        <h2>Who Should Skip This Movie?</h2>
        <ul>
          <li>People expecting heavy jump scares</li>
          <li>Viewers who dislike ambiguous endings</li>
        </ul>
      </section>

      {/* Where to Watch */}
      <section>
        <h2>Where to Watch</h2>
        <p>
          Available on <strong>Amazon Prime Video</strong> and{" "}
          <strong>Apple TV</strong>.
        </p>
      </section>
    </main>
  );
}