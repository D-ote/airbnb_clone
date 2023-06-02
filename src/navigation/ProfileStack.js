import React, { useLayoutEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileIndex from "../screens/Profile/Index";
import Accessibility from "../screens/Profile/Accessibility";
import Help from "../screens/Profile/Help";
import ThirdParty from "../screens/Profile/ThirdParty";
import SettingsPage from "../screens/Profile/SettingsPage";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import HelpStack from "./HelpStack";

const Stack = createNativeStackNavigator();

const ProfileStack = ({ route, navigation }) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (
      routeName === "Settings" ||
      routeName === "Accessibility" ||
      routeName === "HelpStack" ||
      routeName === "ThirdParty"
    ) {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "flex" } });
    }
  }, [navigation, route]);

  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (
      routeName === "Settings" ||
      routeName === "Accessibility" ||
      // routeName === "HelpStack" ||
      routeName === "ThirdParty"
    ) {
      navigation.setOptions({ screenOptions: { headerShown: true } });
    } else {
      navigation.setOptions({ screenOptions: { headerShown: false } });
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator initialRouteName="ProfileIndex">
      <Stack.Screen
        name="ProfileIndex"
        component={ProfileIndex}
        options={({ navigation }) => ({
          title: "ProfileIndex",
          headerStyle: {
            shadowColor: "transparent",
            backgroundColor: "#ffffff",
          },
          headerBackTitleStyle: {
            color: "green",
          },
          headerShadowVisible: false,
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsPage}
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
              <Ionicons name={"md-chevron-back-sharp"} size={24} />
            </Pressable>
          ),
        })}
      />
      <Stack.Screen
        name="Accessibility"
        component={Accessibility}
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
              <Ionicons name={"md-chevron-back-sharp"} size={24} />
            </Pressable>
          ),
        })}
      />
      <Stack.Screen
        name="HelpStack"
        component={HelpStack}
        options={({ navigation }) => ({
          title: "",
          headerStyle: {
            shadowColor: "transparent",
            backgroundColor: "#f8f8f8",
          },
          headerShown: false,
          headerBackTitleStyle: {
            color: "green",
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <Ionicons name={"md-chevron-back-sharp"} size={24} />
            </Pressable>
          ),
        })}
      />
      <Stack.Screen
        name="ThirdParty"
        component={ThirdParty}
        options={({ navigation }) => ({
          title: "Third-party tools",
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
              <Ionicons name={"md-chevron-back-sharp"} size={24} />
            </Pressable>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
