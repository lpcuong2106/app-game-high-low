import React from 'react'
import {Text, StyleSheet} from 'react-native'


const BodyText = (props) => {
 return (
         <Text {...props} style={styles.style}>{props.children}</Text>
 )
}

const styles = StyleSheet.create({
    style: {
        fontFamily: 'open-sans'
    }
})
export default BodyText;