import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import listingRouter from "./routes/listing.route.js";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();
app.use(express.json()); // parse req.body
app.use(cookieParser());
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    // console.log(process.env.MONGO_URL);
    console.log("Conneted to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("Server at 3000");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);

// error middle-ware handling
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error from dev";

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
