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
    fontSize: 24,

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

  textline: {
    textAlign: 'center',
    fontFamily: 'Inconsolata',
    fontSize: 20,
    color: Colors.black,
    marginTop: 30,
    padding: 10,
  },
  textbox: {
    margin: 10,
    borderWidth: 1,
    borderColor: Colors.black,
    backgroundColor: Colors.secondary,
    borderRadius: 10,
    padding: 10,

  },
  historytext: {
    height: 540,
  },
  historyheader: {
    textAlign: 'center',
    fontFamily: 'Inconsolata',
    fontSize: 14,
    color: Colors.black,
    marginTop: 1,
    padding: 1,
  },
  unitsbutton: {
    fontSize: 14,
    marginTop: 1,
    padding: 1,
    fontWeight: 'bold'

  },
  unitsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    borderColor: Colors.primary,
  },
  sportTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
},
sportText: {
    fontFamily: 'Inconsolata',
    fontSize: 18,
    margin: 10, 
    marginTop: 40,
},
icon: {
    margin: 10, 
    marginTop: 40,
},
    
    
  
});