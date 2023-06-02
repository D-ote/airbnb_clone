import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import PageHeader from "../../../components/pageHeader/PageHeader";
import { Foundation } from "@expo/vector-icons";

const AirCover = () => {
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 50, padding: 24 }}
      showsVerticalScrollIndicator={false}
    >
      <PageHeader
        smallHeader={"Guide"}
        bigHeader={"Getting protected through AirCover"}
        // pic={"../../../../assets/pushdoor.jpeg"}
      />
      <View
        style={{
          paddingBottom: 30,
          borderBottomColor: "#E4DCCF",
          borderBottomWidth: 1,
        }}
      >
        <Text style={{ marginTop: 20, lineHeight: 18, letterSpacing: 1 }}>
          Nisi sit aliquip dolore pariatur id consequat consectetur consectetur
          consectetur. Fugiat ea nostrud commodo consequat id commodo minim sint
          aliquip elit velit veniam quis. Ea elit occaecat aliqua aliquip non
          sunt adipisicing qui qui nisi incididunt. Pariatur ex commodo laboris
          labore dolore velit. Fugiat laboris consectetur dolor velit.
        </Text>
        <View
          style={{
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "#E4DCCF",
            padding: 12,
            flexDirection: "row",
            // alignItems: "center",
            marginVertical: 20,
          }}
        >
          <Foundation
            name="page-filled"
            size={24}
            color="#957777"
            style={{ marginRight: 8 }}
          />
          <Text>
            If you're a Host, learn more about
            <Text style={{ fontWeight: 500, textDecorationLine: "underline" }}>
              AirCover for Hosts
            </Text>
            and
            <Text style={{ fontWeight: 500, textDecorationLine: "underline" }}>
              recent improvements
            </Text>
            we've made.
          </Text>
        </View>
        <Text style={{ fontWeight: 600, fontSize: 24 }}>
          Booking Protection Guarantee
        </Text>
        <Text style={{ marginTop: 20 }}>
          In the unlikely event a Host needs to cancel your booking within 30
          days of check-in, we'll find you a similar or better home, or we'll
          refund you.
        </Text>
      </View>
      <View style={styles.section}>
        <Pressable>
          <Text style={styles.linkText}>
            If you can't get in touch with your Host
          </Text>
        </Pressable>
        <Text style={{ lineHeight: 18, letterSpacing: 1, marginTop: 4 }}>
          Fugiat Lorem id magna enim commodo do esse exercitation anim voluptate
          ullamco ipsum ullamco.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionText}>Get-What-You-Booked Guarantee</Text>
        <Text style={{ lineHeight: 18, letterSpacing: 1, marginTop: 14 }}>
          Fugiat Lorem id magna enim commodo do esse exercitation anim voluptate
          ullamco ipsum ullamco.Elit enim commodo fugiat esse anim cupidatat
          amet excepteur ipsum mollit qui. Fugiat Lorem id magna enim commodo do
          esse exercitation anim voluptate ullamco ipsum ullamco.Elit enim
          commodo fugiat esse anim cupidatat amet excepteur ipsum mollit qui.
        </Text>
      </View>
      <View style={styles.section}>
        <Pressable>
          <Text style={styles.linkText}>
            What to do if the place you're staying in isn't clean at check-in
          </Text>
        </Pressable>
        <Text style={{ lineHeight: 18, letterSpacing: 1, marginTop: 4 }}>
          Fugiat Lorem id magna enim commodo do esse exercitation anim voluptate
          ullamco ipsum ullamco.
        </Text>
      </View>
      <View style={styles.section}>
        <Pressable>
          <Text style={styles.linkText}>
            If something goes wrong during your stay
          </Text>
        </Pressable>
        <Text style={{ lineHeight: 18, letterSpacing: 1, marginTop: 4 }}>
          Fugiat Lorem id magna enim commodo do esse exercitation anim voluptate
          ullamco ipsum ullamco.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionText}>24-hour Safety Line</Text>
        <Text style={{ lineHeight: 18, letterSpacing: 1, marginTop: 14 }}>
          Fugiat Lorem id magna enim commodo do esse exercitation anim voluptate
          ullamco ipsum ullamco.Elit enim commodo fugiat esse anim cupidatat
          amet excepteur ipsum mollit qui. Fugiat Lorem id magna enim commodo do
          esse exercitation anim voluptate ullamco ipsum ullamco.Elit enim
          commodo fugiat esse anim cupidatat amet excepteur ipsum mollit qui.
        </Text>
      </View>
      <View style={styles.section}>
        <Pressable>
          <Text style={styles.linkText}>Get help or contact Airbnb</Text>
        </Pressable>
        <Text style={{ lineHeight: 18, letterSpacing: 1, marginTop: 4 }}>
          Fugiat Lorem id magna enim commodo do esse exercitation anim voluptate
          ullamco ipsum ullamco.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionText}>AirCover and your protection</Text>
        <Text style={{ lineHeight: 18, letterSpacing: 1, marginTop: 14 }}>
          Fugiat Lorem id magna enim commodo do esse exercitation anim voluptate
          ullamco ipsum ullamco.Elit enim commodo fugiat esse anim cupidatat
          amet excepteur ipsum mollit qui. {"\n"}Fugiat Lorem id magna enim
          commodo do esse exercitation anim voluptate ullamco ipsum ullamco.Elit
          enim commodo fugiat esse anim cupidatat amet excepteur ipsum mollit
          qui. Fugiat Lorem id magna enim commodo do esse exercitation anim
          voluptate ullamco ipsum ullamco.Elit enim commodo fugiat esse anim
          cupidatat amet excepteur ipsum mollit qui.
        </Text>
        <Text>
          Learn more about
          <Text style={{ fontWeight: 500, textDecorationLine: "underline" }}>
            what is and isn't protected by AirCover
          </Text>
        </Text>
        <Text>
          Laboris incididunt adipisicing sunt dolore excepteur dolor. Deserunt
          officia aliquip tempor sunt officia culpa aliqua. Id fugiat consequat
          proident deserunt cupidatat. Aute anim quis occaecat in officia.
        </Text>
      </View>
      <View style={styles.question}>
        <Text style={{ fontWeight: 500 }}>Did this article help?</Text>
        <Text style={styles.answerText}>Yes</Text>
        <Text style={styles.answerText}>No</Text>
      </View>
      <View style={styles.section}>
        <Text style={{ fontSize: 24, fontWeight: 500, marginBottom: 15 }}>
          Related articles
        </Text>
        <Pressable>
          <Text style={styles.linkText}>How booking and reservations work</Text>
        </Pressable>
        <Text style={{ lineHeight: 18, letterSpacing: 1, marginTop: 4 }}>
          Fugiat Lorem id magna enim commodo do esse exercitation anim voluptate
          ullamco ipsum ullamco.
        </Text>
      </View>
      <View style={styles.section}>
        <Pressable>
          <Text style={styles.linkText}>Finding your reservation</Text>
        </Pressable>
        <Text style={{ lineHeight: 18, letterSpacing: 1, marginTop: 4 }}>
          Fugiat Lorem id magna enim commodo do esse exercitation anim voluptate
          ullamco ipsum ullamco.
        </Text>
      </View>
      <View style={styles.lastSection}>
        <Pressable>
          <Text style={styles.linkText}>
            Booking a trip: What to do if you're new
          </Text>
        </Pressable>
        <Text style={{ lineHeight: 18, letterSpacing: 1, marginTop: 4 }}>
          Fugiat Lorem id magna enim commodo do esse exercitation anim voluptate
          ullamco ipsum ullamco.
        </Text>
      </View>
    </ScrollView>
  );
};

export default AirCover;

const styles = StyleSheet.create({
  imgContainer: {
    height: 220,
    marginTop: 30,
  },
  section: {
    marginTop: 20,
    paddingBottom: 20,
    borderBottomColor: "#E4DCCF",
    borderBottomWidth: 1,
  },
  lastSection: {
    marginTop: 25,
    paddingBottom: 25,
  },
  linkText: {
    fontWeight: 500,
    textDecorationLine: "underline",
  },
  sectionText: {
    fontSize: 24,
    fontWeight: 500,
  },
  question: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
    paddingBottom: 25,
    borderBottomColor: "#E4DCCF",
    borderBottomWidth: 1,
  },
  answerText: {
    fontWeight: 500,
    textDecorationLine: "underline",
    marginLeft: 15,
  },
});
