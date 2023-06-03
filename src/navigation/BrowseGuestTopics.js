import { Pressable } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons, Feather } from "@expo/vector-icons";
import AllTopicsGuest from "../screens/Profile/TabPages/Guest/GuestTopics/AllTopicsGuest";

const Stack = createNativeStackNavigator();

const BrowseGuestTopics = () => {
  return (
    <Stack.Navigator initialRouteName="AllTopicsGuest">
      <Stack.Screen
        name="AllTopicsGuest"
        component={AllTopicsGuest}
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
    </Stack.Navigator>
  );
};

export default BrowseGuestTopics;
