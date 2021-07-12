import React from "react";
import { Platform, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMeals";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import COLORS from "../constants/color";
import { Ionicons } from "@expo/vector-icons";

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerTitleStyle: {
        fontFamily: "open-sans-bold",
      },
      headerBackTitleStyle: {
        fontFamily: "open-sans",
      },
      headerTitle: "Recipe App",
      headerStyle: {
        backgroundColor: Platform.OS === "ios" ? "" : COLORS.primaryColor,
      },
      headerTintColor: Platform.OS === "ios" ? COLORS.primaryColor : "white",
    },
  }
);

const FavouritesScreenStack = createStackNavigator(
  {
    Favourites: FavouritesScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerTitle: "Recipe App",
      headerStyle: {
        backgroundColor: Platform.OS === "ios" ? "" : COLORS.primaryColor,
      },
      headerTintColor: Platform.OS === "ios" ? COLORS.primaryColor : "white",
    },
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: COLORS.primaryColor,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}>Meals</Text>
        ) : (
          "Meals"
        ),
    },
  },
  Favourites: {
    screen: FavouritesScreenStack,
    navigationOptions: {
      tabBarLabel: "Favourites!",
      tabBarIcon: (tabInfo) => (
        <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
      ),
      tabBarColor: COLORS.accent,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}>Favourites</Text>
        ) : (
          "Favourites"
        ),
    },
  },
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: "white",
        shifting: true,

        // barStyle: { backgroundColor: COLORS.primaryColor },
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: COLORS.accent,
          labelStyle: {
            fontFamily: "open-sans-bold",
          },
        },
      });

const FiltersNavStack = createStackNavigator(
  {
    Filters: FiltersScreen,
  },
  {
    defaultNavigationOptions: {
      headerTitle: "Recipe App",
      headerStyle: {
        backgroundColor: Platform.OS === "ios" ? "" : COLORS.primaryColor,
      },
      headerTintColor: Platform.OS === "ios" ? COLORS.primaryColor : "white",
    },
    // navigationOptions: {
    //   drawerLabel: "Filters"
    // }
  }
);

const MainNavigator = createDrawerNavigator(
  {
    MealsFav: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: "Meals",
      },
    },
    Filters: FiltersNavStack,
  },
  {
    contentOptions: {
      activeTintColor: COLORS.accent,
      labelStyle: {
        fontFamily: "open-sans-bold",
      },
    },
    // hideStatusBar: true
    // drawerBackgroundColor: "#aaa"
  }
);

export default createAppContainer(MainNavigator);
