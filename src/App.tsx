import Header from "./components/Header";
import Product from "./components/Product";
import Cart from "./components/Cart";

import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redux/productSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Plug and play your Redux logic/business actions
export default function App() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state: any) => state.products);
  useEffect(() => {
    dispatch(fetchProducts() as any);
  }, []);
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <>
                  {loading && (
                    <div className="flex justify-center items-center h-64">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
                    </div>
                  )}
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative" role="alert">
                      <strong className="font-bold">Error: </strong>
                      <span className="block sm:inline">{error}</span>
                    </div>
                  )}
                  {!loading && (
                    <Product products={products} onAddToCart={() => {}} />
                  )}
                </>
              </main>
            }
          />
          <Route
            path="/cart"
            element={
              <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <Cart />
              </main>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
