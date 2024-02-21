// style.js
import { StatusBar, StyleSheet } from "react-native";

const Colors = {
  primary: '#9999CC',
  secondary: '#d6def7',
  black: '#09090B',
  white: '#C5C5D5',
};

export default Style = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight + 5,
    
  },
  navview: {
    padding: 5,

  },
  header: {
    fontWeight: 'bold',
    margin: 2,
    textAlign: 'center',
    fontFamily: 'Inconsolata',
  
  },
  formfield: {
    margin: 2,
    backgroundColor: Colors.secondary,
    color: Colors.secondary,
    
  
  },
  formfieldbutton: {
    margin: 20,
    backgroundColor: Colors.secondary,
    color: Colors.secondary,
  
  },
  itemText: {
    fontWeight: 'bold',
    fontSize: 18,

  },
  divider: {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: Colors.black,
  
  },
  tabBarActive: {
    tabBarActiveTintColor: Colors.primary,
  
  },
  tabBarInactive: {
    tabBarInactiveTintColor: Colors.secondary,
  
  },
  flat: {
    margin: 2,
    textAlign: 'center',
    fontFamily: 'Inconsolata',
    fontSize: 14,
    
  
  },
  
  textline:{
    textAlign: 'center',
    fontFamily: 'Inconsolata',
    fontSize: 20,
    color: Colors.black,
    marginTop: 30,
    padding: 10,
  },
  textbox:{
    margin:10, 
    borderWidth:2,
    borderColor: Colors.black,
    backgroundColor: Colors.secondary,
    borderRadius: 10,
    padding: 10,
    
  },
  historytext:{
    height: 450,
  },
  historyheader:{
    textAlign: 'center',
    fontFamily: 'Inconsolata',
    fontSize: 14,
    color: Colors.black,
    marginTop: 1,
    padding: 1,
  },
  unitsbutton:{
    textAlign: 'center',
    fontSize: 14,
    color: Colors.black,
    marginTop: 1,
    padding: 1,
    fontWeight: 'bold',
  },
});