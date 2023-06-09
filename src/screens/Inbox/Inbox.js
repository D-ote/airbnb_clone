import { StyleSheet, View } from "react-native";
import React from "react";
import FirstScreen from "../../components/firstScreen/FirstScreen";
import { HEIGHT } from "../../utils/Constants";
import LoginModal from "../../components/loginModal/LoginModal";

const Inbox = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FirstScreen
        header={"Inbox"}
        subHeader={"Log in to see messages"}
        body={"Once you log in, you'll find messages from hosts here."}
        onPress={() => navigation.navigate("LoginStack")}
      />
    </View>
  );
};

export default Inbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    marginTop: HEIGHT * 0.09,
  },
});
