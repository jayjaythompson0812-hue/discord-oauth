const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/callback", (req, res) => {
  res.send("Discord login worked!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Running on port " + PORT);
});
