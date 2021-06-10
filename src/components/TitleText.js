import React from 'react'
import {Text, StyleSheet} from 'react-native'


const TitleText = (props) => {
 return (
    <Text {...props} style={{...styles.style, ...props.style}}>{props.children}</Text>
 )
}

const styles = StyleSheet.create({
    style: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        color: 'black'
    }
})
export default TitleText;