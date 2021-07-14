import React from "react";
import { CATEGORIES } from "../data/dummy";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";

const CategoryMeals = (props) => {
  const { filteredMeals } = useSelector((state) => state.meals);

  const categoryId = props.navigation.getParam("categoryId");

  const displayMeals = filteredMeals.filter(
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
