import { products } from "@/constants/products";
import ProductHero from "@/components/product/product-hero";
import ProductList from "@/components/product/product-list";

const shipped = products
  .filter((p) => p.status !== "upcoming")
  .map(({ name, tagline, description, highlights, url, category, statusLabel }) => ({
    name,
    tagline,
    description,
    highlights,
    url,
    category,
    statusLabel,
  }));

export default function ProductPage() {
  return (
    <main className="relative overflow-hidden">
      <ProductHero />

      <section className="relative px-4 pb-24 sm:px-6 md:pb-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ProductList products={shipped} />
        </div>
      </section>
    </main>
  );
}
