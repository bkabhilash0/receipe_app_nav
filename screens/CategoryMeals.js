import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy";
import MealItem from "../components/MealItem";

const CategoryMeals = (props) => {
  const renderMealItem = (itemData) => (
    <MealItem
      {...itemData.item}
      onSelectMeal={() => {
        props.navigation.navigate({
          routeName: "MealDetail",
          params: {
            mealId: itemData.item.id,
          },
        });
      }}
    />
  );

  const categoryId = props.navigation.getParam("categoryId");

  const displayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayMeals}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
        contentContainerStyle={{ padding: 10 }}
      />
    </View>
  );
};

CategoryMeals.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((category) => category.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMeals;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
