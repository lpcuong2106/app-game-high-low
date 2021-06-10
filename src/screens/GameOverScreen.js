import React from 'react'
import { View , Button, Image, StyleSheet} from 'react-native'
import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'
import { Colors } from '../constants'

function GameOverScreen(props) {
    return (
      <View style={styles.screen}>
          <TitleText>The Game is Over!</TitleText>
          <View style={styles.imageContainer}>
          <Image source={require('../../assets/success.png')} style={styles.image} resizeMode="cover"/>

          </View>
          <View style={styles.resultContainer}>
          <BodyText>Number of round: <Text style={styles.hightLight}>{props.roundsNumber}</Text>{props.roundsNumber}</BodyText>
          <BodyText>Number was: <Text style={styles.hightLight}>{props.userNumber}</Text></BodyText>
          </View>
        
          <Button title="New Game" onPress={props.onRestart}/>
      </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: '80%',
        height: 300,
        borderRadius: 200,
        borderColor: 'black',
        borderWidth: 3,
        overflow: 'hidden'
    }, 
    resultContainer: {
        marginVertical: 20,
    },  
    image: {
        width: '100%',
        height: '100%',
    },
    hightLight: {
        color: Colors.primary,
        fontFamily: 'open-sans'
    }
})
export default GameOverScreen
