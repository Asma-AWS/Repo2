import React from 'react';
import { StyleSheet, View } from 'react-native';
import { emailTitleText, emailDescriptionText, addressTitleText, addressDescriptionText, contactNumberTitleText, contactNumberDescriptionText, contactUsText } from '../constants/ApplicationConstant';
import CardComponent from '../components/CardComponent';

const ContactusScreen = () => {
  return (
    <View style={styles.container}>
      <CardComponent
        title={addressTitleText}
        description={addressDescriptionText}
      />
      <CardComponent
        title={emailTitleText}
        description={emailDescriptionText}
      />
      <CardComponent
        title={contactNumberTitleText}
        description={contactNumberDescriptionText}
      />
    </View>
  );
};

ContactusScreen.navigationOptions = {
  title: "Contact Us",
  headerStyle:{backgroundColor:'#147EFB'}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10
  }
});

export default ContactusScreen;
