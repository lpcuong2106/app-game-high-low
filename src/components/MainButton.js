import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text} from 'react-native'
import { Colors } from '../constants'

const MainButton = (props) => {
 return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>{props.children} {props.title}</Text>
        </View>
    </TouchableOpacity>
 )
}

const styles = StyleSheet.create({
    buttonText: {
        color: 'white'
    },
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        fontFamily: 'open-sans',
        borderRadius: 10,
    }
})
export default MainButton;