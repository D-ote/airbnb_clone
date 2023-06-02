import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import PageHeader from "../../../components/pageHeader/PageHeader";

const Account = () => {
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 50, padding: 24 }}
      showsVerticalScrollIndicator={false}
    >
      <PageHeader
        smallHeader={"Guide"}
        bigHeader={"Accessing your account"}
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
        <Text style={{ marginTop: 40, fontSize: 24, fontWeight: 500 }}>
          Troubleshooting account issues
        </Text>
        <Text style={styles.section}>
          Fugiat Lorem duis non nostrud voluptate culpa ex Lorem aliqua commodo.
          Id in irure incididunt non ex. Lorem enim nisi dolore enim consequat
          veniam. Anim Lorem excepteur commodo irure labore reprehenderit id
          pariatur consequat minim enim cillum. Reprehenderit ipsum enim cillum
          ex irure nulla aute cupidatat nisi ex magna sint. Id id sunt enim esse
          in tempor laborum mollit ipsum.
        </Text>
      </View>
      <View style={styles.section}>
        <Pressable>
          <Text style={styles.linkText}>Change or reset your password</Text>
        </Pressable>
        <Text style={{ lineHeight: 18, letterSpacing: 1, marginTop: 4 }}>
          Fugiat Lorem id magna enim commodo do esse exercitation anim voluptate
          ullamco ipsum ullamco.
        </Text>
      </View>
      <View style={styles.section}>
        <Pressable>
          <Text style={styles.linkText}>Merging multiple accounts</Text>
        </Pressable>
        <Text style={{ lineHeight: 18, letterSpacing: 1, marginTop: 4 }}>
          Fugiat Lorem id magna enim commodo do esse exercitation anim voluptate
          ullamco ipsum ullamco.
        </Text>
      </View>
      <View style={styles.section}>
        <Pressable>
          <Text style={styles.linkText}>
            Deactivating or deleting your account
          </Text>
        </Pressable>
        <Text style={{ lineHeight: 18, letterSpacing: 1, marginTop: 4 }}>
          Fugiat Lorem id magna enim commodo do esse exercitation anim voluptate
          ullamco ipsum ullamco.
        </Text>
      </View>
      <View style={styles.section}>
        <Pressable>
          <Text style={styles.sectionText}>Managing your personal info</Text>
        </Pressable>
        <Text style={{ lineHeight: 18, letterSpacing: 1, marginTop: 14 }}>
          Fugiat Lorem id magna enim commodo do esse exercitation anim voluptate
          ullamco ipsum ullamco.Elit enim commodo fugiat esse anim cupidatat
          amet excepteur ipsum mollit qui.
        </Text>
      </View>
      <View style={styles.section}>
        <Pressable>
          <Text style={styles.linkText}>Edit your account settings</Text>
        </Pressable>
        <Text style={{ lineHeight: 18, letterSpacing: 1, marginTop: 4 }}>
          Fugiat Lorem id magna enim commodo do esse exercitation anim voluptate
          ullamco ipsum ullamco.
        </Text>
      </View>
      <View style={styles.section}>
        <Pressable>
          <Text style={styles.linkText}>Change your email address</Text>
        </Pressable>
        <Text style={{ lineHeight: 18, letterSpacing: 1, marginTop: 4 }}>
          Fugiat Lorem id magna enim commodo do esse exercitation anim voluptate
          ullamco ipsum ullamco.
        </Text>
      </View>
      <View style={styles.section}>
        <Pressable>
          <Text style={styles.linkText}>
            Editiing phone numbers on your account
          </Text>
        </Pressable>
        <Text style={{ lineHeight: 18, letterSpacing: 1, marginTop: 4 }}>
          Fugiat Lorem id magna enim commodo do esse exercitation anim voluptate
          ullamco ipsum ullamco.
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
          <Text style={styles.linkText}>Merging multiple accounts</Text>
        </Pressable>
        <Text style={{ lineHeight: 18, letterSpacing: 1, marginTop: 4 }}>
          Fugiat Lorem id magna enim commodo do esse exercitation anim voluptate
          ullamco ipsum ullamco.
        </Text>
      </View>
      <View style={styles.section}>
        <Pressable>
          <Text style={styles.linkText}>Change or reset your password</Text>
        </Pressable>
        <Text style={{ lineHeight: 18, letterSpacing: 1, marginTop: 4 }}>
          Fugiat Lorem id magna enim commodo do esse exercitation anim voluptate
          ullamco ipsum ullamco.
        </Text>
      </View>
      <View style={styles.lastSection}>
        <Pressable>
          <Text style={styles.linkText}>
            Deactivating or deleting your account
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

export default Account;

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
