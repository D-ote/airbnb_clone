import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { HEIGHT } from "../../utils/Constants";
import ToggleBtn from "../../components/toggleBtn/ToggleBtn";

const Accessibility = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 24 }}>Accessibility</Text>
      <View style={{ marginTop: 40 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 40,
          }}
        >
          <View>
            <Text style={{ fontSize: 15 }}>Map zoom controls</Text>
            <Text style={{ fontWeight: 200, fontSize: 12, marginTop: 6 }}>
              Zoom in or out with distinct buttons
            </Text>
          </View>
          <View>
            <ToggleBtn />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ width: "60%" }}>
            <Text style={{ fontSize: 15 }}>Map pan controls</Text>
            <Text style={{ fontWeight: 200, fontSize: 12, marginTop: 6 }}>
              Move around the map with directional buttons
            </Text>
          </View>
          <View>
            <ToggleBtn />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Accessibility;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
