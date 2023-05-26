import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Explore from "../screens/Explore/Explore";

const Stack = createNativeStackNavigator();

const ExploreStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Explore"
        component={Explore}
        options={({ navigation }) => ({
          title: "Explore",
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

export default ExploreStack;
