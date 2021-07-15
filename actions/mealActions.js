export const TOGGLE_FAVOURITE = "TOGGLE_FAVOURITE";
export const SET_FILTERS = "SET_FILTERS";

export const toggleFavorite = (mealId) => ({
  type: TOGGLE_FAVOURITE,
  mealId,
});

export const setFilters = (filtersSettings) => ({
  type: SET_FILTERS,
  filters: filtersSettings,
});
