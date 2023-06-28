import React from 'react-native'
import { FlatList, SafeAreaView, Text, TouchableOpacity, View, RefreshControl } from "react-native";
import data from '../../data.json'
import Svg, { Circle } from "react-native-svg";

const Contact = ({ navigation }) =>{

    const ListItem = ({ item }) => (
        <TouchableOpacity
            style={{ height: 60, width: "100%", flexDirection: "row", alignItems: "center", marginTop: 5 }}
            onPress={() => navigation.navigate('Detail', {
                id: item.id,
                firstname: item.firstName,
                lastname: item.lastName,
                email: item.email,
                phone: item.phone,
                data: data
            })}
        >
            <Svg height={40} width={40} style={{ marginHorizontal: 10 }}>
                <Circle
                    cx={20}
                    cy={20}
                    r={20}
                    fill={"#ff8c00"}
                />
            </Svg>
            <Text style={{ fontSize: 22, alignSelf: "center" }}>{item.firstName} {item.lastName}</Text>
        </TouchableOpacity>
    );


    return(
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <ListItem item={item} />
                )}
                keyExtractor={item => item.id}

            />
        </SafeAreaView>
    )

}

export default Contact
