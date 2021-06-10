import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";
import GameScreen from "./src/screens/GameScreen";
import StartGame from "./src/screens/StartGameScreen";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import GameOverScreen from "./src/screens/GameOverScreen";

const fetchFont = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFont}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectNumber) => {
    setUserNumber(selectNumber);
  };

  const gameOverHandler = (numberOfRound) => {
    setGuessRounds(numberOfRound);
  };

  return (
    <View style={styles.container}>
      <Header title="Guess a Number" />
      {userNumber && guessRounds <= 0 ? (
        <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
      ) : guessRounds > 0 ? (
        <GameOverScreen
          roundsNumber={guessRounds}
          userNumber={userNumber}
          onRestart={configureNewGameHandler}
        />
      ) : (
        <StartGame onStartGame={startGameHandler} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
