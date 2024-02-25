import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { AddWorkoutContext } from './AddWorkoutContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import Style from '../styles/Style';

export default function MessagesView() {
  const { workouts, units } = useContext(AddWorkoutContext);

  // Function to calculate sum of distances for each sport type
  const sumDistancesBySport = () => {
    const sums = {};

    workouts.forEach(workout => {
      if (!sums[workout.sport]) {
        sums[workout.sport] = 0;
      }
      sums[workout.sport] += parseFloat(workout.distance);
    });

    return sums;
  };

  const distanceSums = sumDistancesBySport();

  // Function to convert kilometers to miles
  const convertKilometersToMiles = (distance) => {
    return (distance * 0.621371).toFixed(2);
  };

  return (
    <View style={Style.navview}>
      <Text variant="headlineLarge" style={Style.header}>
        Workout History List
      </Text>
      {Object.keys(distanceSums).map(sport => (
        <View key={sport}>
          <Text style={Style.historyheader}>{sport} Distance: {units === 'mi' ? convertKilometersToMiles(distanceSums[sport]) : distanceSums[sport]} {units}</Text>
        </View>
      ))}
      <FlatList
        style={Style.historytext}
        data={workouts}
        keyExtractor={(_item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={Style.textbox}>
            <Text style={Style.flat}>  {`Sport: ${item.sport}`}</Text>
            <Text style={Style.flat}>  {`Distance: ${units === 'mi' ? convertKilometersToMiles(item.distance) : item.distance} ${units}`}</Text>
            <Text style={Style.flat}>  {`Duration: ${item.duration} minutes`}</Text>
            <Text style={Style.flat}>  <Icon name="calendar" size={15} /> {`Date: ${item.date}`}</Text>
          </View>
        )}
      />
    </View>
  );
}
