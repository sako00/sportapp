import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const AddWorkoutContext = createContext();



const AddWorkoutProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([]);
  const [units, setUnits] = useState('km'); // Default unit is kilometers

    // Load workout data from AsyncStorage when the component mounts
    useEffect(() => {
      const loadWorkouts = async () => {
        try {
          const savedWorkouts = await AsyncStorage.getItem('workouts');
          if (savedWorkouts) {
            setWorkouts(JSON.parse(savedWorkouts));
          }
        } catch (error) {
          console.error('Error loading workouts:', error);
        }
      };
      loadWorkouts();
    }, []);

    // Save workout data to AsyncStorage whenever it changes
  useEffect(() => {
    const saveWorkouts = async () => {
      try {
        await AsyncStorage.setItem('workouts', JSON.stringify(workouts));
      } catch (error) {
        console.error('Error saving workouts:', error);
      }
    };
    saveWorkouts();
  }, [workouts]);


  const addWorkout = (workout) => {
    // Check if distance or duration is empty
    if (!workout.distance || !workout.duration) {
      alert('Please enter values for distance and duration.');
      return;
    }

    // Validate numeric values for distance and duration
    if (isNaN(workout.distance) || isNaN(workout.duration) || workout.distance < 0 || workout.duration < 0) {
      alert('Please enter valid numeric values for distance and duration, and ensure they are non-negative.');
      return;
    }

    // Convert distance based on selected units
    let distance = workout.distance;
    if (units === 'mi') {
      distance = (workout.distance * 0.621371).toFixed(2); // Convert km to miles
    }

    // Update shared state
    setWorkouts((prevWorkouts) => [...prevWorkouts, { ...workout, distance }]);
  };

   

  // Export setUnits along with workouts, addWorkout, and units
  return (
    <AddWorkoutContext.Provider value={{ workouts, setWorkouts, addWorkout, units, setUnits }}>
      {children}
    </AddWorkoutContext.Provider>
  );
};

export { AddWorkoutProvider, AddWorkoutContext };
