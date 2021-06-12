import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  ScrollView,
  Dimensions
} from "react-native";
import Card from "../components/Card";
import MainButton from "../components/MainButton";
import NumberContainer from "../components/NumberContainer";
import { DefaultStyle } from "../constants";
import {Ionicons} from '@expo/vector-icons'
import BodyText from "../components/BodyText";

const renderListItem = (value, numberOfRound) => {
  return (
    <View key={numberOfRound} style={styles.listItem}>
      <BodyText># {numberOfRound}</BodyText>
      <BodyText>{value}</BodyText>
    </View>
  )
}
const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    const rndNum = Math.floor(Math.random() * (max - min) ) + min;
    if(rndNum === exclude){
        return generateRandomBetween(min, max, exclude);
    }else{
        return rndNum
    }
}

const GameScreen = (props) => {
  const initialGuess = generateRandomBetween(1 , 100, props.userChoice)
  const [ currentGuess, setCurrentGuess ] = useState(initialGuess)
  const [rounds, setRounds] = useState(0);
  const [passGuesses, setPastGuesses] = useState([initialGuess]);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = direction => {
    if (
      (direction === 'lower' && currentGuess < props.userChoice) ||
      (direction === 'greater' && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' }
      ]);
      return;
    }
    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setPastGuesses(curPastGuesses => [nextNumber, ...curPastGuesses])
    setRounds(curRounds => curRounds + 1);
  };

  return (
    <View style={styles.screen}>
        <Text style={DefaultStyle.title}>Opponent's guess</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card style={styles.buttonContainer}>
            <MainButton title="LOWER"   onPress={nextGuessHandler.bind(this, 'lower')}>
              <Ionicons name="md-remove" color="white" />
            </MainButton>
            <MainButton title="GREATER"  onPress={nextGuessHandler.bind(this, 'greater')}>
            <Ionicons name="md-add" color="white" />
            </MainButton>
        </Card>
        <View style={styles.list}>
            <ScrollView>
              {passGuesses.map((guess, index) => renderListItem(guess, passGuesses.length - index))}
            </ScrollView>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
      flex: 1,
      padding: 10,
      alignItems: 'center'
  },
  buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: Dimensions.get('window').height > 600 ? 20 : 10,
      width: 600,
      maxWidth: '90%'
  },
  list: {
    flex:1,
    padding: 10,
  },
  listItem: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around'
  }
});
export default GameScreen;
