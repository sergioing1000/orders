const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3010;

// Middleware
app.use(
  cors({
    origin: "http://localhost:3010",
  }),
);

app.use(express.json()); // To parse JSON body

// POST endpoint
app.post("/api/orders", (req, res) => {
  const order = req.body;

  console.log("Order received:", order);

  res.status(201).json({
    message: "Order successfully received",
    data: order,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Orders service running on http://localhost:${PORT}`);
});
