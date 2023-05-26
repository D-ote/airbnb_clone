import { StyleSheet, View, Button } from "react-native";
import React from "react";

const CustomButton = ({ title, onPress }) => {
  return (
    <View style={styles.buttonStyle}>
      <Button title={title} color={"#fff"} onPress={onPress} />
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "#e91e63",
    padding: 8,
    borderRadius: 8,
  },
});
