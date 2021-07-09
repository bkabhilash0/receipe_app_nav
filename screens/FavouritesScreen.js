import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FavouritesScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>The Favourites Screen</Text>
    </View>
  );
};

export default FavouritesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
