const CMS_URL = "https://cms.horrorjungle.com";

/**
 * Fetch all reviews
 */
export async function getReviews() {
  const res = await fetch(
    `${CMS_URL}/wp-json/wp/v2/reviews?acf_format=standard`,
    {
      next: { revalidate: 60 }, // ISR for SEO
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch reviews");
  }

  return res.json();
}

/**
 * Fetch single review by slug
 */
export async function getReviewBySlug(slug: string) {
  const res = await fetch(
    `${CMS_URL}/wp-json/wp/v2/reviews?slug=${slug}&acf_format=standard`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch review");
  }

  const data = await res.json();
  return data[0] || null;
}