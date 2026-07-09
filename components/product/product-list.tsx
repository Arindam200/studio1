"use client";

import ProductCard, {
  type ProductCardData,
} from "@/components/product/product-card";
import { motion } from "motion/react";
import { containerVariants } from "@/lib/animations";

export default function ProductList({ products }: { products: ProductCardData[] }) {
  return (
    <motion.div
      className="mx-auto flex max-w-3xl flex-col gap-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {products.map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}
    </motion.div>
  );
}
