import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const TopTabs = ({ navigation }) => {
  const [pressed, setPressed] = useState(false);
  return (
    <View style={styles.tabStyles}>
      <Pressable
        onPress={() => setPressed(!pressed)}
        style={pressed ? styles.pressed : styles.notPressed}
      >
        <Text>Guest</Text>
      </Pressable>
      <Pressable
        onPress={() => setPressed(!pressed)}
        style={pressed ? styles.pressed : styles.notPressed}
      >
        <Text>Host</Text>
      </Pressable>
      <Pressable
        onPress={() => setPressed(!pressed)}
        style={pressed ? styles.pressed : styles.notPressed}
      >
        <Text>Experience Host</Text>
      </Pressable>
      <Pressable
        onPress={() => setPressed(!pressed)}
        style={pressed ? styles.pressed : styles.notPressed}
      >
        <Text>Travel Admin</Text>
      </Pressable>
    </View>
  );
};

export default TopTabs;

const styles = StyleSheet.create({
  tabStyles: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#E4DCCF",
    borderBottomWidth: 1,
    paddingBottom: 16,
  },
  pressed: {
    borderBottomColor: "red",
    borderBottomWidth: 1,
    paddingBottom: 16,
  },
  notPressed: {
    borderBottomWidth: 0,
  },
});
