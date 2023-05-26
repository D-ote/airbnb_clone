import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import GuestStack from "./GuestStack";
import HostStack from "./HostStack";
import ExperienceHostStack from "./ExperienceHostStack";
import TravelAdmin from "./TravelAdmin";
import { NavigationContainer } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator();

const TopTabNav = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      initialRouteName="Guest"
      screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: "powderblue" },
      }}
    >
      <Tab.Screen
        name="Guest"
        component={GuestStack}
        options={{ tabBarLabel: "Guest" }}
      />
      <Tab.Screen
        name="Host"
        component={HostStack}
        options={{ tabBarLabel: "Host" }}
      />
      <Tab.Screen
        name="ExperienceHost"
        component={ExperienceHostStack}
        options={{ tabBarLabel: "Experience Host" }}
      />
      <Tab.Screen
        name="TravelAdmin"
        component={TravelAdmin}
        options={{ tabBarLabel: "Travel Admin" }}
      />
    </Tab.Navigator>
  );
};

export default TopTabRoot = () => {
  return <TopTabNav />;
};
