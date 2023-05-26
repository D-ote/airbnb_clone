import {
  Button,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { HEIGHT } from "../../utils/Constants";
import ToggleBtn from "../../components/toggleBtn/ToggleBtn";

const ThirdPartyList = [
  { id: 1, name: "Braintree" },
  { id: 2, name: "Google Maps" },
  { id: 3, name: "Google reCAPTCHA" },
  { id: 4, name: "Arkoselabs" },
  { id: 5, name: "Payment Processing" },
  { id: 6, name: "Au10tix" },
];

const FunctionalList = [
  { id: 1, name: "Turn all off" },
  { id: 2, name: "Facebook Functionalities" },
  { id: 3, name: "MLabs" },
];

const ThirdParty = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerStyle}>
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name={"md-chevron-back-sharp"} size={22} />
        </Pressable>
        <Text
          style={{ fontWeight: "bold", textAlign: "center", marginLeft: 100 }}
        >
          Third-party tools
        </Text>
      </View>
      <ScrollView
        style={{ marginTop: HEIGHT * 0.08 }}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={{ padding: 16, lineHeight: 20 }}>
          Thank you for using Airbnb. The information that's shared with us
          helps us to provide a great experience for you. Out{" "}
          <Text style={{ fontWeight: 500, textDecorationLine: "underline" }}>
            Privacy Policy
          </Text>{" "}
          describes how we collect, use, process, and disclose your personal
          information.
        </Text>

        <Text
          style={{
            fontWeight: "bold",
            fontSize: 24,
            paddingHorizontal: 16,
            paddingVertical: 10,
          }}
        >
          Strictly Necessary
        </Text>
        <Text style={{ paddingHorizontal: 16, lineHeight: 20 }}>
          These tools are necessary for the app to function and can't be
          switched off in our systems. They are usually only set in response to
          actions you have taken which result in a request for services, such as
          setting your privacy preferences, logging in or filling forms.
        </Text>
        <View style={{ marginTop: 20, padding: 20 }}>
          <FlatList
            data={ThirdPartyList}
            renderItem={({ item }) => (
              <Pressable
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottomColor: "#E4DCCF",
                  borderBottomWidth: 1,
                  paddingVertical: 14,
                }}
              >
                <Text>{item.name}</Text>
                <View>
                  <ToggleBtn disabled={true} turnon />
                </View>
              </Pressable>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>

        <Text
          style={{
            fontWeight: "bold",
            fontSize: 24,
            paddingHorizontal: 16,
            paddingVertical: 10,
          }}
        >
          Functional
        </Text>
        <Text style={{ paddingHorizontal: 16, lineHeight: 20 }}>
          These tools are necessary for the app to function and can't be
          switched off in our systems. They are usually only set in response to
          actions you have taken which result in a request for services, such as
          setting your privacy preferences, logging in or filling forms.
        </Text>
        <View style={{ marginTop: 20, padding: 20 }}>
          <FlatList
            data={FunctionalList}
            renderItem={({ item }) => (
              <Pressable
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottomColor: "#E4DCCF",
                  borderBottomWidth: 1,
                  paddingVertical: 14,
                }}
              >
                <Text>{item.name}</Text>
                <View>
                  <ToggleBtn />
                </View>
              </Pressable>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>

      <View style={styles.buttonBackground}>
        <View style={styles.lineShadow}>
          <Button title="Save" color={"#fff"} />
        </View>
      </View>
    </View>
  );
};

export default ThirdParty;

const styles = StyleSheet.create({
  // container: { flex: 1 },
  headerStyle: {
    flexDirection: "row",
    alignItems: "center",
    top: HEIGHT * 0.06,
    borderBottomColor: "#E4DCCF",
    borderBottomWidth: 1,
    // paddingVertical: 10,
    padding: 16,
  },
  lineShadow: {
    backgroundColor: "#212A3E",
    position: "absolute",
    bottom: 0,
    width: "80%",
    padding: 4,
    borderRadius: 8,
    alignSelf: "center",
  },
  buttonBackground: {},
});
