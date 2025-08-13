
# 🍔 Food Ordering SPA

Une application **Single Page Application** (SPA) développée en **React** permettant de consulter un catalogue de plats, de gérer un panier en temps réel, et de simuler un paiement en ligne.

## 📌 Fonctionnalités

- **Catalogue dynamique** : affichage des plats récupérés depuis une API Node.js.
- **Panier interactif** : ajout, suppression, calcul automatique du total.
- **Page de paiement simulé** : formulaire de validation de commande.
- **Design responsive** avec **Tailwind CSS**.
- **Navigation fluide** sans rechargement grâce à React Router.

---

## 🛠️ Technologies utilisées

- **Frontend** : [React](https://react.dev/), [React Router](https://reactrouter.com/), [Zustand](https://zustand-demo.pmnd.rs/) pour la gestion d’état.
- **Style** : [Tailwind CSS](https://tailwindcss.com/).
- **Backend mock** : API Node.js avec Express (voir dossier `../api`).

---

## 📂 Structure du projet

```

spa/
│── public/                # Fichiers statiques
│── src/
│   ├── components/         # Composants réutilisables
│   │   └── ProductCard.jsx
│   ├── pages/              # Pages de l'application
│   │   ├── Home.jsx
│   │   ├── Cart.jsx
│   │   └── Checkout.jsx
│   ├── store/              # Store Zustand (panier)
│   │   └── cartStore.js
│   ├── App.jsx             # Routes et navigation
│   ├── main.jsx            # Point d’entrée React
│   └── index.css           # Styles globaux
│── package.json
└── vite.config.js

````

---

## 🚀 Installation et démarrage

### 1. Cloner le projet
```bash
git clone https://github.com/mon-compte/food-ordering.git
cd food-ordering/spa
````

### 2. Installer les dépendances

```bash
npm install
```

### 3. Lancer le backend mock

Dans un autre terminal :

```bash
cd ../api
npm run dev
```

L’API est disponible sur : `http://localhost:4000/api/products`

### 4. Lancer l’application SPA

```bash
npm run dev
```

Ouvrir [http://localhost:5173](http://localhost:5173)

---

## 📷 Aperçu

<div style="display: flex; flex-wrap: wrap; gap: 10px;">
  <img src="/spa/public/images/image1.jpg" width="150"/>
  <img src="/spa/public/images/image2.jpg.png" width="150"/>
  <img src="/spa/public/images/image3.jpg" width="150"/>
  <img src="/spa/public/images/images4.jpg" width="150"/>
</div>

---

## 🔍 Notes pédagogiques

* Ce projet illustre l’architecture **SPA** : une seule page HTML, navigation gérée côté client, appels API pour charger les données.
* **Avantage SPA** : fluidité, rapidité, pas de rechargement complet.
* **Inconvénient** : nécessite JavaScript activé, SEO moins performant sans rendu côté serveur.




