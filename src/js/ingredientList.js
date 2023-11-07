import icons from "../img/icons.svg"

export const ingredientList = ({ ingredients }) => {
    return 
        <div class="recipe__ingredients">
            <h2 class="heading--2">Recipe ingredients</h2>

            // Opción 1: todo junto
            <ul class="recipe__ingredient-list">
                ${ingredients.map(({ quantity, description, unit }) =>
                <li class="recipe__ingredient">
                    <svg class="recipe__icon">
                    <use href="${icons}#icon-check"></use>
                    </svg>
                    <div class="recipe__quantity">${quantity || ''}</div>
                    <div class="recipe__description">
                        <span class="recipe__unit">${unit}</span>
                        ${description}
                    </div>
                </li>).join('')}
            </ul>

            // Opción 2: métodos separados
            <ul class="recipe__ingredient-list">
                ${ingredients.map((ingredient)=>ingredientHTML(ingredient)).join('')}
            </ul>
        </div>
            
}

// Método para la opción 2
function ingredientHTML({quantity, unit, description}){
    return <li class="recipe__ingredient">
        <svg class="recipe__icon">
        <use href="${icons}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${quantity || ''}</div>
        <div class="recipe__description">
            <span class="recipe__unit">${unit}</span>
            ${description}
        </div>
    </li>
}
