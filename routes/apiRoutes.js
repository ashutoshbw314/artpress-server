const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const Order = require("../models/Order");

/******** The following codes handle product related requests *********/
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
  try {
  const products = await Product.find(); 
  res.json(products);
  } catch(error) {
    res.status(400).json({error: err.message});
  }
});

router.get("/products/:id", async (req, res) => {
  try {
  const product = await Product.findById(req.params.id); 
  res.json(product);
  } catch(error) {
    res.status(400).json({error: err.message});
  }
});

/******** The following codes handle order related requests *********/
router.post("/orders", async (req, res) => {
  console.log(req.body)
  const order = new Order({
    name: req.body.name,
    price: req.body.price,
    artistName: req.body.artistName,
    imageURL: req.body.imageURL,
    uid: req.body.uid,
    date: new Date(req.body.date),
    email: req.body.email
  });
  
  try {
    const result = await order.save();
    res.json(result);
  } catch(err) {
    console.log(err.message)
    res.status(400).json({error: err.message});
  }
});

router.get("/orders/:uid", async (req, res) => {
  try {
    const orders = await Order.find({uid: req.params.uid}); 
    console.log('uid is ', req.params.uid)
    res.json(orders);
  } catch(error) {
    res.status(400).json({error: err.message});
  }
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
