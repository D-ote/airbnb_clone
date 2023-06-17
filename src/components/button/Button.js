import { StyleSheet, View, Button } from "react-native";
import React from "react";

const CustomButton = ({ title, onPress, disabled }) => {
  return (
    <View style={disabled ? styles.disabledState : styles.buttonStyle}>
      <Button
        title={title}
        color={"#fff"}
        onPress={onPress}
        disabled={disabled}
      />
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
  disabledState: {
    backgroundColor: "#EEEEEE",
    padding: 8,
    borderRadius: 8,
  },
});
