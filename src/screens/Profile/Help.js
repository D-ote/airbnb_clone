import {
  Button,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { Ionicons, Feather } from "@expo/vector-icons";
import { HEIGHT } from "../../utils/Constants";
import SearchModal from "../../components/searchModal/SearchModal";
import TopTabs from "../../components/toptabs/TopTabs";
import LoginModal from "../../components/loginModal/LoginModal";

const ExploreList = [
  {
    id: 1,
    headerText: "Our community policies",
    bodyText: "How we build a foundation of trust",
    onPress: "PoliciesStack",
  },
  {
    id: 2,
    headerText: "Safety tips and guidlines",
    bodyText: "Resources to help travellers stay safe.",
    onPress: "SafetyTipsStack",
  },
];

const Help = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <View style={StyleSheet.absoluteFill}>
      <ScrollView>
        <View style={{ marginTop: HEIGHT * 0.04, paddingHorizontal: 16 }}>
          <Text style={{ fontWeight: "bold", fontSize: 26 }}>
            Hi, how can we help?
          </Text>
        </View>
        <View style={{ marginTop: 24, paddingHorizontal: 16 }}>
          <Pressable style={styles.search} onPress={() => setIsVisible(true)}>
            <Feather name="search" size={20} color="#e91e63" />
            <Text style={{ marginLeft: 8, fontWeight: 500, fontSize: 16 }}>
              Search help
            </Text>
          </Pressable>
        </View>
        <TopTabs navigation={navigation} />
        <View style={{ backgroundColor: "#000", padding: 16 }}>
          <Text
            style={{
              color: "#fff",
              fontWeight: 500,
              fontSize: 22,
              marginTop: 10,
            }}
          >
            Explore more
          </Text>
          <FlatList
            data={ExploreList}
            renderItem={({ item }) => (
              <Pressable
                style={styles.exploreStyle}
                onPress={() => navigation.navigate(item.onPress)}
              >
                <View style={styles.imgContainer}>
                  <Image
                    source={require("../../../assets/tourists.jpeg")}
                    style={styles.img}
                  />
                </View>
                <View style={styles.exploreText}>
                  <Text
                    style={{ color: "#fff", fontWeight: 600, fontSize: 16 }}
                  >
                    {item.headerText}
                  </Text>
                  <Text style={{ color: "#fff", marginTop: 6 }}>
                    {item.bodyText}
                  </Text>
                </View>
              </Pressable>
            )}
            keyExtractor={(item) => item.id}
          />
          <View style={{ marginTop: 44 }}>
            <Text style={{ color: "#fff", fontWeight: 600, fontSize: 18 }}>
              Need to get in touch?
            </Text>
            <Text style={{ color: "#fff", marginTop: 10, fontSize: 15 }}>
              We'll start with some questions and get you to the right place.
            </Text>
          </View>
          <View style={styles.button}>
            <Button
              title="Contact us"
              color={"#000"}
              onPress={() => setIsLoggedIn(!isLoggedIn)}
            />
          </View>
        </View>
      </ScrollView>

      <SearchModal
        isVisible={isVisible}
        setIsVisible={() => setIsVisible(!isVisible)}
      />
      <LoginModal
        isVisible={isLoggedIn}
        setIsVisible={() => setIsLoggedIn(!isLoggedIn)}
      />
    </View>
  );
};

export default Help;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DDDDDD",
    borderRadius: 50,
    padding: 12,
  },
  exploreStyle: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#454545",
    marginTop: 18,
  },
  imgContainer: {
    width: 80,
    height: 80,
  },
  img: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  exploreText: {
    padding: 12,
  },
  button: {
    backgroundColor: "#fff",
    width: "100%",
    alignSelf: "center",
    borderRadius: 8,
    marginVertical: 40,
    padding: 8,
  },
});
