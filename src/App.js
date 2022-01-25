import {
  Stack
} from '@chakra-ui/react';
import React from 'react';
import './assets/styles.css'
import NavBar from './Components/Header';
import Hero from './Components/Hero';

function App() {
  return (
  <Stack >
    <NavBar/>
    <Hero/>
  
  </Stack>
  );
}

export default App;
