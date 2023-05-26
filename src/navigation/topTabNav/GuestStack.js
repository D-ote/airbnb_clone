import { StyleSheet, Text, View } from "react-native";
import React from "react";

const GuestStack = () => {
  return (
    <View style={styles.container}>
      <Text>GuestStack</Text>
    </View>
  );
};

export default GuestStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
});
