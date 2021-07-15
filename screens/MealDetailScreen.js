import React from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toggleFavorite } from "../actions/mealActions";
import HeaderButton from "../components/CustomHeaderButton";
import DefaultText from "../components/DefaultText";

const ListItem = (props) => (
  <View style={styles.listItem}>
    <DefaultText>{props.children}</DefaultText>
  </View>
);

const MealDetailScreen = (props) => {
  const dispatch = useDispatch();

  const { meals } = useSelector((state) => state.meals);
  const mealId = props.navigation.getParam("mealId");

  const selectedMeal = meals.find((meal) => meal.id === mealId);
  const isFavorite = useSelector((state) =>
    state.meals.favourites.some((fav) => fav.id === mealId)
  );

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    props.navigation.setParams({
      toggleFav: toggleFavoriteHandler,
    });
  }, [toggleFavorite]);

  useEffect(() => {
    props.navigation.setParams({
      isFavorite,
    });
  }, [isFavorite]);

  return (
    <ScrollView contentContainerStyle={{ padding: 10 }}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </ScrollView>
  );
};

// There are 2 ways to use the data inside the nav Options:
// Use the useEffect and set the params in the nav object.
// useEffect isn't recommended coz it takes time to update the UI.
// Pass the require info during the navigation along with the params.

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const favToggleHandler = navigationData.navigation.getParam("toggleFav");
  const isFavorite = navigationData.navigation.getParam("isFavorite");
  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favourite"
          iconName={isFavorite ? "ios-star" : "ios-star-outline"}
          onPress={favToggleHandler}
        />
      </HeaderButtons>
    ),
  };
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    zIndex: 1,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
    backgroundColor: "#ccc",
    borderRadius: 10,
    borderTopEndRadius: 0,
    borderTopStartRadius: 0,
    position: "relative",
    top: -7,
    zIndex: 0,
    paddingTop: 22,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});
