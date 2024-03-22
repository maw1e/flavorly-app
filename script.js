"use-strict";

let recipe = [];

const addBtn = document.querySelector("#addBtn");
const inputName = document.querySelector("#name");
const inputDesc = document.querySelector("#description");
const inputInstructions = document.querySelector("#instructions");
const inputIngredients = document.querySelector("#ingredients");

// localStorage.clear();
addBtn.addEventListener("click", () => {
  let newRecipe = {
    name: "",
    desc: "",
    instructions: "",
    ingredients: "",
  };

  newRecipe.name = inputName.value;
  newRecipe.desc = inputDesc.value;
  newRecipe.instructions = inputInstructions.value;
  newRecipe.ingredients = inputIngredients.value;
  recipe.push(newRecipe);
  localStorage.setItem("recipe", JSON.stringify(recipe));

  inputDesc.value = "";
  inputName.value = "";
  inputIngredients.value = "";
});

const displayRecipe = () => {};
