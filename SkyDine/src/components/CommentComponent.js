import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Divider, Rating } from 'react-native-elements'

const CommentComponent = ({ author, comment, rating, created_by }) => {
    return (
        <View>
            <Text style={styles.headerTextStyle}>{comment}</Text>
            <Rating
                readonly 
                imageSize={20} 
                startingValue={rating}
                style={styles.ratingStyle} 
            />
            <Text style={styles.spacing}>- {author} , {created_by}</Text>
            <Divider />
        </View>
    );
};

const styles = StyleSheet.create({
    headerTextStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingTop: 8
    },
    spacing: {
        padding: 8
    },
    ratingStyle: {
        alignItems: 'flex-start',
        paddingTop: 8
    }
});

export default CommentComponent;
