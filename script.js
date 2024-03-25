"use-strict";

let recipes = [];

const addBtn = document.querySelector("#addBtn");
const inputName = document.querySelector("#name");
const inputDesc = document.querySelector("#description");
const inputInstructions = document.querySelector("#instructions");
const inputIngredients = document.querySelector("#ingredients");
let recipeContainerEl = document.querySelector(".recipe-container");

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
  recipes.push(newRecipe);
  localStorage.setItem("recipe", JSON.stringify(recipes));
  displayRecipe(recipes);
  inputDesc.value = "";
  inputName.value = "";
  inputIngredients.value = "";
  inputInstructions.value = "";
});

recipeContainerEl.addEventListener("click", (event) => {
  if (event.target.matches(".delete")) {
    setTimeout(() => {
      let recipeName = event.target
        .closest(".recipe-wrapper")
        .querySelector("h1").textContent;
      removeRecipeFromLocalStorage(recipeName);
    }, 500);
  }
});

const displayRecipe = (recipe) => {
  let recipeList = "";
  recipeContainerEl.innerHTML = "";
  for (let i = 0; i < recipe.length; i++) {
    recipeList += `<div id="element" class="recipe-wrapper">
                  <h1>${recipe[i].name}</h1>
                  <p>${recipe[i].desc}</p>
                  <div class="buttons">
                  <button id="preview">Preview</button>
                  <button class="delete">Delete</button>
                  </div>
                  
                  </div>`;
  }
  recipeContainerEl = document.querySelector(".recipe-container");

  if (recipeContainerEl) {
    recipeContainerEl.insertAdjacentHTML("beforeend", recipeList);
  }
};

const removeRecipeFromLocalStorage = (recipeName) => {
  let recipeIndex = recipes.findIndex((recipes) => recipes.name === recipeName);
  if (recipeIndex > -1) {
    recipes.splice(recipeIndex, 1);
    localStorage.setItem("recipe", JSON.stringify(recipes));
    displayRecipe(recipes);
  }
};

const recipeFromLocalStorage = JSON.parse(localStorage.getItem("recipe"));
if (recipeFromLocalStorage) {
  recipes = recipeFromLocalStorage;
  displayRecipe(recipes);
}
