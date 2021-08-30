import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements'

const CardComponent = ({ title, description }) => {
    return (
        <Card>
            <Card.Title style={styles.titleTextStyle}>{title}</Card.Title>
            <Card.Divider />
            <Text>{description}</Text>
        </Card>
    );
};

const styles = StyleSheet.create({
    titleTextStyle:{
        fontSize: 20,
        textAlign: 'left'
    }
});

export default CardComponent;
