import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons, Feather } from "@expo/vector-icons";

const PageHeader = ({ smallHeader, bigHeader, pic, wrapped }) => {
  return (
    <>
      <Text style={{ fontWeight: 500, color: "#B0A4A4" }}>{smallHeader}</Text>
      <View style={wrapped ? styles.wrappedText : styles.bigHeaderText}>
        <Text style={{ fontSize: 30, fontWeight: 600, flexWrap: "wrap" }}>
          {bigHeader}
        </Text>
      </View>
      <View style={styles.img}>
        <Image source={pic} style={{ width: "100%", height: "100%" }} />
      </View>
    </>
  );
};

export default PageHeader;

const styles = StyleSheet.create({
  img: {
    height: 200,
  },
  bigHeaderText: {
    marginBottom: 20,
  },
  wrappedText: {
    width: 250,
    marginBottom: 20,
  },
});
