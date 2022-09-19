import icons from 'url:../../img/icons.svg';
import { Fraction } from 'fractional';
import view from './View';
console.log(Fraction);
class recipeView extends view {
  _partentElement = document.querySelector('.recipe');
  _errorMessage = 'No recipes Found For Your Query ! Please again';

  _sucessMessage;

  addHandlerRender(handler) {
    ['load', 'hashchange'].forEach(el => window.addEventListener(el, handler));
  }
  npm;

  addHandlerServing(handler) {
    this._partentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--update--servings');
      if (!btn) return;
      console.log(btn);
      const updateTo = +btn.dataset.updateTo;
      if (updateTo > 0) handler(updateTo);
    });
  }
  addHandlerbookmarks(handler) {
    this._partentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--bookmarks');
      if (!btn) return;
      handler();
    });
  }
  _generateMarkup() {
    return `<figure class="recipe__fig">
      <img src="${this._data.image}" alt="${
      this._data.image
    }" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${this._data.title}</span>
      </h1>
    </figure>
    
    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${
          this._data.cookingTime
        }</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${
          this._data.servings
        }</span>
        <span class="recipe__info-text">servings</span>
    
        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--update--servings" data-update-to =' ${
            this._data.servings - 1
          }'>
            <svg>
              <use href="${icons}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--update--servings" data-update-to= '${
            this._data.servings + 1
          }'>
            <svg>
              <use href="${icons}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>
    
      <div class="recipe__user-generated ${this._data.key ? '' : 'hidden'}">
      
            <svg>
              <use href="${icons}#icon-user"></use>
            </svg>
      
      </div>
      <button class="btn--round btn--bookmarks">
        <svg class="">
          <use href="${icons}#icon-bookmark${
      this._data.bookMarked ? '-fill' : ''
    }"></use>
        </svg>
      </button>
    </div>
    
    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">

      ${this._data.ingredients.map(this._generateMarkupEl).join('')}
        
          </div>
        </li>
      </ul>
    </div>
    
    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">T${
          this._data.publisher
        }</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${this._data.sourceUrl}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </a>
  
    
 
    </div>
    
    `;
  }
  _generateMarkupEl(el) {
    return `<li class="recipe__ingredient">
  <svg class="recipe__icon">
    <use href="${icons}#icon-check"></use>
  </svg>
  <div class="recipe__quantity">${
    el.quantity ? new Fraction(el.quantity).toString() : ``
  }</div>
  <div class="recipe__description">
    <span class="recipe__unit">${el.unit}</span>
    ${el.description}
  </div>
</li>`;
  }
}
const experiment = new recipeView();
console.log(recipeView);
export default new recipeView();