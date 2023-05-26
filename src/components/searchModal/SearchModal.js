import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { HEIGHT } from "../../utils/Constants";
import { FontAwesome, Feather } from "@expo/vector-icons";

const SearchList = [
  {
    id: 1,
    text: "Does the Extenuating Circumstances Policy apply to my reservation during the COVID-19 pandemic?",
  },
  { id: 2, text: "Cancelling your reservation for a stay" },
  { id: 3, text: "Verifying your identity" },
  {
    id: 4,
    text: "What to do if the place youre staying in isnt clean at check-in",
  },
];

const SearchModal = ({ isVisible, setIsVisible }) => {
  const [text, onChangeText] = useState("Search help");
  return (
    <Modal animationType="slide" transparent={false} visible={isVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchBar}
            onChangeText={onChangeText}
            value={text}
          />
          <Feather
            name="search"
            size={20}
            color="#000"
            style={{ position: "absolute", left: 24 }}
          />
          <Pressable onPress={setIsVisible}>
            <Text style={{ textDecorationLine: "underline" }}>Cancel</Text>
          </Pressable>
        </View>
        <View style={{ marginTop: 30 }}>
          <Text style={{ fontSize: 18, fontWeight: 600 }}>
            Recommended articles
          </Text>
          <View style={{ marginTop: 14 }}>
            <FlatList
              data={SearchList}
              renderItem={({ item }) => (
                <Pressable
                  style={({ pressed }) => [
                    { backgroundColor: pressed ? "#E8E8E8" : "#fff" },
                    styles.content,
                  ]}
                  onPress={() => {}}
                >
                  <View style={styles.iconStyle}>
                    <FontAwesome name="newspaper-o" size={24} color="black" />
                  </View>
                  <Text
                    style={{ flexWrap: "wrap", marginLeft: 8, fontSize: 15 }}
                  >
                    {item.text}
                  </Text>
                </Pressable>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SearchModal;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: "absolute",
    bottom: 0,
    padding: 24,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: HEIGHT * 0.08,
  },
  searchBar: {
    margin: 10,
    height: 50,
    width: "80%",
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    padding: 8,
    paddingLeft: 38,
  },
  iconStyle: {
    backgroundColor: "#E4DCCF",
    padding: 8,
    borderRadius: 8,
  },
  content: {
    flexDirection: "row",
    alignItems: "top",
    paddingVertical: 14,
  },
});
