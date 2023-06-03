import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Root from "./src/navigation/Root";
import { setNavigator } from "./src/utils/NavigationRef";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer ref={(navigator) => setNavigator(navigator)}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="root"
      >
        <Stack.Screen name="root" component={Root} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
