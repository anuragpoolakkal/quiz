import React from 'react';
import { AppRegistry } from 'react-native';
import { MainStack } from './components/MainStack';  // Assuming MainStack is your main navigation component

// In React Native, the entry point is typically defined here
// AppRegistry is used to register the main app component with the React Native runtime

const App = () => {
  return <MainStack />;
};

// Register the app entry point with AppRegistry
AppRegistry.registerComponent('NutriMind', () => App);
