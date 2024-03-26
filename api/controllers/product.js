import Product from "../models/Products.js";

export const createProduct = async (req, res, next) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    next(err);
  }
};
export const updateProduct = async (req, res, next) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    next(err);
  }
};
export const deleteProduct = async (req, res, next) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getProduct = async (req, res, next) => {
  try {
    const Product = await Product.findById(req.params.id);
    res.status(200).json(Product);
  } catch (err) {
    next(err);
  }
};
export const getProducts = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const Products = await Product.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(req.query.limit);
    res.status(200).json(Products);
  } catch (err) {
    next(err);
  }
};
