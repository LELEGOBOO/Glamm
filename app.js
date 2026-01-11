const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");

const app = express();
app.use(cors());
app.use(express.json());

// Supabase ayarları
const SUPABASE_URL = "https://YOUR-SUPABASE-URL.supabase.co";
const SUPABASE_KEY = "YOUR_SUPABASE_ANON_KEY";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Ürünleri listele
app.get("/products", async (req, res) => {
  const { data, error } = await supabase.from("products").select("*");
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// Yeni ürün ekle
app.post("/products", async (req, res) => {
  const product = req.body;
  const { data, error } = await supabase.from("products").insert([product]);
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// Sipariş oluştur
app.post("/order/create", async (req, res) => {
  const order = req.body;
  const { data, error } = await supabase.from("orders").insert([order]);
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
const menuLinks = document.querySelectorAll('.top-menu a');
const sections = document.querySelectorAll('.category-section');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    const targetId = link.dataset.target;

    sections.forEach(section => {
      section.classList.remove('active');
    });

    const activeSection = document.getElementById(targetId);
    if (activeSection) {
      activeSection.classList.add('active');
    }
  });
});
