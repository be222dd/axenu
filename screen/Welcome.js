import React from 'react'
import { View, Text, Dimensions, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Colors from '../constants/Colors';
import baseStyles from './../constants/baseStyles'
const { width, height } = Dimensions.get("window")

const Welcome = (props) => {
    return (
        <View style={styles.container}>
            <Text style={{ ...baseStyles.baseTextStyle, fontSize: 30 }}>Welcome to</Text>
            <Text style={{ ...baseStyles.baseTextStyle, fontSize: 34 }}>Yet another Image Editor</Text>
            <Image source={require("../assets/camera.png")} resizeMode="contain" style={styles.img} />
            <Text style={{ ...baseStyles.baseTextStyle, fontSize: 18 }}>To give your Images great Sephia filters! </Text>
            <Text style={{ ...baseStyles.baseTextStyle, fontSize: 20 }}> Let's Start!</Text>
            < TouchableOpacity style={styles.button} onPress={() => { props.navigation.navigate("ImageEditor") }}>
                <Text style={{ ...baseStyles.baseTextStyle, fontSize: 25 }}>Next</Text>
            </TouchableOpacity >
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-around", flex: 1, marginHorizontal: 25
    },
    img: {
        width: width * .9, height: height * .4, alignSelf: "center"
    },
    button: {
        alignSelf: "center", borderRadius: 15, backgroundColor: Colors.lightBlueColor, width: 150, height: 50, justifyContent: "center"
    }

})

export default Welcome

