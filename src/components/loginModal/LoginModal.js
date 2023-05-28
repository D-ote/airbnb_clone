import {
  FlatList,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  Ionicons,
  Feather,
  SimpleLineIcons,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";
import CustomButton from "../button/Button";

const Content = [
  {
    id: 1,
    icon: <SimpleLineIcons name="envelope" size={24} color="black" />,
    text: "Continue with email",
    onPress: "email",
  },
  {
    id: 2,
    icon: <AntDesign name="apple1" size={24} color="black" />,
    text: "Continue with Apple",
    onPress: "apple",
  },
  {
    id: 3,
    icon: <AntDesign name="google" size={24} color="black" />,
    text: "Continue with Google",
    onPress: "google",
  },
  {
    id: 4,
    icon: <MaterialIcons name="facebook" size={24} color="black" />,
    text: "Continue with Facebook",
    onPress: "facebook",
  },
];

const LoginModal = ({ isVisible, setIsVisible }) => {
  const [number, onChangeNumber] = useState("");

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.loginModal}>
        <View style={styles.modalHeader}>
          <Pressable onPress={setIsVisible}>
            <Ionicons name="close" size={24} color="black" />
          </Pressable>
          <Text style={{ fontWeight: 600, marginLeft: 100 }}>
            Log in or Sign up
          </Text>
        </View>
        <ScrollView>
          <View style={styles.modalInfo}>
            <View style={styles.inputField}>
              <Pressable
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottomColor: "#B0A4A4",
                  borderBottomWidth: 0.8,
                  padding: 10,
                }}
                onPress={setIsVisible}
              >
                <View>
                  <Text style={{ fontSize: 12, fontWeight: 200 }}>
                    Country/Region
                  </Text>
                  <Text style={{ fontSize: 16, marginTop: 6 }}>
                    United Kingdom (+44)
                  </Text>
                </View>
                <Feather name="chevron-down" size={24} color="black" />
              </Pressable>
              <TextInput
                style={styles.phoneInput}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Phone number"
                keyboardType="numeric"
              />
            </View>
          </View>
          <View style={{ padding: 20 }}>
            <Text
              style={{
                fontSize: 11,
                fontWeight: 300,
                marginBottom: 20,
                lineHeight: 16,
              }}
            >
              We'll call or text you to confirm your number. Standard message
              and data rates apply.
            </Text>
            <CustomButton title={"Continue"} />
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginVertical: 14,
              flexDirection: "row",
            }}
          >
            <View style={{ marginBottom: 8 }}>
              <Text style={{ fontWeight: 100 }}>_____________________</Text>
            </View>
            <Text style={{ fontWeight: 600, paddingHorizontal: 8 }}>or</Text>
            <View style={{ marginBottom: 8 }}>
              <Text style={{ fontWeight: 100 }}>_____________________</Text>
            </View>
          </View>
          <View style={{ padding: 20 }}>
            <FlatList
              data={Content}
              renderItem={({ item }) => (
                <View style={styles.loginMedium}>
                  <View style={{ marginRight: 80 }}>{item.icon}</View>
                  <Text>{item.text}</Text>
                </View>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default LoginModal;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 36,
    fontWeight: 500,
  },
  body: {
    marginTop: 40,
  },
  subHeader: {
    fontSize: 24,
    fontWeight: 500,
  },
  bodyText: {
    lineHeight: 22,
    marginTop: 10,
    fontSize: 15,
    fontWeight: 300,
  },
  btn: {
    backgroundColor: "#e91e63",
    padding: 8,
    borderRadius: 8,
    marginTop: 40,
    width: "30%",
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.4,
    borderBottomColor: "#957777",
    padding: 18,
  },
  loginModal: {
    backgroundColor: "#fff",
    height: "90%",
    width: "100%",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: "absolute",
    bottom: 0,
  },
  modalInfo: {
    padding: 20,
    paddingBottom: 0,
  },
  inputField: {
    borderColor: "#B0A4A4",
    borderWidth: 1,
    borderRadius: 8,
  },
  phoneInput: {
    paddingVertical: 16,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  loginMedium: {
    borderRadius: 8,
    borderWidth: 0.4,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },
});
