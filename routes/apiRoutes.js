const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
var admin = require("firebase-admin");

router.post("/product", async (req, res) => {
  console.log(req.body)
  const product = new Product({
    name: req.body.productName,
    price: req.body.price,
    artistName: req.body.artistName,
    imageURL: req.body.imgURL,
    uid: req.body.uid,
  });
  
  try {
    const result = await product.save();
    res.json(result);
  } catch(err) {
    res.status(400).json({error: err.message});
  }
});

router.get("/products/all", async (req, res) => {
  const products = await Product.find(); 
  res.json(products);
});

/*
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id); 
    res.json(book);
  } catch(err) {
    res.status(400).json({error: err.message});
  } 
});

router.post("/", async (req, res) => {
  const book = new Book({
    name: req.body.name,
    author: req.body.author,
  });
  
  try {
    const result = await alien.save();
    res.json(result);
  } catch(err) {
    res.status(400).json({error: err.message});
  }
});*/


/*router.patch("/:id", async (req, res) => {
  try {
    const alien = await Alien.findById(req.params.id); 
    alien.sub = req.body.sub;
    const a1 = await alien.save();
    res.json(a1);
  } catch(err) {
    res.send("Error " + err);
  } 
});

router.delete("/:id", async (req, res) => {
  try {
    const alien = await Alien.findById(req.params.id); 
    const a1 = await alien.remove();
    res.json(a1);
  } catch(err) {
    res.send("Error " + err);
  } 
});*/

module.exports = router;
