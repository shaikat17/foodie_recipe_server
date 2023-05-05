const express = require("express");
const chefs = require("./data/chefs.json");
const recipes = require("./data/recipes.json");
const app = express();
const path = require("path");
const port = 3000;
const cors = require("cors");

app.use(cors());

app.set("views", __dirname + "/views");
app.engine("html", require("ejs").renderFile);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.html");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/chefs/:id", (req, res) => {
  const id = req.params.id;
  const singleChef = chefs.find((chef) => chef.id == id);
  // console.log(singleChef);
  res.send(singleChef);
});

app.get("/recipes", (req, res) => {
  res.send(recipes);
});

app.get("/recipes/:id", (req, res) => {
  const id = req.params.id;
  const chefRecipes = [];
  let singleChef = chefs.find((chef) => chef.id == id).recipes;

  // console.log(singleChef);
  for (let id of singleChef) {
    const singleRecipe = recipes.find((recipe) => recipe.id == id);
    // console.log(singleRecipe)
    chefRecipes.push(singleRecipe);
  }

  res.send(chefRecipes);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
