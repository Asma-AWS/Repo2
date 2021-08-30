import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements'

const CorporateLeaderComponent = ({ name, designation }) => {
    return (
        <Card>
            <View>
                <Text style= {styles.headerTextStyle}>{name}</Text>
                <Text>{designation}</Text>
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    headerTextStyle: {
        fontSize:16, 
        fontWeight:'bold'
    }
});

export default CorporateLeaderComponent;
