import React from "react";
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native";
import { Welcome, Thanks, ImageEditor } from "../screen";

const Stack = createStackNavigator();



const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome" screenOptions={{
                headerShown: true,
                cardStyle: { backgroundColor: "#fff" }
            }}>
                <Stack.Screen component={Welcome} name="Welcome" />
                <Stack.Screen component={Thanks} name="Thanks" />
                <Stack.Screen component={ImageEditor} name="ImageEditor" />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default Router