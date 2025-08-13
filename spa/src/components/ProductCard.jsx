import { useCartStore } from "../store/cartStore";

export default function ProductCard({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="border rounded-lg shadow p-4">
      <img
        src={`http://localhost:4000${product.img}`}
        alt={product.name}
        className="w-full h-40 object-cover rounded"
      />
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-blue-600 font-bold mt-2">{product.price} FCFA</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-3 w-full"
      >
        Ajouter au panier
      </button>
    </div>
  );
}
