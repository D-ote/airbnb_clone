import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { Content, TabHeaderNames } from "../../utils/Lists";

const TopTabs = ({ navigation }) => {
  const [pressed, setPressed] = useState(1);

  return (
    <>
      <View style={styles.tabStyles}>
        {TabHeaderNames.map((item) => (
          <Pressable
            onPress={() => setPressed(item.id)}
            style={pressed == item.id ? styles.pressed : styles.notPressed}
            key={item.id}
          >
            <Text>{item.name}</Text>
          </Pressable>
        ))}
      </View>

      <View style={{ marginTop: 34 }}>
        <FlatList
          data={Content[pressed]}
          renderItem={({ item }) => (
            <>
              <Text
                style={{ fontSize: 22, fontWeight: 500, paddingHorizontal: 16 }}
              >
                {item.header}
              </Text>
              <Pressable
                style={({ pressed }) => [
                  { backgroundColor: pressed ? "#E8E8E8" : "#f0f0f0" },
                  styles.content,
                ]}
                onPress={() => navigation.navigate(item.onPress)}
              >
                <View style={styles.first}>
                  {item.icon}
                  <Text style={{ fontSize: 16, fontWeight: 300 }}>
                    {item.name}
                  </Text>
                </View>
                <Feather name="chevron-right" size={24} color="black" />
              </Pressable>
            </>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
};

export default TopTabs;

const styles = StyleSheet.create({
  tabStyles: {
    marginTop: 36,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#E4DCCF",
    borderBottomWidth: 1,
    marginHorizontal: 16,
  },
  pressed: {
    borderBottomColor: "red",
    borderBottomWidth: 1,
    paddingBottom: 16,
  },
  notPressed: {
    borderBottomWidth: 0,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#C8B6A6",
    borderBottomWidth: 0.8,
    paddingVertical: 18,
    paddingHorizontal: 16,
  },
  first: {
    flexDirection: "row",
    alignItems: "center",
  },
});
