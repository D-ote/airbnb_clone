import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { HEIGHT } from "../../utils/Constants";
import FirstScreen from "../../components/firstScreen/FirstScreen";
import LoginModal from "../../components/loginModal/LoginModal";

const Wishlist = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.container}>
      <FirstScreen
        header={"Wishlist"}
        subHeader={"Log in to view your wishlists"}
        body={"You can create, view, or edit wishlists once you've logged in."}
        onPress={() => setIsVisible(!isVisible)}
      />
      <LoginModal
        isVisible={isVisible}
        setIsVisible={() => setIsVisible(!isVisible)}
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
