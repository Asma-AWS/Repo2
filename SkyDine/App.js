
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from './src/context/FeedbackContext';

import NavDrawer from "./src/routes/NavDrawer";

function App() { 

  return(
    <NavigationContainer>
        <NavDrawer/>
    </NavigationContainer>
  );
};

export default () => {
  return <Provider>
    <App/>
  </Provider>
}