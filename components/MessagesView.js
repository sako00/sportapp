import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { AddWorkoutContext } from './AddWorkoutContext';
import Style from '../styles/Style';

export default function MessagesView() {
  const { workouts,setWorkouts, units, setUnits } = useContext(AddWorkoutContext); // Get units and setUnits from AddWorkoutContext

  const handleUnitChange = (newUnit) => {
    // Update the selected unit
    setUnits(newUnit);

    // Convert distances of all workouts accordingly
    const updatedWorkouts = workouts.map(workout => {
      if (newUnit === 'mi' && units === 'km') {
        // Convert from kilometers to miles
        return { ...workout, distance: (parseFloat(workout.distance) * 0.621371).toFixed(2) };
      } else if (newUnit === 'km' && units === 'mi') {
        // Convert from miles to kilometers
        return { ...workout, distance: (parseFloat(workout.distance) * 1.60934).toFixed(2) };
      } else {
        // No need to convert, return the workout as is
        return workout;
      }
    });

    // Update workouts with the converted distances
    setWorkouts(updatedWorkouts);
  };

  return (
   
    <View style={Style.navview}>
      <Text variant="headlineLarge" style={Style.header}>
        Workout List
      </Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <Text>Units:</Text>
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
      
      <FlatList
        data={workouts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
       
            <View style={{ margin: 5 }}>
              <Text style={Style.flat}>{`Sport: ${item.sport}`}</Text>
              <Text style={Style.flat}>{`Distance: ${item.distance} ${units}`}</Text>
              <Text style={Style.flat}>{`Duration: ${item.duration} minutes`}</Text>
              <Text style={Style.flat}>{`Date: ${item.date}`}</Text>
            </View>
          
        )}
      />
    </View>

  );
}
