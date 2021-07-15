import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import HeaderButton from "../components/CustomHeaderButton";
import MealList from "../components/MealList";
import DefaultText from "../components/DefaultText";

const FavouritesScreen = (props) => {
  const { favourites } = useSelector((state) => state.meals);

  if (favourites.length === 0 || !favourites) {
    return (
      <View style={styles.content}>
        <DefaultText style={styles.text}>No Favourite Meals Found! Start Adding Some!😋</DefaultText>
      </View>
    );
  }

  return <MealList listData={favourites} navigation={props.navigation} />;
};

FavouritesScreen.navigationOptions = (navData) => ({
  headerTitle: "Your Favourites",
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Menu"
        iconName="ios-menu"
        onPress={() => {
          navData.navigation.toggleDrawer();
        }}
      />
    </HeaderButtons>
  ),
});

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    fontStyle: "italic",
    fontWeight: "bold"
  }
});

export default FavouritesScreen;
