import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../constants/color";

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === "android" ? "white" : COLORS.primaryColor}
    ></HeaderButton>
  );
};

export default CustomHeaderButton;

const styles = StyleSheet.create({});
