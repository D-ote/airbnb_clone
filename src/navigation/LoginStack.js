import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginOptions from "../screens/Profile/LoginOptions";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import CountryModal from "../components/countryModal/CountryModal";
import ExistingAccount from "../screens/Profile/ExistingAccount";

const Stack = createNativeStackNavigator();

const LoginStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="LoginOptions">
      <Stack.Screen
        name="LoginOptions"
        component={LoginOptions}
        options={({ navigation }) => ({
          title: "Log in or sign up",
          headerShadowVisible: false,
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <Ionicons name="close" size={24} color="black" />
            </Pressable>
          ),
        })}
      />
      <Stack.Screen
        name="CountryModal"
        component={CountryModal}
        options={({ navigation }) => ({
          title: "Country/Region",
          headerStyle: {
            shadowColor: "transparent",
            backgroundColor: "#EEEEEE",
          },
          presentation: "modal",
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <Ionicons name="close" size={24} color="black" />
            </Pressable>
          ),
        })}
      />
      {/* <Stack.Screen
        name="ExistingAccount"
        component={ExistingAccount}
        options={({ navigation }) => ({
          title: "Account exists",
          presentation: "modal",
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <Ionicons name="close" size={24} color="black" />
            </Pressable>
          ),
        })}
      /> */}
    </Stack.Navigator>
  );
};

export default LoginStack;
