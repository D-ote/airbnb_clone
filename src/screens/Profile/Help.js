import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { HEIGHT } from "../../utils/Constants";

const Help = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.goBack()}
        style={{ top: HEIGHT * 0.04 }}
      >
        <Ionicons name={"md-chevron-back-sharp"} size={22} />
      </Pressable>
      <View style={{ marginTop: HEIGHT * 0.08 }}>
        <Text style={{ fontWeight: "bold", fontSize: 26 }}>
          Hi, how can we help?
        </Text>
      </View>
    </View>
  );
};

export default Help;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
