import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Root from "./src/navigation/Root";
import { setNavigator } from "./src/utils/NavigationRef";
import LoginStack from "./src/navigation/LoginStack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer ref={(navigator) => setNavigator(navigator)}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Root"
      >
        <Stack.Screen
          name="LoginStack"
          component={LoginStack}
          options={({ navigation }) => ({
            title: "",
            presentation: "modal",
            headerShown: false,
          })}
        />
        <Stack.Screen name="Root" component={Root} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
