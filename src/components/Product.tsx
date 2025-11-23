import React from "react";
import ProductCard from "./ProductCard";
import type { Product } from "../model/Product";

export type ProductType = {
  id: number;
  name: string;
  image: string;
  price: number;
};

type ProductsProps = {
  products: Product[];
  onAddToCart: (product: ProductType) => void;
};

const Products: React.FC<ProductsProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
