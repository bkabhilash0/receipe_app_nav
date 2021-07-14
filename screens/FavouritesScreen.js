import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";
import HeaderButton from "../components/CustomHeaderButton";
import MealList from "../components/MealList";

const FavouritesScreen = (props) => {
  const { favourites } = useSelector((state) => state.meals);

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

export default FavouritesScreen;
