import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Trips from "../screens/Trips/Trips";

const Stack = createNativeStackNavigator();

const TripStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Trips"
        component={Trips}
        options={({ navigation }) => ({
          title: "Trips",
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

export default TripStack;
