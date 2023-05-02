const express = require("express");
const chefs = require("./data/chefs.json");
const recipes = require("./data/recipes.json");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/chefs/:id", (req, res) => {
  const id = req.params.id;
  const singleChef = chefs.find((chef) => chef.id == id);
  // console.log(singleChef);
  res.send(singleChef)
});

app.get("/recipes", (req, res) => {
  res.send(recipes);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
