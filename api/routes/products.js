import express from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../controllers/product.js";
import Product from "../models/Products.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createProduct);

//UPDATE
router.put("/:id", verifyAdmin, updateProduct);

//DELETE
router.delete("/:id", verifyAdmin, deleteProduct);

//GET
router.get("/:id", getProduct);

//GET ALL
router.get("/", getProducts);

export default router;