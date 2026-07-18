import { products } from "@/constants/products";
import ProductHero from "@/components/product/product-hero";
import ProductList from "@/components/product/product-list";
import { softwareApplicationJsonLd } from "@/lib/seo";

const shipped = products
  .filter((p) => p.status !== "upcoming")
  .map(
    ({
      name,
      tagline,
      description,
      highlights,
      url,
      category,
      statusLabel,
      media,
    }) => ({
      name,
      tagline,
      description,
      highlights,
      url,
      category,
      statusLabel,
      media,
    }),
  );

export default function ProductPage() {
  const productSchemas = products
    .filter((p) => p.status !== "upcoming")
    .map((product) =>
      softwareApplicationJsonLd({
        name: product.name,
        description: product.description,
        url: product.url,
        category: product.category,
        statusLabel: product.statusLabel,
      }),
    );

  return (
    <main className="relative overflow-x-hidden">
      {productSchemas.map((schema) => (
        <script
          key={schema.name as string}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <ProductHero />

      <section className="relative overflow-x-hidden px-4 pb-20 sm:px-6 sm:pb-24 md:pb-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ProductList products={shipped} />
        </div>
      </section>
    </main>
  );
}
