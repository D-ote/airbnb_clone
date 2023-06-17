import { Image, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const ExistingAccount = ({ isVisible, setIsVisible }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.loginModal}>
        <View style={styles.modalHeader}>
          <Pressable onPress={setIsVisible}>
            <Ionicons name="close" size={24} color="black" />
          </Pressable>
          <Text
            style={{
              fontWeight: 600,
              marginLeft: 100,
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            Account Exists
          </Text>
        </View>
        <View style={{ backgroundColor: "#fff", paddingBottom: 20, flex: 1 }}>
          <View style={styles.container}>
            <Text style={styles.exist}>
              Looks like you already have an account. Please log in instead
            </Text>
            <View style={styles.imgContainer}>
              <Image
                source={require("../../../assets/profile.jpeg")}
                style={styles.img}
              />
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text style={styles.exist}>Dooter</Text>
              <Text style={styles.exist}>dooterior@gmail.com</Text>
            </View>
            <Pressable style={styles.loginMedium}>
              <View style={{ marginRight: 70 }}>
                <AntDesign name="google" size={24} color="black" />
              </View>

              <Text style={styles.exist}>Continue with Google</Text>
            </Pressable>
          </View>
          <View style={{ paddingHorizontal: 20 }}>
            <Pressable style={{ marginBottom: 10 }}>
              <Text style={styles.link}>Log in with a different account</Text>
            </Pressable>
            <Pressable>
              <Text style={styles.link}>Reset password</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ExistingAccount;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  loginMedium: {
    borderRadius: 8,
    borderWidth: 0.4,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
    width: "100%",
    marginTop: 30,
  },
  imgContainer: {
    width: 160,
    height: 160,
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: "100%",
  },
  exist: { textAlign: "center", fontSize: 16 },
  link: {
    textDecorationLine: "underline",
    fontSize: 16,
    fontWeight: "500",
  },
  loginModal: {
    backgroundColor: "#fff",
    height: "60%",
    width: "100%",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: "absolute",
    bottom: 0,
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#957777",
    padding: 16,
  },
});
