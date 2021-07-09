import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMeals";
import MealDetailScreen from "../screens/MealDetailScreen";
import COLORS from "../constants/color";

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
      headerTitle: "Sample Page",
      headerStyle: {
        backgroundColor: Platform.OS === "ios" ? "" : COLORS.primaryColor,
      },
      headerTintColor: Platform.OS === "ios" ? COLORS.primaryColor : "white",
    },
    
  }
);

export default createAppContainer(MealsNavigator);
