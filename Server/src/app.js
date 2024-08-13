import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import authRoute from "./routes/authRoutes.js";

// rest object
const app = express();

// Configure dotenv
dotenv.config();

//middleware
app.use(
  cors({
    credentials: true,
    origin: process.env.CORS_ORIGIN,
  })
);
app.use(express.json()); // we can use json in req and res
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoute);

//rest api
app.get("/", (req, res) => {
  res.send({
    message: "Welcome to Ecommerce",
  });
});

// import userRoutes from "./routes/user.routes.js";
// import categoryRoutes from "./routes/category.routes.js";
// import productRoutes from "./routes/product.routes.js";

// app.use("/api/v1/category", categoryRoutes);
// app.use("/api/v1/product", productRoutes);

export default app;
