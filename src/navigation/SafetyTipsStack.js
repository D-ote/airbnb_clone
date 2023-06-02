import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons, Feather } from "@expo/vector-icons";
import SafetyTips from "../screens/Profile/SafetyTips";

const Stack = createNativeStackNavigator();

const SafetyTipsStack = () => {
  return (
    <Stack.Navigator initialRouteName="Root">
      <Stack.Screen
        name="PoliciesRoot"
        component={SafetyTips}
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
          //   headerShown: false,
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
    </Stack.Navigator>
  );
};

export default SafetyTipsStack;

const styles = StyleSheet.create({});
