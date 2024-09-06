import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";






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

//rest api
app.get("/", (req, res) => {
  res.send({
    message: "Welcome to Eazy Buy",
  });
});

//routes import
import userRoutes from "./routes/user.routes.js";
import categoryRoutes from "./routes/category.routes.js";
import productRoutes from "./routes/product.routes.js";


//routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);



export default app;
