import React, { useContext, useState } from "react";
import { Button, Text, TextInput } from "react-native-paper";
import { UserContext } from "./Contexts";
import { Alert, View, Icon } from "react-native";
import Style from "../styles/Style";
import { Colors } from "react-native/Libraries/NewAppScreen";


export default function UserView() {
  const [name, setName] = useState('');
  const { username, setUsername } = useContext(UserContext);

  let header = username === '' ? 'Set user' : 'Welcome ' + username;

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
     
      <Button style={Style.formfieldbutton} mode="outlined" onPress={changeUser} labelStyle={{ color:Colors.black }} >
        Change user
      </Button>
      <Text style={Style.textline}>Your Exercise Log</Text>
      <Text style={Style.textline}>Stay Active, Stay Healthy </Text>
      <Text style={Style.textline}>Track Your Workouts </Text>
      <Text style={Style.textline} >Stay Motivated</Text>
    </View>
  );
}
