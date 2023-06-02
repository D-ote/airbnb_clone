import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import {
  AboutAirbnb,
  Payments,
  SafetynAccessibility,
  SearchandBooking,
  YourAccount,
  YourReservations,
} from "../../../utils/Lists";

const AllTopics = () => {
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
      <View style={styles.section}>
        <Text style={{ fontWeight: 500, fontSize: 30, padding: 24 }}>
          All topics for guests
        </Text>
        <Text
          style={{
            marginBottom: 18,
            fontWeight: 600,
            fontSize: 18,
            paddingHorizontal: 24,
          }}
        >
          Searching and booking
        </Text>
        <View style={{ paddingHorizontal: 24 }}>
          {SearchandBooking.map((item) => (
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottomColor: "#E4DCCF",
                borderBottomWidth: 1,
                paddingVertical: 14,
              }}
              key={item.id}
            >
              <Text style={{ fontSize: 16 }}>{item.name}</Text>
              <Entypo name="chevron-small-right" size={24} color="black" />
            </Pressable>
          ))}
        </View>
      </View>
      <View style={styles.section}>
        <Text
          style={{
            marginBottom: 18,
            fontWeight: 600,
            fontSize: 18,
            paddingHorizontal: 24,
          }}
        >
          Your reservations
        </Text>
        <View style={{ paddingHorizontal: 24 }}>
          {YourReservations.map((item) => (
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottomColor: "#E4DCCF",
                borderBottomWidth: 1,
                paddingVertical: 14,
              }}
              key={item.id}
            >
              <Text style={{ fontSize: 16 }}>{item.name}</Text>
              <Entypo name="chevron-small-right" size={24} color="black" />
            </Pressable>
          ))}
        </View>
      </View>
      <View style={styles.section}>
        <Text
          style={{
            marginBottom: 18,
            fontWeight: 600,
            fontSize: 18,
            paddingHorizontal: 24,
          }}
        >
          Payments, pricing, and refunds
        </Text>
        <View style={{ paddingHorizontal: 24 }}>
          {Payments.map((item) => (
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottomColor: "#E4DCCF",
                borderBottomWidth: 1,
                paddingVertical: 14,
              }}
              key={item.id}
            >
              <Text style={{ fontSize: 16 }}>{item.name}</Text>
              <Entypo name="chevron-small-right" size={24} color="black" />
            </Pressable>
          ))}
        </View>
      </View>
      <View style={styles.section}>
        <Text
          style={{
            marginBottom: 18,
            fontWeight: 600,
            fontSize: 18,
            paddingHorizontal: 24,
          }}
        >
          Your account
        </Text>
        <View style={{ paddingHorizontal: 24 }}>
          {YourAccount.map((item) => (
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottomColor: "#E4DCCF",
                borderBottomWidth: 1,
                paddingVertical: 14,
              }}
              key={item.id}
            >
              <Text style={{ fontSize: 16 }}>{item.name}</Text>
              <Entypo name="chevron-small-right" size={24} color="black" />
            </Pressable>
          ))}
        </View>
      </View>
      <View style={styles.section}>
        <Text
          style={{
            marginBottom: 18,
            fontWeight: 600,
            fontSize: 18,
            paddingHorizontal: 24,
          }}
        >
          Safety and accessibility
        </Text>
        <View style={{ paddingHorizontal: 24 }}>
          {SafetynAccessibility.map((item) => (
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottomColor: "#E4DCCF",
                borderBottomWidth: 1,
                paddingVertical: 14,
              }}
              key={item.id}
            >
              <View style={{ width: 300 }}>
                <Text style={{ fontSize: 16, flexWrap: "wrap" }}>
                  {item.name}
                </Text>
              </View>
              <Entypo name="chevron-small-right" size={24} color="black" />
            </Pressable>
          ))}
        </View>
      </View>
      <View style={{ marginVertical: 16 }}>
        <Text
          style={{
            marginBottom: 18,
            fontWeight: 600,
            fontSize: 18,
            paddingHorizontal: 24,
          }}
        >
          About Airbnb
        </Text>
        <View style={{ paddingHorizontal: 24 }}>
          {AboutAirbnb.map((item) => (
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottomColor: "#E4DCCF",
                borderBottomWidth: 1,
                paddingVertical: 14,
              }}
              key={item.id}
            >
              <Text style={{ fontSize: 16 }}>{item.name}</Text>
              <Entypo name="chevron-small-right" size={24} color="black" />
            </Pressable>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default AllTopics;

const styles = StyleSheet.create({
  section: {
    borderBottomWidth: 8,
    borderBottomColor: "#E4DCCF",
    marginVertical: 16,
  },
});
