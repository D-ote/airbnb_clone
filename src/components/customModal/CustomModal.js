import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Modal,
  ScrollView,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const CustomModal = ({ text, isVisible, setIsVisible, children }) => {
  console.log(isVisible, "jj");
  return (
    <Modal animationType="slide" transparent={false} visible={isVisible}>
      <View style={styles.loginModal}>
        <View style={styles.modalHeader}>
          <Pressable onPress={setIsVisible}>
            <Ionicons name="close" size={24} color="black" />
          </Pressable>
          <Text style={{ fontWeight: 600, marginLeft: 100 }}>{text}</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.modalInfo}>{children}</View>
      </ScrollView>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.4,
    borderBottomColor: "#957777",
    padding: 18,
  },
  loginModal: {
    backgroundColor: "#000",
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
});
