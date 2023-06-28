import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, TouchableOpacity, View, RefreshControl } from "react-native";
import Svg, { Circle } from "react-native-svg";
import axios from 'axios';

const Contact = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get('http://localhost:3030/user')
            .then(res => {
                setData(res.data);
            })
            .catch(error => {
                console.log("Error fetching data:", error);
            })
            .finally(() => {
                setRefreshing(false);
            });
    };

    const onRefresh = () => {
        setRefreshing(true);
        fetchData();
    };

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

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <ListItem item={item} />
                )}
                keyExtractor={item => item.id}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            />
        </SafeAreaView>
    );
};

export default Contact;
