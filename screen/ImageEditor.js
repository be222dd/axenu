import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Colors from '../constants/Colors';
import ImagePicker from '../components/ImagePicker'
import baseStyles from './../constants/baseStyles'


const ImageEditor = (props) => {
    return (
        <View style={styles.container}>
            <ImagePicker ></ImagePicker>
            <TouchableOpacity style={styles.button} onPress={() => { props.navigation.navigate("Thanks") }}>
                <Text style={{ ...baseStyles.baseTextStyle, fontSize: 25 }}>Contact Me</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, marginHorizontal: 25, justifyContent: "space-between", paddingVertical: 50
    },
    button: {
        alignSelf: "center", borderRadius: 15, width: 150, height: 50, justifyContent: "center", backgroundColor: Colors.lightBlueColor
    }

})

export default ImageEditor;
