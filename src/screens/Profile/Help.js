import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Ionicons, Feather } from "@expo/vector-icons";
import { HEIGHT } from "../../utils/Constants";
import SearchModal from "../../components/searchModal/SearchModal";
import TopTabs from "../../components/toptabs/TopTabs";

const Help = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(false);

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
      <View style={{ marginTop: 24 }}>
        <Pressable style={styles.search} onPress={() => setIsVisible(true)}>
          <Feather name="search" size={20} color="#e91e63" />
          <Text style={{ marginLeft: 8, fontWeight: 500, fontSize: 16 }}>
            Search help
          </Text>
        </Pressable>
        <TopTabs />
      </View>

      <SearchModal
        isVisible={isVisible}
        setIsVisible={() => setIsVisible(!isVisible)}
      />
    </View>
  );
};

export default Help;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DDDDDD",
    borderRadius: 50,
    padding: 12,
  },
});
