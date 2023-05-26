import { useState } from "react";
import ToggleBtn from "../components/toggleBtn/ToggleBtn";
import { Ionicons, Entypo } from "@expo/vector-icons";

export const SettingsContent = [
  {
    id: 1,
    name: "Currency",
    extra: "GBP (£)",
    text: true,
    onPress: () => setIsVisible(!isVisible),
  },
  {
    id: 2,
    name: "Translation",
    sub: "Automatically translate descriptions and reviews to English.",
    extra: <ToggleBtn />,
  },
  {
    id: 3,
    name: "Terms of Service",
    extra: <Entypo name="chevron-small-right" size={24} color="black" />,
  },
  {
    id: 4,
    name: "Privacy policy",
    extra: <Entypo name="chevron-small-right" size={24} color="black" />,
  },
  { id: 5, name: "Version 23.20 (203419)" },
];
