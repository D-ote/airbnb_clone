import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafetyTipsnGuidelines } from "../../../utils/Lists";
import { Entypo } from "@expo/vector-icons";

export default function ({ navigation }) {
  return (
    <ScrollView>
      <Text style={{ fontWeight: 500, fontSize: 30, padding: 24 }}>
        Our community policies
      </Text>
      <Text style={{ paddingHorizontal: 24 }}>
        What to expect, and what will be expected of you, as as member of the
        Airbnb community.
      </Text>
      <View style={{ paddingHorizontal: 24, marginTop: 24 }}>
        {SafetyTipsnGuidelines.map((item) => (
          <Pressable
            style={({ pressed }) => [
              { backgroundColor: pressed ? "#E8E8E8" : "#f0f0f0" },
              styles.content,
            ]}
            key={item.id}
          >
            <Text style={{ fontSize: 16 }}>{item.name}</Text>
            <Entypo name="chevron-small-right" size={24} color="black" />
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "#E4DCCF",
    borderBottomWidth: 1,
    paddingVertical: 14,
  },
});
