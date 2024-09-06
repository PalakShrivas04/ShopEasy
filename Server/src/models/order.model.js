import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        type: mongoose.ObjectId,
        ref: "Product",
      },
    ],
    payments: {},
    buyer: {
      type: mongoose.ObjectId,
      ref: "User",
    },
    status: {
      type: String,
      default: "Not Process",
      enum: [
        "Not Process",
        "Processing",
        "Shipped",
        "Dispatched",
        "Out for Delivery",
        "Delivered",
        "Cancel",
      ],
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
