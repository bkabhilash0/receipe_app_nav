import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, Switch, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch } from "react-redux";
import { setFilters } from "../actions/mealActions";
import HeaderButton from "../components/CustomHeaderButton";
import COLORS from "../constants/color";

const FilterSwitch = (props) => (
  <View style={styles.filterContainer}>
    <Text>{props.label}</Text>
    <Switch
      value={props.state}
      onValueChange={props.onChange}
      trackColor={{ true: COLORS.primaryColor, false: "#ccc" }}
      thumbColor={Platform.OS === "android" ? COLORS.primaryColor : ""}
    />
  </View>
);

const FiltersScreen = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();

  const [isGluteinFree, setIsGluteinFree] = useState(false);
  const [isLactoseFree, setisLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      isGluteinFree,
      isLactoseFree,
      isVegan,
      isVegetarian,
    };
    dispatch(setFilters(appliedFilters));
  }, [isGluteinFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

  useEffect(() => {
    navigation.setParams({
      save: saveFilters,
    });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Availabe Filters/Restrictions</Text>
      <FilterSwitch
        label="Gluetin-Free"
        state={isGluteinFree}
        onChange={() => setIsGluteinFree((prev) => !prev)}
      />
      <FilterSwitch
        label="Lactose-Free"
        state={isLactoseFree}
        onChange={() => setisLactoseFree((prev) => !prev)}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={() => setIsVegan((prev) => !prev)}
      />
      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        onChange={() => setIsVegetarian((prev) => !prev)}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = (navData) => ({
  headerTitle: "Filter Meals",
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
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Save"
        iconName="ios-save"
        onPress={navData.navigation.getParam("save")}
      />
    </HeaderButtons>
  ),
});

export default FiltersScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
});
