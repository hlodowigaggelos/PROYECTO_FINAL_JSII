import { ingredientList } from "./ingredientList.js";
import { recipeDetailsMarkup } from "./recipe.js";
import { renderSpinner } from "./spinner.js";

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

async function showRecipe(id) {
  const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)

  const { data } = await response.json()

  const { recipe } = data

  return (recipe)
}

renderSpinner(recipeContainer)

const loadRecipe = () => {
  const id = location.hash.slice(1);
  showRecipe(id)
    .then((recipe) => {
      // Limpia el contenedor
      recipeContainer.innerHTML = ''
      // Colocamos el HTML
      recipeContainer.insertAdjacentHTML('afterbegin', recipeDetailsMarkup(recipe))
      recipeContainer.insertAdjacentHTML('afterbegin', ingredientList(recipe))
    })
    .catch((er) => {
      console.error('URL mal', er)
    })
}

window.addEventListener('hashchange', loadRecipe)


