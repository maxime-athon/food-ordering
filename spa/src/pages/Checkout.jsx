import { useState } from "react";
import { useCartStore } from "../store/cartStore";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    cardNumber: "",
  });

  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.address || !formData.cardNumber) {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    setPaymentSuccess(true);
    clearCart();

    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  if (cart.length === 0 && !paymentSuccess) {
    return <p className="p-6">Votre panier est vide.</p>;
  }

  if (paymentSuccess) {
    return (
      <div className="flex flex-col items-center justify-center h-96 text-center">
        <svg
          className="w-20 h-20 text-green-500 animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <h2 className="text-2xl font-bold mt-4 text-green-600">
          Paiement réussi 🎉
        </h2>
        <p className="text-gray-600 mt-2">
          Merci <span className="font-semibold">{formData.name}</span> pour votre
          commande.  
          Elle sera livrée à{" "}
          <span className="font-semibold">{formData.address}</span>.
        </p>
        <p className="text-sm text-gray-400 mt-4">
          Redirection vers l’accueil...
        </p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">💳 Paiement</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          type="text"
          name="name"
          placeholder="Nom complet"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
        <input
          type="text"
          name="address"
          placeholder="Adresse de livraison"
          value={formData.address}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
        <input
          type="text"
          name="cardNumber"
          placeholder="Numéro de carte fictif"
          value={formData.cardNumber}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
        <p className="font-bold text-lg">Total : {total} FCFA</p>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Payer
        </button>
      </form>
    </div>
  );
}
