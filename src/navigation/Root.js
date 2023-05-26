import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import ExploreStack from "./ExploreStack";
import WishlistStack from "./WishlistStack";
import TripStack from "./TripStack";
import InboxStack from "./InboxStack";
import ProfileStack from "./ProfileStack";

const Tab = createBottomTabNavigator();
const tabBarListeners = ({ navigation, route }) => ({
  tabPress: () => navigation.navigate(route.name),
});

const Index = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarActiveTintColor: "#e91e63" }}
    >
      <Tab.Screen
        name="ExploreStack"
        component={ExploreStack}
        listeners={tabBarListeners}
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="search1"
              size={24}
              color={focused ? "#e91e63" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="WishlistStack"
        component={WishlistStack}
        listeners={tabBarListeners}
        options={{
          tabBarLabel: "Wishlists",
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="hearto"
              size={24}
              color={focused ? "#e91e63" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="TripStack"
        component={TripStack}
        listeners={tabBarListeners}
        options={{
          tabBarLabel: "Trips",
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="airbnb"
              size={24}
              color={focused ? "#e91e63" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="InboxStack"
        component={InboxStack}
        listeners={tabBarListeners}
        options={{
          tabBarLabel: "Inbox",
          tabBarIcon: ({ focused }) => (
            <Feather
              name="message-square"
              size={24}
              color={focused ? "#e91e63" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        listeners={tabBarListeners}
        options={{
          tabBarLabel: "Login",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person-outline"
              size={24}
              color={focused ? "#e91e63" : "black"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Index;

const styles = StyleSheet.create({});
