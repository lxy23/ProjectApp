import React, { useEffect, useRef, useState } from "react";
import {View,Text,TextInput} from "react-native";
import Svg, { Circle } from "react-native-svg";
const Detail = ({ route, navigation }) =>{

    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);

    const [firstName, setFistName] = useState(route.params.firstname);
    const [lastName, setLastName] = useState(route.params.lastname);
    const [email, setEmail] = useState(route.params.email);
    const [phone, setPhone] = useState(route.params.phone);

    const InputList = ({ name, ref, value, onChange }) => (
        <View style={{ flexDirection: 'row', height: 30, width: '100%', alignItems: 'center', marginVertical: 10 }}>
            <Text style={{ fontSize: 20 }}>{name}</Text>
            <TextInput
                ref={ref}
                style={{
                    height: 40,
                    width: "70%",
                    margin: 12,
                    borderRadius: 5,
                    borderWidth: 1,
                    padding: 10,
                }}
                onChangeText={text => onChange(text)}
                value={value}
                returnKeyType={"next"}
                onSubmitEditing={() => {
                    if (name === "First Name") {
                        lastNameRef.current?.focus();
                    } else if (name === "Last Name") {
                        emailRef.current?.focus();
                    } else if (name === "Email") {
                        phoneRef.current?.focus();
                    }
                }}
            />
        </View>
    );


    return(
        <View style={{ flex: 1 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Svg height={200} width={200}>
                    <Circle
                        cx={100}
                        cy={100}
                        r={80}
                        fill={'#ff8c00'}
                    />
                </Svg>
            </View>

            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Main Information</Text>
                <InputList name={'First Name'} ref={firstNameRef} value={firstName} onChange={setFistName} />
                <InputList name={'Last Name'} ref={lastNameRef} value={lastName} onChange={setLastName} />

                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Sub Information</Text>
                <InputList name={'Email'} ref={emailRef} value={email} onChange={setEmail} />
                <InputList name={'Phone'} ref={phoneRef} value={phone} onChange={setPhone} />
            </View>
        </View>
    )

}

export default Detail
