import { StyleSheet, View } from "react-native";
import React from "react";
import { HEIGHT } from "../../utils/Constants";
import FirstScreen from "../../components/firstScreen/FirstScreen";

const Wishlist = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FirstScreen
        header={"Wishlist"}
        subHeader={"Log in to view your wishlists"}
        body={"You can create, view, or edit wishlists once you've logged in."}
        onPress={() => navigation.navigate("LoginStack")}
      />
    </View>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    marginTop: HEIGHT * 0.09,
  },
});
