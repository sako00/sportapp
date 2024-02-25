import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper'; // Import RadioButton from react-native-paper
import { AddWorkoutContext } from './AddWorkoutContext';
import { FontAwesome } from '@expo/vector-icons';
import Style from '../styles/Style';

export default function SettingsView() {
    const { units, setUnits } = useContext(AddWorkoutContext);

    const handleUnitChange = (newUnit) => {
        setUnits(newUnit);
    };

    return (
        <View style={Style.navview}>
            <Text variant="headlineLarge" style={Style.header}>
                Settings
            </Text>
            <View style={Style.unitsContainer}>
                <Text style={Style.unitsbutton}>Units:</Text>
                <RadioButton.Group onValueChange={handleUnitChange} value={units}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <RadioButton value="km" />
                        <Text>Kilometers</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <RadioButton value="mi" />
                        <Text>Miles</Text>
                    </View>
                </RadioButton.Group>
            </View>
            <View style={Style.sportTextContainer}>
        <Text style={Style.sportText}>Sweat, Smile, Repeat!</Text>
        <FontAwesome name="heartbeat" size={24} color="black" style={Style.icon} />
    </View>
    <View style={Style.sportTextContainer}>
        <Text style={Style.sportText}>Stay Strong, Stay Focused!</Text>
        <FontAwesome name="star" size={24} color="black" style={Style.icon} />
    </View>
    <View style={Style.sportTextContainer}>
        <Text style={Style.sportText}>Exercise regularly!</Text>
        <FontAwesome name="spinner" size={24} color="black" style={Style.icon} />
    </View>
    <View style={Style.sportTextContainer}>
        <Text style={Style.sportText}>Push Your Limits!</Text>
        <FontAwesome name="bolt" size={24} color="black" style={Style.icon} />
    </View>
        </View>
        
    );
}
