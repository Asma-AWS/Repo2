import React,{ useContext, useEffect } from 'react';
import { StyleSheet, Text, FlatList,View, TouchableOpacity} from 'react-native';
import { Context } from '../context/DishContext';
import DishComponent from '../components/DishComponent'

const MenuListScreen = ({navigation}) => {

  const { state, getDishes } = useContext(Context);

  useEffect(() => {
    getDishes();
  }, []);
  
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(dish) => dish.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('MenuDetail', { id: item.id })}
            >
              <DishComponent
                title={item.title}
                description = {item.description}
                imageSource={item.imageSource}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

MenuListScreen.navigationOptions = {
  title: 'Menu List',
  headerStyle:{backgroundColor:'#147EFB'}
};

const styles = StyleSheet.create({});

export default MenuListScreen;
