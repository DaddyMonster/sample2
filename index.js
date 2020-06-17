const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res, next) => {
  res.send("HELLO HARAM");
});

app.listen(PORT, () => console.log("THE SERVER IS RUNNING ON PORT" + PORT));
