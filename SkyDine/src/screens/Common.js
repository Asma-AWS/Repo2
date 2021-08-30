import React from 'react';
import { StyleSheet, Text } from 'react-native';

const CommonScreen = () => {
  return (
    <Text style={{ fontSize: 48 }}>CommonScreen</Text>
  );
};

CommonScreen.navigationOptions = {
  title: 'Common'
};

const styles = StyleSheet.create({});

export default CommonScreen;
