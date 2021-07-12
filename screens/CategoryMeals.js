import React from "react";
import { CATEGORIES, MEALS } from "../data/dummy";
import MealList from "../components/MealList";

const CategoryMeals = (props) => {
  const categoryId = props.navigation.getParam("categoryId");

  const displayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return <MealList listData={displayMeals} navigation={props.navigation} />;
};

CategoryMeals.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((category) => category.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMeals;
