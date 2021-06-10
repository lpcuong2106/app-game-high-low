import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import { Colors } from "../constants";
import Card from "../components/Card";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

const StartGame = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/, ""));
  };
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleReset = () => {
    setEnteredValue("");
    setConfirm(false);
  };

  const confirmInputHandle = () => {
    const chooseNumber = parseInt(enteredValue);
    if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber >= 99) {
      Alert.alert("Invalid number!", "Number has to be a number 1 and 99", [
        { text: "Okey", style: "destructive", onPress: handleReset },
      ]);
      setEnteredValue("");
      setConfirm(false);
    } else {
      setConfirm(true);
      setSelectedNumber(chooseNumber);
      setEnteredValue("");
    }
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.screen}>
        <TitleText style={{ marginVertical: 10}}>Start Game Screen</TitleText>
        <Card style={styles.inputContainer}>
          <BodyText>Select a number</BodyText>
          <Input
            style={styles.input}
            value={enteredValue}
            onChangeText={numberInputHandler}
            burOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            maxLength={2}
            keyboardType="number-pad"
          />
          <View style={styles.buttonContainer}>
            <Button
              title="Reset"
              style={styles.button}
              onPress={handleReset}
              color={Colors.accent}
            />
            <Button
              title="Confirm"
              style={styles.button}
              onPress={confirmInputHandle}
              color={Colors.primary}
            />
          </View>
        </Card>
        {confirm && (
          <Card style={styles.summaryContainer}>
            <Text>You selected</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <Button title="START GAME" onPress={() => props.onStartGame(selectedNumber)} />
          </Card>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
		padding: 10,
    alignItems: 'center',
   
  },
	inputContainer: {
		width: '100%',
		alignItems: 'center'
	},
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 10,
  },
  input: {
    width: 100,
    textAlign: "center",
  },
  summaryContainer: {
    marginTop: 10,
		alignItems: 'center'
  },
});
export default StartGame;
