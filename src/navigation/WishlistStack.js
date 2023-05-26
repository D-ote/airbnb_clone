import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Wishlist from "../screens/Wishlist/Wishlist";

const Stack = createNativeStackNavigator();

const WishlistStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Wishlist"
        component={Wishlist}
        options={({ navigation }) => ({
          title: "Wishlist",
          headerStyle: {
            shadowColor: "transparent",
            backgroundColor: "#ffffff",
          },
          headerBackTitleStyle: {
            color: "green",
          },
          headerShadowVisible: false,
        })}
      />
    </Stack.Navigator>
  );
};

export default WishlistStack;
