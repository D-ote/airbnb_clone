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
import { navigate } from "../utils/NavigationRef";

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
    onPress: "https://www.airbnb.co.uk/help/article/2908",
  },
  {
    id: 4,
    name: "Privacy policy",
    extra: <Entypo name="chevron-small-right" size={24} color="black" />,
    onPress: "https://www.airbnb.co.uk/help/article/2908",
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
      onPress: () =>
        navigate("ProfileStack", {
          screen: "HelpStack",
          params: {
            screen: "GuestStack",
            params: {
              screen: "GettingStartedGuest",
            },
          },
        }),
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
      onPress: () =>
        navigate("ProfileStack", {
          screen: "HelpStack",
          params: {
            screen: "GuestStack",
            params: {
              screen: "GuestAccount",
            },
          },
        }),
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
      onPress: () =>
        navigate("ProfileStack", {
          screen: "HelpStack",
          params: {
            screen: "GuestStack",
            params: {
              screen: "Reservation",
            },
          },
        }),
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
      onPress: () =>
        navigate("ProfileStack", {
          screen: "HelpStack",
          params: {
            screen: "GuestStack",
            params: {
              screen: "AirCover",
            },
          },
        }),
    },
    {
      id: 5,
      name: "Browse all topics",
      onPress: () =>
        navigate("ProfileStack", {
          screen: "HelpStack",
          params: {
            screen: "GuestStack",
            params: {
              screen: "BrowseGuestTopics",
            },
          },
        }),
    },
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

export const SearchandBooking = [
  { id: 1, name: "Search tips" },
  { id: 2, name: "Booking places to stay" },
  { id: 3, name: "Booking Airbnb Experiences" },
  { id: 4, name: "Booking business travel and events" },
  { id: 5, name: "Booking Airbnb.org stays" },
  { id: 6, name: "Messaging" },
];

export const YourReservations = [
  { id: 1, name: "Reservation status" },
  { id: 2, name: "Changes" },
  { id: 3, name: "Cancellations" },
  { id: 4, name: "Checking in" },
  { id: 5, name: "Preparing for an Airbnb Experience" },
  { id: 6, name: "Troubleshooting" },
];

export const Payments = [
  { id: 1, name: "Paying for a reservation" },
  { id: 2, name: "Refunds" },
  { id: 3, name: "Pricing and fees" },
  { id: 4, name: "Coupons, credits, and gift cards" },
  { id: 5, name: "Invoices and receipts" },
  { id: 6, name: "Taxes" },
];

export const YourAccount = [
  { id: 1, name: "Creating an account" },
  { id: 2, name: "Managing your account" },
  { id: 3, name: "ID and verification" },
  { id: 4, name: "Account security" },
  { id: 5, name: "Reviews" },
];

export const SafetynAccessibility = [
  { id: 1, name: "Safety concerns" },
  { id: 2, name: "Safety tips and guidelines" },
  { id: 3, name: "Reporting issues" },
  { id: 4, name: "Government travel restrictions and advisories" },
];

export const AboutAirbnb = [
  { id: 1, name: "Getting started" },
  { id: 2, name: "How Airbnb works" },
  { id: 3, name: "Our community policies" },
  { id: 4, name: "Partnerships" },
];

export const CommunityPolicyExpectations = [
  { id: 1, name: "Safety" },
  { id: 2, name: "Privacy" },
  { id: 3, name: "Anti-discrimination and accessibility" },
  { id: 4, name: "Account authenticity" },
  { id: 5, name: "Content and reviews" },
  { id: 6, name: "Community expectations" },
  { id: 7, name: "Cancellations and refunds" },
  { id: 8, name: "Payments and payouts" },
  { id: 9, name: "Hosting stays" },
  { id: 10, name: "Hosting Experiences" },
];

export const SafetyTipsnGuidelines = [
  { id: 1, name: "General safety tips" },
  { id: 2, name: "For guests on stays" },
  { id: 3, name: "For gursts on experiences" },
  { id: 4, name: "For hosts" },
];
