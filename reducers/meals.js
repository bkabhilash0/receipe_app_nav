import { MEALS } from "../data/dummy";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favourites: [],
};

const mealsReducer = (state = initialState, action) => {
  return state;
};

export default mealsReducer;