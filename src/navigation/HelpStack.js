import { Pressable, StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import PoliciesStack from "./PoliciesStack";
import SafetyTipsStack from "./SafetyTipsStack";
import GuestStack from "./GuestStack";
import HelpHome from "../screens/Profile/HelpHome";

const Stack = createNativeStackNavigator();

const HelpStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="HelpHome">
      <Stack.Screen
        name="HelpHome"
        component={HelpHome}
        options={({ navigation }) => ({
          title: "",
          headerStyle: {
            shadowColor: "transparent",
            backgroundColor: "#f8f8f8",
          },
          headerBackTitleStyle: {
            color: "green",
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <Ionicons name={"md-chevron-back-sharp"} size={22} />
            </Pressable>
          ),
        })}
      />
      <Stack.Screen
        name="GuestStack"
        component={GuestStack}
        options={({ navigation }) => ({
          title: "",
          headerStyle: {
            shadowColor: "transparent",
            backgroundColor: "#f8f8f8",
          },
          headerBackTitleStyle: {
            color: "green",
          },
          headerShadowVisible: false,
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="PoliciesStack"
        component={PoliciesStack}
        options={({ navigation }) => ({
          title: "",
          headerStyle: {
            shadowColor: "transparent",
            backgroundColor: "#f8f8f8",
          },
          headerBackTitleStyle: {
            color: "green",
          },
          headerShadowVisible: false,
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="SafetyTipsStack"
        component={SafetyTipsStack}
        options={({ navigation }) => ({
          title: "",
          headerStyle: {
            shadowColor: "transparent",
            backgroundColor: "#f8f8f8",
          },
          headerBackTitleStyle: {
            color: "green",
          },
          headerShadowVisible: false,
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
};

export default HelpStack;

const styles = StyleSheet.create({});
