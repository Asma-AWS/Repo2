import React from 'react';
import { Text, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-elements'

const DishComponent = ({ title, description, imageSource }) => {
    return (
        <Card>
            <Card.Title 
                style={styles.titleTextStyle}
                title={title}
                right={(props) => <IconButton {...props} icon="more-vert" onPress={() => {}} />} >{title}</Card.Title>
            <Card.Divider />
            <Text style={styles.textStyle}>{description}</Text>
            <Image style={{ height: 300, width: "100%" }} source={imageSource} />
        </Card>
    );
};

const styles = StyleSheet.create({
    titleTextStyle: {
        fontSize: 20,
        textAlign: 'left'
    },
    textStyle: {
        paddingBottom: 8
    }
});

export default DishComponent;
