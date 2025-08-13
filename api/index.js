const express = require('express');
const cors = require('cors');
const path = require('path');
const products = require('./data/products.json');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
// Servir assets statiques (images produits)
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Endpoint simple pour tester que l'API marche
app.get('/', (req, res) => {
  res.send({ message: 'API mock is running' });
});

// GET /api/products
app.get('/api/products', (req, res) => {
  // Option : support query ?category=Plat&minPrice=200&maxPrice=500
  const { category, minPrice, maxPrice, q } = req.query;
  let result = products;

  if (category && category !== 'All') {
    result = result.filter(p => p.category === category);
  }
  if (minPrice) {
    result = result.filter(p => p.price >= Number(minPrice));
  }
  if (maxPrice) {
    result = result.filter(p => p.price <= Number(maxPrice));
  }
  if (q) {
    const qq = q.toLowerCase();
    result = result.filter(p => p.name.toLowerCase().includes(qq) || p.description.toLowerCase().includes(qq));
  }

  res.json(result);
});

// POST /api/checkout (simulate payment + create order)
let orders = []; // en mémoire

app.post('/api/checkout', (req, res) => {
  const { customer, items } = req.body;

  if (!customer || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ success: false, error: 'Payload invalide' });
  }

  // Vérification simple (dans la vraie vie, valider les données plus finement)
  const totalAmount = items.reduce((s, it) => {
    const prod = products.find(p => p.id === it.id);
    return s + (prod ? prod.price * it.qty : 0);
  }, 0);

  // Simuler délai
  setTimeout(() => {
    const rand = Math.random();
    if (rand < 0.8) { // 80% success
      const orderId = 'ORD' + Date.now();
      const order = {
        orderId,
        customer,
        items,
        totalAmount,
        status: 'paid',
        createdAt: new Date().toISOString()
      };
      orders.push(order);
      return res.json({ success: true, orderId, status: 'paid' });
    } else {
      // simulate payment refused
      return res.status(402).json({ success: false, error: 'Paiement refusé par la banque (simulation)' });
    }
  }, 1200); // 1.2s de latence => simulation réaliste
});

// (optionnel) GET order
app.get('/api/orders/:id', (req, res) => {
  const o = orders.find(x => x.orderId === req.params.id);
  if (!o) return res.status(404).json({ error: 'Order not found' });
  res.json(o);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API mock running on http://localhost:${PORT}`));
