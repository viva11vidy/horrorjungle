import Image from "next/image";

type ReviewCardProps = {
  title: string;
  poster: string;
  genres: string;
  badge?: string;
};

export default function ReviewCard({
  title,
  poster,
  genres,
  badge,
}: ReviewCardProps) {
  return (
    <div className="review-card">
      <div className="poster-wrapper">
        {badge && <span className="bt-tag">{badge}</span>}
        <Image
          src={poster}
          alt={title}
          width={260}
          height={380}
          className="poster-image"
        />
      </div>
      <div className="review-card-content">
        <h3 className="title-3 mb-1">{title}</h3>
        <p className="body-3 mb-0">{genres}</p>
        <p className="body-3 mb-0"><i className="fa-light fa-calendar"></i> &nbsp; 18 Aug, 2026</p>
      </div>
    </div>
  );
}




