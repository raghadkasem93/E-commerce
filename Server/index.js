const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const checkout = require('./Schema/checkout')
const userRouter = require('./Routers/users')
const categoryRouter = require('./Routers/categorys')
const cartRouter = require('./Routers/cartRoutes')
const cors = require('cors')
const productRouter= require('./Routers/products')
const uri = "mongodb+srv://raghadkasem93:147kasem147@cluster0.3txzc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// CORS configuration for all origins
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(bodyparser.json());
// Middleware
app.use(express.json()); 
//connect to db//
const connectToDB = async () => {
  try {
    //connect to db
    mongoose.set("strictQuery", false);
    mongoose.connect(uri);
    console.log("connected to db");
  } catch (error) {
    console.log("errror", error);
    process.exit();
  }
};
app.use("/api/products", productRouter);
app.use("/api/Categorys", categoryRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
connectToDB();
// Start server
app.listen(5000, (err) => {
  if (err) {
    console.error(`Failed to start server: ${err}`);
    process.exit(1);
  } else {
    console.log(`Server running on port ${5000}`);
  }
});