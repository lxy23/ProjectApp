import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Contact from "./src/screens/Contact";
import Detail from "./src/screens/Detail";
import { TouchableOpacity, Text } from "react-native";
import Feather from "react-native-vector-icons/Feather";

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerLeft: () => (
                        <TouchableOpacity style={{ width: 30, height: 30, marginHorizontal: 5 }}>
                            <Feather name={"search"} size={30} color={"#ff8c00"} />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity style={{ width: 30, height: 30, marginHorizontal: 5 }}>
                            <Feather name={"plus"} size={30} color={"#ff8c00"} />
                        </TouchableOpacity>
                    ),
                }}
                initialRouteName={"Contact"}
            >
                <Stack.Screen name="Contact" component={Contact} />
                <Stack.Screen
                    name="Detail"
                    component={Detail}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
