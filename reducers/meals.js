import { SET_FILTERS, TOGGLE_FAVOURITE } from "../actions/mealActions";
import { MEALS } from "../data/dummy";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favourites: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      const existingIndex = state.favourites.findIndex(
        (fav) => fav.id === action.mealId
      );
      if (existingIndex >= 0) {
        const newFav = state.favourites.filter(
          (fav) => fav.id !== action.mealId
        );
        return { ...state, favourites: newFav };
      }
      const meal = state.meals.find((m) => m.id === action.mealId);
      return { ...state, favourites: state.favourites.concat(meal) };

    case SET_FILTERS:
      const { isGluteinFree, isLactoseFree, isVegan, isVegetarian } =
        action.filters;
      const filteredMeals = state.meals.filter((meal) => {
        if (isGluteinFree && !meal.isGlutenFree) {
          return false;
        }
        if (isLactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (isVegan && !meal.isVegan) {
          return false;
        }
        if (isVegetarian && !meal.isVegetarian) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeals };
    default:
      return state;
  }
};

export default mealsReducer;
