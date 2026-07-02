import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTitleBySlug } from "@/lib/api";

type Props = {
  params: Promise<{ slug: string }>;
};

/* =========================
   SEO METADATA (ENTITY)
========================= */
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params;
  const title = await getTitleBySlug(slug);

  if (!title) return {};

  const pageTitle = `${title.title.rendered} (${title.acf.release_year})`;
  const description = `Find details about ${title.title.rendered}, including runtime, where to watch, horror category, and more.`;

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical: `https://horrorjungle.com/title/${slug}`,
    },
    openGraph: {
      title: pageTitle,
      description,
      images: title.acf.poster ? [title.acf.poster] : [],
      type: "video.movie",
    },
  };
}

/* =========================
   PAGE RENDER
========================= */
export default async function TitlePage({ params }: Props) {
  const { slug } = await params;
  const title = await getTitleBySlug(slug);

  if (!title) notFound();

  const { acf } = title;

  return (
    <main className="max-w-3xl mx-auto p-6">

      {/* 🎬 MOVIE ENTITY SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Movie",
            "name": title.title.rendered,
            "image": acf.poster,
            "datePublished": acf.release_year
              ? `${acf.release_year}-01-01`
              : undefined,
            "duration": acf.runtime
              ? `PT${acf.runtime}M`
              : undefined,
          }),
        }}
      />

      <h1 className="text-3xl font-bold mb-4">
        {title.title.rendered}
      </h1>

      {acf.poster && (
        <img
          src={acf.poster}
          alt={title.title.rendered}
          className="rounded mb-4"
        />
      )}

      <ul className="mb-4 space-y-1">
        <li><strong>Release Year:</strong> {acf.release_year}</li>
        <li><strong>Runtime:</strong> {acf.runtime} minutes</li>
        <li><strong>Where to Watch:</strong> {acf.where_to_watch}</li>
      </ul>

      {/* 🔗 LINK TO REVIEW */}
      {acf.review && acf.review.slug && (
        <a
          href={`/reviews/${acf.review.slug}`}
          className="inline-block mt-4 text-red-500 underline"
        >
          Read Full Review →
        </a>
      )}

    </main>
  );
}