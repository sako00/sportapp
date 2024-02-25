import { useState } from 'react';
import { MessagesContext, UserContext } from './components/Contexts';
import { Icon, PaperProvider } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AddMessageView from './components/AddMessageView';
import MessagesView from './components/MessagesView';
import SettingsView from './components/SettingsView';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Style from './styles/Style';
import { AddWorkoutProvider } from './components/AddWorkoutContext';
import { useFonts } from 'expo-font';



export default function App() {



  const [messages, setMessages] = useState([]);

  console.log(messages);

  const [loaded] = useFonts({
    Inconsolata: require('./font/Inconsolata-VariableFont_wdth,wght.ttf')
  })
  if (!loaded) {
    return null;
  };

  return (

    <MessagesContext.Provider value={{ messages, setMessages }}>
      <AddWorkoutProvider>
        <PaperProvider>
          <SafeAreaProvider>
            <Navigation />
          </SafeAreaProvider>
        </PaperProvider>
      </AddWorkoutProvider>
    </MessagesContext.Provider>

  );
}


const Tab = createMaterialTopTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarPosition='bottom' style={Style.container} screenOptions={{ tabBarActiveTintColor: '#9999CC', tabBarInactiveTintColor: '#879DDA' }}>

        <Tab.Screen
          name='addmessage'
          options={{ title: 'Add sport', tabBarIcon: ({ color }) => <Icon color={color} source='message' size={24} /> }}
          component={AddMessageView}
        />
        <Tab.Screen
          name='messages'
          options={{ title: 'Sport diary', tabBarIcon: ({ color }) => <Icon color={color} source='clipboard' size={24} /> }}
          component={MessagesView}
        />
        <Tab.Screen
          name='settings'
          options={{ title: 'Settings', tabBarIcon: ({ color }) => <Icon color={color} source='cog' size={24} /> }}
          component={SettingsView}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
