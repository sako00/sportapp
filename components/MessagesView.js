import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { AddWorkoutContext } from './AddWorkoutContext';
import Icon from 'react-native-vector-icons/FontAwesome'; 

import Style from '../styles/Style';

export default function MessagesView() {
  const { workouts,setWorkouts, units, setUnits } = useContext(AddWorkoutContext); // Get units and setUnits from AddWorkoutContext

  const sumDistances = () => {
    return workouts.reduce((sum, workout) => {
      return sum + parseFloat(workout.distance);
    }, 0).toFixed(2);
  };

  // Function to calculate sum of durations
  const sumDurations = () => {
    return workouts.reduce((sum, workout) => {
      return sum + parseFloat(workout.duration);
    }, 0).toFixed(2);
  
  };
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
        Workout History List
      </Text>
      <View style={Style.unitsContainer}>
        <Text style={Style.unitsbutton}>Units:</Text>
        <RadioButton.Group  onValueChange={handleUnitChange} value={units} >
          <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <RadioButton  value="km" />
            <Text >Kilometers</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <RadioButton value="mi" />
            <Text >Miles</Text>
          </View>
        </RadioButton.Group>
      </View>
      
      <Text style={Style.historyheader}>Total Distance: {sumDistances()} {units}</Text>
      <Text style={Style.historyheader}>Total Duration: {sumDurations()} minutes</Text>
      <FlatList
        style={Style.historytext}
        data={workouts}
        keyExtractor={(_item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={Style.textbox}>
            <Text style={Style.flat}>  {`Sport: ${item.sport}`}</Text>
            <Text style={Style.flat}>  {`Distance: ${item.distance} ${units}`}</Text>
            <Text style={Style.flat}>  {`Duration: ${item.duration} minutes`}</Text>
            <Text style={Style.flat}>  <Icon name="calendar" size={15}/> {`Date: ${item.date}`}</Text>
          </View>
        )}
      />
    </View>
  );
}