import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { HEIGHT } from "../../utils/Constants";

const FirstScreen = ({ header, subHeader, body, onPress }) => {
  return (
    <>
      <Text style={styles.headerText}>{header}</Text>
      <View style={styles.body}>
        <Text style={styles.subHeader}>{subHeader}</Text>
        <Text style={styles.bodyText}>{body}</Text>
      </View>
      <View style={styles.btn}>
        <Button title="Log in" color={"#fff"} onPress={onPress} />
      </View>
    </>
  );
};

export default FirstScreen;

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
});
