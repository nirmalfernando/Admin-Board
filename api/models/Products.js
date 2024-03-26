import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema({
  id:{
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  location:{
    type: String,
    required: true,
  },
  kitchen: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
});

export default mongoose.model("Product", ProductSchema)