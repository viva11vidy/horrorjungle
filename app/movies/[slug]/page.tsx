import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getReviewBySlug } from "@/lib/api";

type Props = {
  params: Promise<{ slug: string }>;
};

/* =========================
   SEO METADATA (CMS DRIVEN)
========================= */
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params;

  const review = await getReviewBySlug(slug);
  if (!review) return {};

  const { acf } = review;

  const title = `${review.title.rendered} Review – Is It Worth Watching?`;
  const description = review.acf.review_summary;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: acf.poster ? [acf.poster] : [],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: acf.poster ? [acf.poster] : [],
    },
    alternates: {
      canonical: `https://horrorjungle.com/reviews/${slug}`,
    },
  };
}

/* =========================
   PAGE RENDER
========================= */
export default async function ReviewPage({ params }: Props) {
  const { slug } = await params;

  // const review = await getReviewBySlug(slug);
  // if (!review) notFound();

  // const { title, acf } = review;

  return (
    <main className="max-w-3xl mx-auto p-6">
{/* 
     
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Movie",
                "@id": `https://horrorjungle.com/reviews/${slug}#movie`,
                "name": title.rendered,
                "image": acf.poster,
              },
              {
                "@type": "Review",
                "itemReviewed": {
                  "@id": `https://horrorjungle.com/reviews/${slug}#movie`
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": acf.rating,
                  "bestRating": "10"
                },
                "author": {
                  "@type": "Organization",
                  "name": "Horrorjungle"
                },
                "reviewBody": acf.review_summary
              }
            ]
          }),
        }}
      />

      <h1 className="text-3xl font-bold mb-4">
        {title.rendered}
      </h1>

      {acf.poster && (
        <img
          src={acf.poster}
          alt={title.rendered}
          className="rounded mb-4"
        />
      )}

      <p className="mb-2">
        ⭐ <strong>{acf.rating}/10</strong>
      </p>

      <p className="text-sm text-gray-400 mb-4">
        <strong>Where to watch:</strong> {acf.where_to_watch}
      </p>

      <section>
        <h2 className="text-xl font-semibold mb-2">
          Quick Verdict
        </h2>
        <p>{acf.review_summary}</p>
      </section> */}
      <h1>asdsadsad</h1>
    </main>
  );
}