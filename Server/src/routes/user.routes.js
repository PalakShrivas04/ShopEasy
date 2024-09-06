import express from "express";
import {
  forgotPasswordController,
  getAllOrdersController,
  getOrdersController,
  loginController,
  orderStatusController,
  registerController,
  testController,
  updateProfileController,
} from "../controllers/user.controller.js";
import { isAdmin, requireSignIn } from "../middlewares/user.middleware.js";

//router object
const router = express.Router();

//routing

// Register Route - POST /api/v1/user/register
router.post("/register", registerController);

//LOGIN ROUTE || POST
router.post("/login", loginController);

//FORGOT PASSWORD || POST
router.post("/forgot-password", forgotPasswordController);

//protected test
router.post("/test", requireSignIn, isAdmin, testController);

//PROTECTED ROUTE AUTH
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//PROTECTED ROUTE ADMIN
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//UPDATE PROFILE
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

//order status update
router.put("/order-status/:orderId", requireSignIn, isAdmin, orderStatusController);

export default router;
