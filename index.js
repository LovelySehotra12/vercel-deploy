const express = require("express");
const app = express();

app.get("/", (req, res) => res.json({ message: "Express on Vercel" }));

app.listen(3000, () =>
  console.log("Server ready on port http://localhost:3000.")
);

module.exports = app;
