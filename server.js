
// compliment-chain MVP server
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/compliment", (req, res) => {
  const compliments = [
    "You light up the room!",
    "You're doing an amazing job.",
    "Your smile is contagious.",
    "You're more helpful than you realize.",
    "You're a true friend."
  ];
  const random = compliments[Math.floor(Math.random() * compliments.length)];
  res.json({ compliment: random });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
