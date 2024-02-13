import React, { useContext, useState } from "react";
import { Button, Text, TextInput } from "react-native-paper";
import { UserContext } from "./Contexts";
import { Alert, View } from "react-native";
import Style from "../styles/Style";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Icon from 'react-native-vector-icons/FontAwesome';


export default function UserView() {
  const [name, setName] = useState('');
  const { username, setUsername } = useContext(UserContext);

  let header = username === '' ? 'Set your name' : 'Welcome ' + username;

  function changeUser() {
    if (name.trim() === '') {
      Alert.alert('Cannot set an empty name');
    } else {
      setUsername(name);
      Alert.alert('User changed to ' + name);
      setName('');
    }
  }

  return (
    <View style={Style.navview}>
      <Text variant="headlineMedium" style={Style.header}>
        {header}
      </Text>
      <TextInput style={Style.formfieldbutton} label={'Name'} value={name} onChangeText={setName} />

      <Button style={Style.formfieldbutton} mode="outlined" onPress={changeUser} labelStyle={{ color: Colors.black }} >
        Change user
      </Button>
      <Text style={Style.textline}>Your Exercise Log <Icon name="star" size={20} color="#000" /></Text>
      <Text style={Style.textline}>Stay Active, Stay Healthy <Icon name="heart" size={20} color="#000" /></Text>
      <Text style={Style.textline}>Track Your Workouts <Icon name="check-square" size={20} color="#000" /></Text>
      <Text style={Style.textline}>Stay Motivated <Icon name="spinner" size={20} color="#000" /></Text>

    </View>


  );
}
