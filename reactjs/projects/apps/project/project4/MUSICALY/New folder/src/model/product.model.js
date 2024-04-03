import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { type } from "os";
const productSchema = new mongoose.Schema(
  {

    price_inr: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
      lowercase: true,
    },
    color: {
      type: String,
    },
    type: {
      type: String,
    },
    brand: {
      type: String,
    },
    rating: {
      type: Number,
    },
    about_item: {
      type: String,
    },
    
    wireless: {
      type:String,
      
    },
    connectivity: {
      type: String,
    },
    battery_life: {
      type: String,
    },
    image_url: {
      type: String,
    },
    
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
  },
  { timestamps: true }
);

const list = mongoose.model("list", productSchema);
export default list
