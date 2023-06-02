import { Pressable, StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Help from "../screens/Profile/Help";
import GettingStarted from "../screens/Profile/TabPages/GettingStarted";
import Account from "../screens/Profile/TabPages/Account";
import { Ionicons, Feather } from "@expo/vector-icons";
import Reservation from "../screens/Profile/TabPages/Reservation";
import AirCover from "../screens/Profile/TabPages/AirCover";
import GuestStack from "./GuestStack";
import PoliciesStack from "./PoliciesStack";
import SafetyTipsStack from "./SafetyTipsStack";

const Stack = createNativeStackNavigator();

const HelpStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Help">
      <Stack.Screen
        name="Help"
        component={Help}
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
        name="GettingStarted"
        component={GettingStarted}
        options={({ navigation }) => ({
          title: "",
          headerStyle: {
            shadowColor: "transparent",
            backgroundColor: "#f8f8f8",
          },
          headerBackTitleStyle: {
            color: "#000",
          },
          headerTintColor: "#000",
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <Ionicons name={"md-chevron-back-sharp"} size={22} />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate("Help")}>
              <Feather name="search" size={18} color="black" />
            </Pressable>
          ),
          tabBarStyle: { display: "flex" },
          headerShadowVisible: false,
        })}
      />
      <Stack.Screen
        name="Account"
        component={Account}
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
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate("Help")}>
              <Feather name="search" size={18} color="black" />
            </Pressable>
          ),
        })}
      />
      <Stack.Screen
        name="Reservation"
        component={Reservation}
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
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate("Help")}>
              <Feather name="search" size={18} color="black" />
            </Pressable>
          ),
        })}
      />
      <Stack.Screen
        name="AirCover"
        component={AirCover}
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
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate("Help")}>
              <Feather name="search" size={18} color="black" />
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
