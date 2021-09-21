const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./authRouter");
const PORT = 9000;

const app = express();
app.use(express.json());
app.use("/auth", authRouter);

async function start() {
  try {
    await mongoose.connect(
      "mongodb+srv://Denys:root@cluster0.f0yij.mongodb.net/Social_site?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );

    app.listen(PORT, () => console.log("Server has been started"));
  } catch (e) {
    console.log(e);
  }
}

start();
