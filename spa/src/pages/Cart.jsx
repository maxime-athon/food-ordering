import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";

export default function Cart() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🛒 Panier</h1>

      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between border p-4 rounded"
              >
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p>{item.price} FCFA x {item.quantity}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  Retirer
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 font-bold text-lg">
            Total : {total} FCFA
          </div>
          <div className="mt-4 flex gap-4">
            <button
              onClick={clearCart}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
            >
              Vider le panier
            </button>
            <Link
              to="/checkout"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            >
              Passer au paiement
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
