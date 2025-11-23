import React from "react";
import type { ProductCardProps } from "../model/Product";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/slice";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const cartPrdctssSelector = useSelector((state: any) => state.cart.products);
  const p = product;
  const inCart = cartPrdctssSelector.find((item: any) => item.id === p.id);

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col w-full relative">
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img
          src={p.thumbnail}
          alt={p.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {p.discountPercentage > 0 && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
            -{Math.round(p.discountPercentage)}%
          </div>
        )}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold text-gray-700 shadow-sm flex items-center gap-1">
          <span className="text-yellow-400">★</span> {p.rating}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="text-xs font-medium text-indigo-600 mb-1 uppercase tracking-wide">
          {p.brand}
        </div>
        <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-1" title={p.title}>
          {p.title}
        </h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-1">
          {p.description}
        </p>

        <div className="flex items-end justify-between mt-auto pt-4 border-t border-gray-100">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 line-through">
              ${(p.price / (1 - p.discountPercentage / 100)).toFixed(2)}
            </span>
            <span className="text-2xl font-bold text-gray-900">
              ${p.price.toFixed(2)}
            </span>
          </div>
          
          {inCart ? (
            <button
              onClick={() => dispatch(removeItem(p))}
              className="bg-red-50 text-red-600 hover:bg-red-100 px-4 py-2 rounded-lg font-semibold text-sm transition-colors flex items-center gap-2"
            >
              Remove
            </button>
          ) : (
            <button
              onClick={() => dispatch(addItem(p))}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors shadow-sm hover:shadow-md"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
