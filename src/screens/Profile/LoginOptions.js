import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Feather,
  SimpleLineIcons,
  AntDesign,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import CustomButton from "../../components/button/Button";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import { emailValidationSchema } from "../../utils/ValidationSchema";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import LoginModal from "../../components/loginModal/LoginModal";
import ExistingAccount from "./ExistingAccount";

const Content = [
  {
    id: 1,
    icon: <SimpleLineIcons name="envelope" size={24} color="black" />,
    text: "Continue with email",
    onPress: "email",
  },
  {
    id: 5,
    icon: <Ionicons name="phone-portrait-outline" size={24} color="black" />,
    text: "Continue with Phone",
    onPress: "phone",
  },
  {
    id: 2,
    icon: <AntDesign name="apple1" size={24} color="black" />,
    text: "Continue with Apple",
    onPress: "apple",
  },
  {
    id: 3,
    icon: <AntDesign name="google" size={24} color="black" />,
    text: "Continue with Google",
    onPress: "google",
  },
  {
    id: 4,
    icon: <MaterialIcons name="facebook" size={24} color="black" />,
    text: "Continue with Facebook",
    onPress: "facebook",
  },
];

const LoginOptions = () => {
  const [number, onChangeNumber] = useState("");
  const [emailState, setEmailState] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [inputField, setInputField] = useState("phone");
  const [disabledState, setDisabledState] = useState(true);
  const loginRef = useRef(null);
  const sheetRef = useRef(null);

  const snapPoints = ["60%"];

  const navigation = useNavigation();

  const handleEmail = (text) => {
    loginRef?.current?.setFieldTouched("email");
    loginRef?.current?.setFieldValue("email", text);
    setEmailState(text);
  };

  const renderItem = ({ item }) => (
    <Pressable
      style={styles.loginMedium}
      onPress={() => setInputField(item.onPress)}
    >
      <View style={{ marginRight: 80 }}>{item.icon}</View>
      <Text>{item.text}</Text>
    </Pressable>
  );

  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);

  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  const submitDetails = (data) => {
    setIsVisible(true);
    // navigation.navigate("LoginStack", {
    //   screen: "ExistingAccount",
    // });
    // handleSnapPress(0);
  };

  useEffect(() => {
    if (emailState?.length > 0) {
      setDisabledState(false);
    }
  }, [emailState]);

  return (
    <>
      <View style={[styles.loginModal, { opacity: isVisible ? 0.08 : 1 }]}>
        <ScrollView>
          {inputField == "phone" && (
            <>
              <View style={styles.modalInfo}>
                <View style={styles.inputField}>
                  <Pressable
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      borderBottomColor: "#B0A4A4",
                      borderBottomWidth: 0.8,
                      padding: 10,
                    }}
                    onPress={() => {
                      navigation.navigate("CountryModal");
                    }}
                  >
                    <View>
                      <Text style={{ fontSize: 12, fontWeight: 200 }}>
                        Country/Region
                      </Text>
                      <Text style={{ fontSize: 16, marginTop: 6 }}>
                        United Kingdom (+44)
                      </Text>
                    </View>
                    <Feather name="chevron-down" size={24} color="black" />
                  </Pressable>
                  <TextInput
                    style={styles.phoneInput}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Phone number"
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <View style={{ padding: 20 }}>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 300,
                    marginBottom: 20,
                    lineHeight: 16,
                  }}
                >
                  We'll call or text you to confirm your number. Standard
                  message and data rates apply.
                </Text>
                <CustomButton title={"Continue"} />
              </View>
            </>
          )}
          <Formik
            initialValues={{
              email: "",
            }}
            onSubmit={(d) => submitDetails(d)}
            validationSchema={emailValidationSchema}
            innerRef={loginRef}
          >
            {({ values, errors, touched, setFieldValue, setFieldTouched }) => (
              <>
                {inputField == "email" && (
                  <View style={{ padding: 20 }}>
                    <View
                      style={{
                        marginBottom: 20,
                      }}
                    >
                      <TextInput
                        style={styles.emailInput}
                        onChangeText={(text) => handleEmail(text)}
                        value={values?.email}
                        placeholder="Email"
                      />
                      {touched.email && errors.email && (
                        <View style={styles.errorField}>
                          <Ionicons
                            name="close-circle-outline"
                            size={12}
                            color="#F13B3B"
                          />
                          <Text
                            style={{
                              fontSize: 12,
                              marginLeft: 4,
                              color: "#F13B3B",
                            }}
                          >
                            {errors.email}
                          </Text>
                        </View>
                      )}
                    </View>
                    <CustomButton
                      disabled={disabledState}
                      title={"Continue"}
                      onPress={() => loginRef?.current?.handleSubmit()}
                    />
                  </View>
                )}
              </>
            )}
          </Formik>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginVertical: 14,
              flexDirection: "row",
            }}
          >
            <View style={{ marginBottom: 8 }}>
              <Text style={{ fontWeight: 100 }}>_____________________</Text>
            </View>
            <Text style={{ fontWeight: 600, paddingHorizontal: 8 }}>or</Text>
            <View style={{ marginBottom: 8 }}>
              <Text style={{ fontWeight: 100 }}>_____________________</Text>
            </View>
          </View>
          <View style={{ padding: 20 }}>
            <FlatList
              data={
                inputField == "phone"
                  ? Content.slice(0, 4)
                  : Content.slice(1, 5)
              }
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </ScrollView>
      </View>
      <ExistingAccount
        isVisible={isVisible}
        setIsVisible={() => setIsVisible(!isVisible)}
      />
      {/* <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        onChange={handleClosePress}
        enablePanDownToClose={true}
      >
        <BottomSheetView>
          <Text>Awesome 🔥</Text>
        </BottomSheetView>
      </BottomSheet> */}
    </>
  );
};

export default LoginOptions;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 36,
    fontWeight: 500,
  },
  body: {
    marginTop: 40,
  },
  subHeader: {
    fontSize: 24,
    fontWeight: 500,
  },
  bodyText: {
    lineHeight: 22,
    marginTop: 10,
    fontSize: 15,
    fontWeight: 300,
  },
  btn: {
    backgroundColor: "#e91e63",
    padding: 8,
    borderRadius: 8,
    marginTop: 40,
    width: "30%",
  },
  modalHeader: {
    alignItems: "center",
    borderBottomWidth: 0.4,
    borderBottomColor: "#957777",
    padding: 18,
  },
  loginModal: {
    backgroundColor: "#fff",
    flex: 1,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
  },
  modalInfo: {
    padding: 20,
    paddingBottom: 0,
  },
  inputField: {
    borderColor: "#B0A4A4",
    borderWidth: 1,
    borderRadius: 8,
  },
  phoneInput: {
    paddingVertical: 16,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  emailInput: {
    paddingVertical: 16,
    paddingHorizontal: 10,
    fontSize: 14,
    borderColor: "#B0A4A4",
    borderWidth: 1,
    borderRadius: 8,
    textTransform: "lowercase",
  },
  loginMedium: {
    borderRadius: 8,
    borderWidth: 0.4,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },
  errorField: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
});
