import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { CountryList } from "../../utils/CountryList";

const CountryModal = ({ navigation }) => {
  const [selected, setSelected] = useState(0);

  const pickCountry = (item) => {
    setSelected(item?.id);
    setTimeout(() => navigation.goBack(), 500);
  };

  return (
    <View style={{ padding: 10, flex: 1 }}>
      <FlatList
        data={CountryList}
        renderItem={({ item }) => (
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottomColor: "#E4DCCF",
              borderBottomWidth: 1,
              paddingVertical: 14,
            }}
            onPress={() => pickCountry(item)}
          >
            <Text>{`${item.country} (${item.code})`}</Text>
            {selected === item?.id ? (
              <Ionicons name="radio-button-on" size={24} color="#000" />
            ) : (
              <Ionicons name="radio-button-off" size={24} color="#E4DCCF" />
            )}
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default CountryModal;

const styles = StyleSheet.create({
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.4,
    borderBottomColor: "#957777",
    padding: 18,
  },
  currencyModal: {
    backgroundColor: "#f8f8f8",
    height: "94%",
    width: "100%",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: "absolute",
    bottom: 0,
  },
});
