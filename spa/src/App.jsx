import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/cart";
import Checkout from "./pages/Checkout";
import { useCartStore } from "./store/cartStore";

function Navbar() {
  const cartCount = useCartStore((state) =>
    state.cart.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between">
      <Link to="/" className="font-bold">🍔 Food Ordering</Link>
      <div className="flex gap-4">
        <Link to="/cart">🛒 Panier ({cartCount})</Link>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}
