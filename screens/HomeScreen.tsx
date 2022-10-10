import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "react-native-paper";
import { useFonts } from 'expo-font';
import Crypto from "../components/Crypto";

const user_logo = "../assets/images/user_logo.png";

export const HomeScreen = () => {

  const [fontsLoaded] = useFonts({
    'ClashDisplayMedium': require('../assets/fonts/ClashDisplay-Medium.otf'),
    'ClashDisplay': require('../assets/fonts/ClashDisplay-Regular.otf'),
    'ClashDisplaySemiBold': require('../assets/fonts/ClashDisplay-Semibold.otf'),
  });
  if (!fontsLoaded) {
    return null;
  }

  const onPress = () => {
    console.log("button pressed");
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.title}>
          <Text style={styles.welcome}>Welcome Sourabh!</Text>
          <Image source={require(user_logo)} style={styles.user} />
        </View>

        <LinearGradient
          colors={["#CC95C0", "#dbd4b4", "#edde5d"]}
          end={{ x: 1.0, y: 0.5 }}
          style={styles.box1}
        >
          <View style={styles.textContainer}>
            <Text style={styles.text1}>Start gifting gifts that growwww!</Text>
          </View>
          <Image source={require("../assets/images/rocket.png")} style={styles.rocket_logo} />
        </LinearGradient>

        <View style={{ borderBottomColor: "#333333", borderBottomWidth: 1, marginTop: 160, }} />

        <View style={styles.box2}>
          <Text style={{ fontFamily: 'ClashDisplay', lineHeight: 20, color: "white" }}>
            See how Regalo works
          </Text>
          <Text style={{ fontFamily: 'ClashDisplay', lineHeight: 19, fontSize: 14, color: "#999999", }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Button
            style={styles.button}
            onPress={onPress}
            labelStyle={{ color: "black", fontFamily: 'ClashDisplayMedium' }}
          >
            Watch Videos
          </Button>
        </View>

        <View style={styles.box3}>
          <Text style={{ color: "white", fontFamily: 'ClashDisplay' }}>
            Explore Assets
          </Text>
          <Button
            labelStyle={{ color: "#FFD43A", fontSize: 14, fontWeight: "300" }}
            style={{ flexDirection: 'row', paddingTop: 5 }}
            onPress={onPress}
          >
            <Text>View All</Text>
            <Text style={{ fontSize: 20 }}>→</Text>
          </Button>
        </View>

        <Crypto />

      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 55,
    backgroundColor: "#0D0D0D",
  },
  title: {
    flexDirection: "row",
    paddingHorizontal: 24,
    justifyContent: "space-between",
    alignItems: 'center',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#333333",
  },
  welcome: {
    color: "#ffd43a",
    fontSize: 18,
    fontFamily: "ClashDisplayMedium",
  },
  user: {
    boxSizing: "border-box",
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#ffd43a",
  },
  box1: {
    flexDirection: "row",
    boxSizing: "border-box",
    paddingHorizontal: 14,
    paddingVertical: 50,
    marginHorizontal: 30,
    borderRadius: 12,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255,212,58,0.54)",
    position: "absolute",
    width: 352,
    height: 85,
    top: 91,
  },
  textContainer: {
    position: "absolute",
    left: 18,
    top: 10,
    width: 240,
    height: 60,
  },
  text1: {
    color: "#4B001F",
    fontSize: 20,
    fontWeight: "500",
    fontFamily: 'ClashDisplayMedium'
  },
  rocket_logo: {
    position: "absolute",
    top: -14.35,
    left: 281.13,
    width: 52.6,
    height: 145.01,
    transform: [{ rotateZ: "65deg" }],
  },
  box2: {
    boxSizing: "border-box",
    alignItems: "flex-start",
    padding: 16,
    width: 352,
    height: 153,
    backgroundColor: "#1a1a1a",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#333333",
    borderRadius: 12,
    marginTop: 26,
    marginHorizontal: 30,
  },
  button: {
    backgroundColor: "#dacea5",
    color: "black",
    width: 150,
    height: 40,
    marginTop: 12,
    borderRadius: 8,
  },
  box3: {
    flexDirection: "row",
    paddingHorizontal: 24,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: "space-between",
    marginBottom: 5,
  },
});