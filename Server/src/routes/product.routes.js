import express from "express";
import {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productFiltersController,
  productListController,
  productPhotoController,
  relatedProductController,
  searchProductController,
  updateProductController,
} from "../controllers/product.controller.js";
import formidable from "express-formidable";
import { isAdmin, requireSignIn } from "../middlewares/user.middleware.js";
import Stripe from "stripe";

const key =
  "sk_test_51PqeVc2LqkxsWBYX1Mha5qV6ditsT4RWfRjzp3orOFI4aCKf7RvLAr3GbFq8RC8bxsgpshOzhTL3GFqDByzvNA2500RnvxPzQ1";

const router = express.Router();
const stripe = new Stripe(key);

//routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

// routes
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

// get products
router.get("/get-product", getProductController);

// single product
router.get("/get-product/:slug", getSingleProductController);

// get photo
router.get("/product-photo/:pid", productPhotoController);

// delete product
router.delete("/delete-product/:pid", deleteProductController);

//filter product
router.post("/product-filters", productFiltersController);

//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

//search product
router.get("/search/:keyword", searchProductController);

//similar product
router.get("/related-product/:pid/:cid", relatedProductController);

//category wise product
router.get("/product-category/:slug", productCategoryController);

router.post("/payments", async (req, res) => {
  try {
    const { products } = req.body;

    if (!products || products.length === 0) {
      return res.status(400).json({ error: "No products provided" });
    }

    // Map products to Stripe line items
    const lineItems = products.map((product) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: product.name,
          images: [product.image],
        },
        unit_amount: Math.round(product.price * 100), // Convert price to cents
      },
      quantity: product.quantity,
    }));

    // Create a Stripe session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:5173/success", // Ensure this matches your frontend URL
      cancel_url: "http://localhost:5173/cancel", // Ensure this matches your frontend URL
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("Stripe session creation error:", error.message);
    res.status(500).json({ error: "Failed to create Stripe session" });
  }
});

export default router;
