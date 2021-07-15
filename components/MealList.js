import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, Text, View, FlatList } from "react-native";
import MealItem from "./MealItem";

const MealList = (props) => {
  const favourites = useSelector((state) => state.meals.favourites);

  const renderMealItem = (itemData) => {
    const isFavorite = favourites.some((fav) => fav.id === itemData.item.id);
    return (
      <MealItem
        {...itemData.item}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: itemData.item.id,
              mealTitle: itemData.item.title,
              isFavorite,
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
        contentContainerStyle={{ padding: 10 }}
      />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
