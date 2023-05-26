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

const Stack = createNativeStackNavigator();

const ProfileStack = ({ route, navigation }) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (
      routeName === "Settings" ||
      routeName === "Accessibility" ||
      routeName === "Help" ||
      routeName === "ThirdParty"
    ) {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "flex" } });
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="ProfileIndex"
    >
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
        })}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsPage}
        options={({ navigation }) => ({
          title: "Login",
          headerStyle: {
            shadowColor: "transparent",
            backgroundColor: "#ffffff",
          },
          headerBackTitleStyle: {
            color: "green",
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <Ionicons name={"md-chevron-back-sharp"} size={30} />
            </Pressable>
          ),
        })}
      />
      <Stack.Screen
        name="Accessibility"
        component={Accessibility}
        options={({ navigation }) => ({
          title: "Login",
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
      <Stack.Screen
        name="Help"
        component={Help}
        options={({ navigation }) => ({
          title: "Login",
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
      <Stack.Screen
        name="ThirdParty"
        component={ThirdParty}
        options={({ navigation }) => ({
          title: "Login",
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

export default ProfileStack;
