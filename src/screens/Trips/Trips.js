import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import FirstScreen from "../../components/firstScreen/FirstScreen";
import { HEIGHT } from "../../utils/Constants";
import LoginModal from "../../components/loginModal/LoginModal";

const Trips = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.container}>
      <FirstScreen
        header={"Trips"}
        subHeader={"No trips yet"}
        body={"When you're ready to plan your next trip, we're here to help."}
        onPress={() => setIsVisible(!isVisible)}
      />
      <LoginModal
        isVisible={isVisible}
        setIsVisible={() => setIsVisible(!isVisible)}
      />
    </View>
  );
};

export default Trips;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    marginTop: HEIGHT * 0.09,
  },
});
