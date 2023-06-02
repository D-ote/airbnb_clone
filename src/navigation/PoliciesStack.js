import { View, Text, Pressable } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PoliciesRoot from "../screens/Profile/CommunityPolicies/index";
import { Ionicons, Feather } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const PoliciesStack = () => {
  return (
    <Stack.Navigator initialRouteName="Root">
      <Stack.Screen
        name="PoliciesRoot"
        component={PoliciesRoot}
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

export default PoliciesStack;
