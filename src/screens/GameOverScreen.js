import React from "react";
import { View, Text, Button, Image, StyleSheet, ScrollView, Dimensions } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import { Colors } from "../constants";

function GameOverScreen(props) {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>The Game is Over!</TitleText>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/success.png")}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.resultContainer}>
          <BodyText>
            Number of round:{" "}
            <Text style={styles.hightLight}>{props.roundsNumber}</Text>
          </BodyText>
          <BodyText>
            Number was:{" "}
            <Text style={styles.hightLight}>{props.userNumber}</Text>
          </BodyText>
        </View>

        <Button title="New Game" onPress={props.onRestart} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.7,
    height:  Dimensions.get('window').width * 0.7,
    borderRadius: ( Dimensions.get('window').width * 0.7) / 2,
    borderColor: "black",
    borderWidth: 3,
    overflow: "hidden",
  },
  resultContainer: {
    marginVertical: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  hightLight: {
    color: Colors.primary,
    fontFamily: "open-sans",
  },
});
export default GameOverScreen;
