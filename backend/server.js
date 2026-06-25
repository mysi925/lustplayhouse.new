const express = require("express");
const cors = require("cors");
const crypto = require("crypto");
const { Client, Environment } = require("square");

const app = express();

app.use(cors());
app.use(express.json());

const client = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: Environment.Sandbox,
});

app.get("/", (req, res) => {
  res.send("Square backend is running");
});

app.post("/create-payment", async (req, res) => {
  try {
    const { sourceId, amount } = req.body;

    const response = await client.paymentsApi.createPayment({
      sourceId,
      idempotencyKey: crypto.randomUUID(),
      amountMoney: {
        amount: BigInt(amount),
        currency: "USD",
      },
    });

    res.json(response.result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Square backend running");
});
