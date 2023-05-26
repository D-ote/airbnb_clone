import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";

const ToggleBtn = ({ disabled, turnon }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View>
      <Switch
        trackColor={{ false: "#f4f3f4", true: "#025464" }}
        thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
        ios_backgroundColor="#DDE6ED"
        onValueChange={toggleSwitch}
        value={turnon ? true : isEnabled}
        disabled={disabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ToggleBtn;
