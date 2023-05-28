import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const CountryModal = () => {
  return (
    <Modal animationType="slide" transparent={false} visible={isVisible}>
      <View style={styles.currencyModal}>
        <View style={styles.modalHeader}>
          <Pressable onPress={setIsVisible}>
            <Ionicons name="close" size={24} color="black" />
          </Pressable>
          <Text style={{ fontWeight: 600, marginLeft: 100 }}>
            Country/Region
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
              onPress={() => pickCurrency(item)}
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
    // backgroundColor: "#f8f8f8",
    height: "94%",
    width: "100%",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: "absolute",
    bottom: 0,
  },
});
