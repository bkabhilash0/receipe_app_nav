import { createStore, combineReducers } from "redux";
import mealsReducer from "../reducers/meals";

const reducers = combineReducers({
  meals: mealsReducer,
});

const store = createStore(reducers);

export default store;
