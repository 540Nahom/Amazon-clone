const functions = require("firebase-functions");
require("dotenv").config();
const express = require("express");
const cors = require("cors");


const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


// - App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  if (total > 0) {
    console.log("Payment Request Recived for this amount >>>", total);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });

    //OK - Created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } else {
    response.status(200).json({
      mesage: "can not prosses payment",
    });
  }
});

// - Listen command
exports.app = functions.https.onRequest(app);

// http://127.0.0.1:5001/clone-a1923/us-central1/app
