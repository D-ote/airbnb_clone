import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { HEIGHT } from "../../utils/Constants";
import ToggleBtn from "../../components/toggleBtn/ToggleBtn";
import { SettingsContent } from "../../utils/Lists";
import CurrencyModal from "../../components/currency/CurrencyModal";

const SettingsPage = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCurency, setSelectedCurency] = useState("GBP (£)");
  const renderItem = ({ item }) => {
    <View
      style={{
        borderBottomColor: "#E4DCCF",
        borderBottomWidth: 1,
        paddingBottom: 18,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: 300 }}>{item.name}</Text>
        <View>
          {item.text ? (
            <Text style={{ color: "teal", fontSize: 18, fontWeight: 300 }}>
              {item.extra}
            </Text>
          ) : (
            <ToggleBtn />
          )}
        </View>
      </View>
      {item.sub && (
        <View style={{ width: "80%" }}>
          <Text style={{ fontWeight: 200 }}>
            Automatically translate descriptions and reviews to English
          </Text>
        </View>
      )}
    </View>;
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.goBack()}
        style={{ top: HEIGHT * 0.04 }}
      >
        <Ionicons name={"md-chevron-back-sharp"} size={22} />
      </Pressable>
      <View style={{ marginTop: HEIGHT * 0.08 }}>
        <Text style={{ fontWeight: "bold", fontSize: 24 }}>Settings</Text>
        <View style={{ marginTop: 40 }}>
          <FlatList
            data={SettingsContent}
            renderItem={({ item }) => (
              <Pressable
                style={{
                  borderBottomColor: "#E4DCCF",
                  borderBottomWidth: 1,
                  paddingVertical: 10,
                }}
                onPress={
                  item.id == 1 ? () => setIsVisible(!isVisible) : () => {}
                }
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 10,
                  }}
                >
                  <Text style={{ fontSize: 18, fontWeight: 300 }}>
                    {item.name}
                  </Text>
                  <View>
                    {item.text ? (
                      <Text
                        style={{ color: "teal", fontSize: 18, fontWeight: 300 }}
                      >
                        {selectedCurency}
                      </Text>
                    ) : (
                      <View>{item.extra}</View>
                    )}
                  </View>
                </View>
                {item.sub && (
                  <View style={{ width: "80%" }}>
                    <Text style={{ fontWeight: 200 }}>
                      Automatically translate descriptions and reviews to
                      English
                    </Text>
                  </View>
                )}
              </Pressable>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
      <CurrencyModal
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        setSelectedCurency={setSelectedCurency}
      />
    </View>
  );
};

export default SettingsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
