import { useState } from "react";
import ToggleBtn from "../components/toggleBtn/ToggleBtn";
import {
  Ionicons,
  Octicons,
  AntDesign,
  FontAwesome,
  Entypo,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

export const CurrencyList = [
  { id: 1, currency: "Australian dollar", short: "AUS", symbol: "$" },
  { id: 2, currency: "Brazilian real", short: "BRL", symbol: "R$" },
  { id: 3, currency: "Canadian dollar", short: "CAD", symbol: "$" },
  { id: 4, currency: "Columbian peso", short: "COP", symbol: "$" },
  { id: 5, currency: "Pound sterling", short: "GBP", symbol: "£" },
];

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

export const TabHeaderNames = [
  { id: 1, name: "Guest" },
  { id: 2, name: "Host" },
  { id: 3, name: "Experience Host" },
  { id: 4, name: "Travel Admin" },
];

export const Content = {
  1: [
    {
      id: 1,
      header: "Guides for getting started",
      icon: (
        <Ionicons
          name="hand-right-outline"
          size={24}
          color="black"
          style={{
            transform: [{ rotate: "45deg" }],
            marginRight: 10,
          }}
        />
      ),
      name: "Getting started with Airbnb",
      onPress: "GettingStarted",
    },
    {
      id: 2,
      icon: (
        <Ionicons
          name="person-outline"
          size={24}
          color="black"
          style={{ marginRight: 10 }}
        />
      ),
      name: "Accessing your account",
      onPress: "Account",
    },
    {
      id: 3,
      icon: (
        <Octicons
          name="calendar"
          size={24}
          color="black"
          style={{ marginRight: 10 }}
        />
      ),
      name: "Help with a reservation",
      onPress: "Reservation",
    },
    {
      id: 4,
      icon: (
        <AntDesign
          name="home"
          size={24}
          color="black"
          style={{ marginRight: 10 }}
        />
      ),
      name: "Getting started through AirCover",
      onPress: "ThirdParty",
    },
    { id: 5, name: "Browse all topics" },
  ],
  2: [
    {
      id: 1,
      header: "Guides for getting started",
      icon: (
        <Ionicons
          name="hand-right-outline"
          size={24}
          color="black"
          style={{
            transform: [{ rotate: "45deg" }],
            marginRight: 10,
          }}
        />
      ),
      name: "Getting started wuth Airbnb",
      onPress: "Settings",
    },
    {
      id: 2,
      icon: (
        <Ionicons
          name="person-outline"
          size={24}
          color="black"
          style={{ marginRight: 10 }}
        />
      ),
      name: "Accessing your account",
      onPress: "Accessibility",
    },
    {
      id: 3,
      icon: (
        <AntDesign
          name="home"
          size={24}
          color="black"
          style={{ marginRight: 10 }}
        />
      ),
      name: "Help with hosting",
      onPress: "Help",
    },
    {
      id: 4,
      icon: (
        <FontAwesome
          name="money"
          size={24}
          color="black"
          style={{ marginRight: 10 }}
        />
      ),
      name: "Getting started through AirCover",
      onPress: "ThirdParty",
    },
    { id: 5, name: "Browse all topics" },
  ],
  3: [
    {
      id: 1,
      header: "Guides for experience Hosts",
      icon: (
        <FontAwesome
          name="money"
          size={24}
          color="black"
          style={{ marginRight: 10 }}
        />
      ),
      name: "Getting paid",
      onPress: "Settings",
    },
    {
      id: 2,
      icon: (
        <Octicons
          name="calendar"
          size={24}
          color="black"
          style={{ marginRight: 10 }}
        />
      ),
      name: "Managing your Experience",
      onPress: "Accessibility",
    },
    {
      id: 3,
      icon: (
        <MaterialCommunityIcons
          name="cancel"
          size={24}
          color="black"
          style={{ marginRight: 10 }}
        />
      ),
      name: "Changes and Cancellations",
      onPress: "Help",
    },
    {
      id: 4,
      icon: (
        <Ionicons
          name="people-outline"
          size={24}
          color="black"
          style={{ marginRight: 10 }}
        />
      ),
      name: "How Co-Hosting works",
      onPress: "ThirdParty",
    },
    { id: 5, name: "Browse all topics" },
  ],
  4: [
    {
      id: 1,
      header: "Guides for travel admins",
      icon: (
        <Entypo
          name="laptop"
          size={24}
          color="black"
          style={{ marginRight: 10 }}
        />
      ),
      name: "Getting started with Airbnb for work",
      onPress: "Settings",
    },
    {
      id: 2,
      icon: (
        <MaterialCommunityIcons
          name="view-dashboard-outline"
          size={24}
          color="black"
          style={{ marginRight: 10 }}
        />
      ),
      name: "Using your dashboard",
      onPress: "Accessibility",
    },
    {
      id: 3,
      icon: (
        <Octicons
          name="calendar"
          size={24}
          color="black"
          style={{ marginRight: 10 }}
        />
      ),
      name: "How booking and reservations work",
      onPress: "Help",
    },
    {
      id: 4,
      icon: (
        <SimpleLineIcons
          name="credit-card"
          size={24}
          color="black"
          style={{ marginRight: 10 }}
        />
      ),
      name: "Help with billing",
      onPress: "ThirdParty",
    },
    { id: 5, name: "Browse all topics" },
  ],
};
