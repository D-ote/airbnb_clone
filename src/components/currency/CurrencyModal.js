import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { CurrencyList } from "../../utils/CurrencyList";
import { HEIGHT } from "../../utils/Constants";

const CurrencyModal = ({ isVisible, setIsVisible, setSelectedCurency }) => {
  const [selected, setSelected] = useState(0);

  return (
    <Modal animationType="slide" transparent={false} visible={isVisible}>
      <View style={styles.currencyModal}>
        <View style={styles.modalHeader}>
          <Pressable onPress={setIsVisible}>
            <Ionicons name="close" size={24} color="black" />
          </Pressable>
          <Text style={{ fontWeight: 600, marginLeft: 100 }}>
            Choose a currency
          </Text>
        </View>
      </View>
      <View style={{ marginTop: HEIGHT * 0.12, padding: 10 }}>
        <FlatList
          data={CurrencyList}
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
              onPress={() => {
                setSelected(item.id),
                  setSelectedCurency(item.short + " " + `(${item.symbol})`),
                  setIsVisible(false);
              }}
            >
              <Text>
                {item.currency} - {item.symbol}
              </Text>
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
    </Modal>
  );
};

export default CurrencyModal;

const styles = StyleSheet.create({
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.4,
    borderBottomColor: "#957777",
    padding: 18,
  },
  currencyModal: {
    // backgroundColor: "#f8f8f8",
    height: "94%",
    width: "100%",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: "absolute",
    bottom: 0,
  },
});
