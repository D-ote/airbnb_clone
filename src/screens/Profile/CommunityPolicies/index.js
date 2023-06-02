import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { Entypo, Fontisto } from "@expo/vector-icons";
import { HEIGHT } from "../../../utils/Constants";
import SearchModal from "../../../components/searchModal/SearchModal";
import { CommunityPolicyExpectations } from "../../../utils/Lists";

export default function ({ navigation }) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
      {/* <View
        style={{
          position: "absolute",
          top: HEIGHT * 0.06,
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 20,
          width: "90%",
          zIndex: 1,
        }}
      >
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={28} color="white" />
        </Pressable>
        <Pressable onPress={() => setIsVisible(!isVisible)}>
          <Ionicons name="md-search-circle" size={28} color="white" />
        </Pressable>
      </View> */}
      <View style={styles.imgContainer}>
        <Image
          source={require("../../../../assets/policy.webp")}
          style={styles.img}
        />
      </View>
      <View>
        <Text style={{ fontWeight: 500, fontSize: 30, padding: 24 }}>
          Our community policies
        </Text>
        <Text style={{ paddingHorizontal: 24 }}>
          What to expect, and what will be expected of you, as as member of the
          Airbnb community.
        </Text>
        <View style={{ paddingHorizontal: 24, marginTop: 24 }}>
          {CommunityPolicyExpectations.map((item) => (
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

        <View style={{ padding: 24 }}>
          <View
            style={{
              borderRadius: 8,
              borderWidth: 1,
              borderColor: "#E4DCCF",
              padding: 12,
              flexDirection: "row",
              marginVertical: 20,
            }}
          >
            <Fontisto
              name="world-o"
              size={14}
              color="blue"
              style={{ marginRight: 10 }}
            />
            <View>
              <Text style={{ fontWeight: 600 }}>Legal Terms</Text>
              <Text>
                Looking for our Terms and Service, Privacy Policy, or other
                legal content?
              </Text>
              <Pressable>
                <Text
                  style={{
                    fontWeight: 500,
                    textDecorationLine: "underline",
                    marginTop: 16,
                  }}
                >
                  Go to our Legal Terms page
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      <SearchModal isVisible={isVisible} setIsVisible={setIsVisible} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    height: 280,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "#E4DCCF",
    borderBottomWidth: 1,
    paddingVertical: 14,
  },
});
