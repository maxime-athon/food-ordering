import { create } from "zustand";// permet de creer un espace de memoire pour stocker les donners

export const useCartStore = create((set) => ({ //  sera utiliser par les composant pour acceder au panier
  cart: [], //initialisation du panier 

  addToCart: (product) => //fonction qui prend un produit en parametre et l'ajoute 
    set((state) => {   //set permet de modifier l'etat du panier actu l'etat c'est state
      const existing = state.cart.find((item) => item.id === product.id);// verifi si le produit est deja dans le panier
      if (existing) {
        return {
          cart: state.cart.map((item) => // parcour tous les produit grace a map
            item.id === product.id //si l'id du produit correspond alors
              ? { ...item, quantity: item.quantity + 1 } //on creer une copie  avec quantite + 1
              : item //ou on le garde tel qu'il est
          ),
        };
      } //fin du if
      return { cart: [...state.cart, { ...product, quantity: 1 }] }; //permet d'ajouter juste un nouveau produit s'il n'es pas dans le panier
    }),

  removeFromCart: (id) => //fonction pour retirer un produit du panier
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),//permet de suprimer un produit en gardant tous les produit sauf id du produit
    })),

  clearCart: () => set({ cart: [] }), //vider completement tout le panier 
}));
