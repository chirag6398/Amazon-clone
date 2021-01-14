const functions = require("firebase-functions");
const cors = require("cors");
const express = require("express");
const { sekret_key } = require("./config/stripeSecretKey");
const stripe = require("stripe")(sekret_key);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("helo kalia");
});
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("total amt from backend", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

// http://localhost:5001/challenge-57e90/us-central1/api
