import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Inbox from "../screens/Inbox/Inbox";

const Stack = createNativeStackNavigator();

const InboxStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Inbox"
        component={Inbox}
        options={({ navigation }) => ({
          title: "Inbox",
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

export default InboxStack;
