import React from "react";
import { StyleSheet,View,Text } from "react-native";
import { CATEGORIES } from "../data/dummy";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";
import DefaultText from "../components/DefaultText";

const CategoryMeals = (props) => {
  const { filteredMeals } = useSelector((state) => state.meals);

  const categoryId = props.navigation.getParam("categoryId");

  const displayMeals = filteredMeals.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  if (displayMeals.length === 0) {
    return (
      <View style={styles.fallback}>
        <DefaultText style={styles.text}>
          No Meals Found as per your Filter!😥
        </DefaultText>
      </View>
    );
  }

  return <MealList listData={displayMeals} navigation={props.navigation} />;
};

CategoryMeals.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((category) => category.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  fallback: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "italic",
    letterSpacing: 1.5
  }
});

export default CategoryMeals;
