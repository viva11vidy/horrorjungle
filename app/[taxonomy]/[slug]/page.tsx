import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTitlesByTaxonomy } from "@/lib/api";

type Props = {
  params: Promise<{ taxonomy: string; slug: string }>;
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { taxonomy, slug } = await params;

  const readableTaxonomy = taxonomy.replace("-", " ");
  const readableSlug = slug.replace("-", " ");

  const title = `${readableSlug} ${readableTaxonomy} horror titles`;
  const description = `Browse ${readableSlug} horror titles available on Horrorjungle.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://horrorjungle.com/${taxonomy}/${slug}`,
    },
  };
}

export default async function TaxonomyPage({ params }: Props) {
  const { taxonomy, slug } = await params;

  const titles = await getTitlesByTaxonomy(taxonomy, slug);

  if (!titles || titles.length === 0) notFound();

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 capitalize">
        {slug.replace("-", " ")} Horror Titles
      </h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {titles.map((item: any) => (
          <li key={item.id}>
            <a
              href={`/title/${item.slug}`}
              className="block border rounded p-4 hover:bg-gray-900"
            >
              <h2 className="text-xl font-semibold mb-2">
                {item.title.rendered}
              </h2>

              {item.acf.poster && (
                <img
                  src={item.acf.poster}
                  alt={item.title.rendered}
                  className="rounded"
                />
              )}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}