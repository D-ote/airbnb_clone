import {
  Button,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { HEIGHT } from "../../utils/Constants";
import {
  Ionicons,
  Feather,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";

const Content = [
  {
    id: 1,
    icon: <Ionicons name="md-settings-outline" size={24} color="black" />,
    name: "Settings",
    onPress: "Settings",
  },
  {
    id: 2,
    icon: <Ionicons name="md-settings-outline" size={24} color="black" />,
    name: "Accessibility",
    onPress: "Accessibility",
  },
  {
    id: 3,
    icon: <AntDesign name="questioncircleo" size={24} color="black" />,
    name: "Get help",
    onPress: "HelpStack",
  },
  {
    id: 4,
    icon: <MaterialIcons name="lock-outline" size={24} color="black" />,
    name: "Third-party tools",
    onPress: "ThirdParty",
  },
];

const Index = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(false);

  const pic = "../../../assets/airbnb.png";
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Profile</Text>
      <Text style={styles.bodyText}>
        Log in to start planning your next trip.
      </Text>
      <View style={styles.btn}>
        <Button
          title="Log in"
          color={"#fff"}
          onPress={() => navigation.navigate("LoginStack")}
        />
      </View>
      <View marginTop={24} flexDirection="row">
        <Text>Don't have an account?</Text>
        <Pressable onPress={() => navigation.navigate("LoginStack")}>
          <Text style={styles.textStyle}> Sign up</Text>
        </Pressable>
      </View>
      <View style={styles.card}>
        <View style={styles.textCard}>
          <Text style={styles.cardHeaderText}>Airbnb your place</Text>
          <Text style={styles.cardBodyText}>
            It's simple to get set up and start earning.
          </Text>
        </View>
        <View style={styles.imgContainer}>
          <Image source={require(pic)} style={styles.img} />
        </View>
      </View>
      <View marginTop={24}>
        <FlatList
          data={Content}
          renderItem={({ item }) => (
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: pressed ? "#E8E8E8" : "#f0f0f0" },
                styles.content,
              ]}
              onPress={() => navigation.navigate(item.onPress)}
            >
              <View style={styles.first}>
                {item.icon}
                <Text style={{ fontSize: 16, marginLeft: 10, fontWeight: 300 }}>
                  {item.name}
                </Text>
              </View>
              <Feather name="chevron-right" size={24} color="black" />
            </Pressable>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    marginTop: HEIGHT * 0.09,
  },
  headerText: {
    fontSize: 36,
    fontWeight: 500,
  },
  bodyText: {
    fontSize: 16,
    fontWeight: 300,
    marginTop: 18,
  },
  btn: {
    backgroundColor: "#e91e63",
    padding: 8,
    borderRadius: 8,
    marginTop: 48,
  },
  textStyle: {
    textDecorationLine: "underline",
  },
  card: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 18,
    borderRadius: 8,
    borderColor: "transparent",
    backgroundColor: "#f8f8f8",
    shadowColor: "rgba(65, 105, 225, 0.15)",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
  },
  textCard: {
    width: "60%",
  },
  imgContainer: {
    width: 100,
    height: 80,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  cardHeaderText: {
    fontSize: 18,
    fontWeight: 600,
  },
  cardBodyText: {
    marginTop: 8,
    fontWeight: 200,
    lineHeight: 20,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#C8B6A6",
    borderBottomWidth: 0.8,
  },
  first: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  lineShadow: {
    borderWidth: 1,
    borderColor: "transparent",
    backgroundColor: "#ffffff",
    shadowColor: "rgba(65, 105, 225, 0.15)",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.75,
    shadowRadius: 2,
    elevation: 22,
  },
});
