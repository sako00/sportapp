import React, { useContext, useState } from 'react';
import { Button, Text, TextInput, IconButton, Snackbar } from 'react-native-paper';
import { ScrollView, View } from 'react-native';
import { UserContext } from './Contexts';
import { AddWorkoutContext } from './AddWorkoutContext';
import { Calendar } from 'react-native-calendars'; // Import Calendar component
import Style from '../styles/Style';

export default function AddMessageView() {
  const { username } = useContext(UserContext);
  const { addWorkout, units } = useContext(AddWorkoutContext);

  const [workout, setWorkout] = useState({ sport: '', distance: '', duration: '', date: new Date() });
  const [showDateTimePicker, setShowDateTimePicker] = useState(false);
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const header = username === '' ? 'Set user for sending messages' : 'Add workout';

  const handleAddWorkout = () => {
    // Validate numeric values for distance and duration
    if (isNaN(workout.distance) || isNaN(workout.duration) || workout.distance < 0 || workout.duration < 0) {
      alert('Please enter valid numeric values for distance and duration, and ensure they are non-negative.');
      return;
    }

    let formattedDate =
      workout.date.getDate() + '.' + (workout.date.getMonth() + 1) + '.' + workout.date.getFullYear();

    // Convert distance based on selected units
    if (units === 'mi') {
      workout.distance = (parseFloat(workout.distance) * 0.621371).toFixed(2); // Convert km to miles
    }

    // Add the workout with the formatted date
    addWorkout({ ...workout, date: formattedDate });

    // Reset the workout state
    setWorkout({ sport: '', distance: '', duration: '', date: new Date() });

    // Show a confirmation message
    setSnackbarVisible(true);
  };

  return (
    <View style={Style.navview}>
      <Text variant="headlineLarge" style={Style.header}>
        {header}
      </Text>
      {username !== '' && (
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
            <IconButton icon="run" onPress={() => setWorkout({ ...workout, sport: 'run' })} color={workout.sport === 'run' ? 'blue' : 'black'} />
            <IconButton icon="walk" onPress={() => setWorkout({ ...workout, sport: 'walk' })} color={workout.sport === 'walk' ? 'green' : 'black'} />
            <IconButton icon="ski" onPress={() => setWorkout({ ...workout, sport: 'skiing' })} color={workout.sport === 'skiing' ? 'red' : 'black'} />
          </View>
          <TextInput
            style={Style.formfield}
            label={'Sport'}
            value={workout.sport}
            onChangeText={(text) => setWorkout({ ...workout, sport: text })}
          />
          <TextInput
            style={Style.formfield}
            label={'Distance'}
            value={workout.distance}
            onChangeText={(text) => setWorkout({ ...workout, distance: text })}
            keyboardType="numeric"
          />
          <TextInput
            style={Style.formfield}
            label={'Duration'}
            value={workout.duration}
            onChangeText={(text) => setWorkout({ ...workout, duration: text })}
            keyboardType="numeric"
          />
          <ScrollView style={{ maxHeight: 300 }}>
            <Calendar
              current={workout.date.toISOString().split('T')[0]} // Convert date to string
              markedDates={{
                [workout.date.toISOString().split('T')[0]]: { selected: true, selectedColor: 'blue' }
              }}
              onDayPress={(day) => {
                setWorkout({ ...workout, date: new Date(day.dateString) });
                setShowDateTimePicker(false);
              }}
              style={{ marginBottom: 10 }}
            />

          </ScrollView>
          <Button style={Style.formfield} mode="contained" onPress={handleAddWorkout} labelStyle={{ color: 'black' }} >
            Add Workout
          </Button>
        </View>
      )}
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}
      >

      
        Workout added successfully!
      </Snackbar>
    </View>
  );
}
