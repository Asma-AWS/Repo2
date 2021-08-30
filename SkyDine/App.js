import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerNavigatorItems } from 'react-navigation-drawer';
import { View, SafeAreaView } from 'react-native'
import MenuListScreen from './src/screens/MenuListScreen';
import { Provider as DishProvider } from './src/context/DishContext';
import AboutusScreen from './src/screens/AboutusScreen';
import ContactusScreen from './src/screens/ContactusScreen';
import MenuDetailScreen from './src/screens/MenuDetailScreen';

const menuList = createStackNavigator({
  MenuList: MenuListScreen,
  MenuDetail: MenuDetailScreen
});

menuList.navigationOptions = {
  title: 'Menu'
};

const aboutUs = createStackNavigator({
  Aboutus: AboutusScreen
})

aboutUs.navigationOptions = {
  title: 'About Us'
}

const contactUs = createStackNavigator({
  Contactus: ContactusScreen
})

contactUs.navigationOptions = {
  title: 'Contact Us'
}

const navigator = createDrawerNavigator({
  menuList,
  aboutUs,
  contactUs
}, {
  contentComponent: props => {
    return (
      <View style={{ flex: 1, paddingTop: 30 }}>
        <SafeAreaView forceInset={{ tope: 'always', horizontal: 'never' }}>
          <DrawerNavigatorItems {...props} />
        </SafeAreaView>
      </View>
    );
  }
})

const App = createAppContainer(navigator);

export default () => {
  return (
    <DishProvider>
      <App />
    </DishProvider>
  );
};