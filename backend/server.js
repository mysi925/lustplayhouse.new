import express from "express";
import cors from "cors";
import crypto from "crypto";
import { Client, Environment } from "square";

const app = express();

app.use(cors());
app.use(express.json());

const client = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: Environment.Sandbox,
});

app.post("/pay", async (req, res) => {
  try {
    const { amount } = req.body;

    const response = await client.paymentsApi.createPayment({
      sourceId: "cnon:card-nonce-ok",
      idempotencyKey: crypto.randomUUID(),
      amountMoney: {
        amount,
        currency: "USD",
      },
    });

    res.json(response.result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log("Server running");
});
