import React from 'react'
import { View, Text, Dimensions, Image, StyleSheet } from 'react-native'
import Colors from '../constants/Colors'
import baseStyles from './../constants/baseStyles'
const { width, height } = Dimensions.get("window")


const Thanks = () => {
    return (
        <View style={styles.container}>
            <Text style={{ ...baseStyles.baseTextStyle, fontSize: 30 }}>For bug reports: </Text>
            <View style={styles.textContainer}>
                <Text style={{ ...baseStyles.baseTextStyle, fontSize: 30 }}>Github</Text>
                <Text style={{ ...baseStyles.baseTextStyle, fontSize: 30 }}>/be222dd </Text>
            </View>
            <Image source={require("../assets/thx.png")} resizeMode="contain" style={styles.img} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: "space-around", flex: 1, marginHorizontal: 25
    },
    textContainer: {
        flexDirection: "row", justifyContent: "space-around"
    },
    img: {
        width: width * .9, height: height * .4, alignSelf: "center"
    },
})
export default Thanks