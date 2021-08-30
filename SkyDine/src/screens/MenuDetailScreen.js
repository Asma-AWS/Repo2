import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity, Modal, Dimensions, ToastAndroid, AlertIOS } from 'react-native';
import { Context } from '../context/DishContext';
import DishComponent from '../components/DishComponent'
import CommentComponent from '../components/CommentComponent';
import { commentsText, cancelText, submitText, commentText, authorText, errorMessageText } from '../constants/ApplicationConstant';
import { Card, Rating, Input } from 'react-native-elements'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get("window");

const MenuDetailScreen = ({ navigation }) => {

  const { state, addComment } = useContext(Context);

  const dish = state.find(
    (dish) => dish.id === navigation.getParam('id')
  );

  // This is to manage Modal State
  const [isModalVisible, setModalVisible] = useState(false);

  // This is to manage Author State
  const [author, setAuthor] = useState("");

  // This is to manage Comment State
  const [comment, setComment] = useState("");

  //This is to manage Rating State
  const [rating, setRating] = useState(1);

  // Create toggleModalVisibility function that will
  // Open and close modal upon button clicks.
  const toggleModalVisibility = () => {
    setModalVisible(!isModalVisible);
  };

  const notifyMessage = (message) => {
    if (Platform.OS === 'android') {
      ToastAndroid.show(message, ToastAndroid.SHORT)
    } else {
      AlertIOS.alert(message);
    }
  }

  const getDishDetail = (id, author, comment, rating) => {
    const date = new Date()
    const created_by = date.getDate() + '-' + (date.getMonth()+1) + '-' + date.getFullYear()
    return { id, author, comment, rating, created_by }
  }

  return (
    <ScrollView style={styles.container}>
      <View>
        <DishComponent
          title={dish.title}
          description={dish.description}
          imageSource={dish.imageSource}
        />
        <Card>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.commentsTextStyle}>{commentsText}</Text>
            <View style={{ flexGrow: 1 }} />
            <TouchableOpacity style={{ paddingBottom: 8 }} onPress={toggleModalVisibility}>
              <MaterialCommunityIcons name="pencil-circle" size={40} color="blue" />
            </TouchableOpacity>
          </View>
          <Card.Divider />
          <FlatList
            scrollEnabled={false}
            data={dish.dishDetails}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <CommentComponent
                  author={item.author}
                  comment={item.comment}
                  rating={item.rating}
                  created_by={item.created_by}
                />
              );
            }}
          />
        </Card>
        <Modal animationType="fade"
          transparent visible={isModalVisible}
          presentationStyle="overFullScreen"
          onDismiss={toggleModalVisibility}>
          <View style={styles.viewWrapperStyle}>
            <View style={styles.modalViewStyle}>
              <Rating
                style={styles.ratingStyle}
                showRating
                imageSize={20}
                startingValue={rating}
                onFinishRating={(value) => setRating(value)}
              />
              <Input placeholder={authorText}
                value={author} style={styles.textInputStyle}
                onChangeText={(value) => setAuthor(value)} />

              <Input placeholder={commentText}
                value={comment} style={styles.textInputStyle}
                onChangeText={(value) => setComment(value)} />

              <TouchableOpacity style={styles.submitButtonStyle} onPress={() => {
                try {
                  if(author == "" || comment == "") {
                    notifyMessage(errorMessageText)
                  } else {
                    setModalVisible(!isModalVisible);
                    setAuthor('')
                    setComment('')
                    setRating(1)
                    addComment(dish.id, getDishDetail(dish.dishDetails.length + 1, author, comment, rating))
                  }
                } catch(err) {
                  console.log(err)
                }
              }
              }>
                <Text>{submitText}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.cancelButtonStyle} onPress={() => {
                  setModalVisible(!isModalVisible);
                  setAuthor('')
                  setComment('')
                  setRating(1)
              }}>
                <Text>{cancelText}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

MenuDetailScreen.navigationOptions = {
  title: 'Menu Detail',
  headerStyle:{backgroundColor:'#147EFB'}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10
  },
  commentsTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  viewWrapperStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  modalViewStyle: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    elevation: 5,
    transform: [{ translateX: -(width * 0.4) },
    { translateY: -90 }],
    width: width * 0.8,
    backgroundColor: "#fff",
    borderRadius: 7,
  },
  textInputStyle: {
    width: "80%",
    padding: 8,
    marginBottom: 8,
    fontSize: 16
  },
  submitButtonStyle: {
    alignItems: 'center',
    width: "80%",
    borderRadius: 5,
    marginBottom: 8,
    padding: 8,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 255, 0.6)',
    color: 'black'
  },
  cancelButtonStyle: {
    alignItems: 'center',
    width: "80%",
    borderRadius: 5,
    marginBottom: 8,
    padding: 8,
    fontWeight: 'bold',
    backgroundColor: 'grey',
    color: 'black'
  },
  ratingStyle: {
    alignItems: 'flex-start',
    paddingBottom: 8
  }
});

export default MenuDetailScreen;
