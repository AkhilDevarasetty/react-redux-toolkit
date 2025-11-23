import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const cartSelector = useSelector((state: any) => state.cart.products);
  return (
    <Link to='/cart' className="relative p-2 text-gray-600 hover:text-indigo-600 transition-colors">
      <FaShoppingCart size={24} />
      {cartSelector.length > 0 && (
        <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-white">
          {cartSelector.length}
        </span>
      )}
    </Link>
  );
};

export default ShoppingCart;
