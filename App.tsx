import React from 'react';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold 
} from "@expo-google-fonts/roboto";
import { View, Text } from 'react-native';

import Routes from "./src/routes";

import { Load } from './src/components/Load';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold 
  });
  
  if (!fontsLoaded)  
    return (<Load />)
    
  return (
    <Routes />
  );
};

