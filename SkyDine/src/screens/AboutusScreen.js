import React from 'react';
import { FlatList } from 'react-native';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CorporateLeaderComponent from '../components/CorporateLeaderComponent';
import CardComponent from '../components/CardComponent';
import { historyTitleText, historyDescriptionText, corporateLeadersText } from '../constants/ApplicationConstant';

const AboutusScreen = () => {

  const listOfCorporateLeaders = [
    { id: 1, name: 'Henry Ford', designation: 'Chief Executive Officer' },
    { id: 2, name: 'Steve Jobs', designation: 'Chief Operating Officer' },
    { id: 3, name: 'Madam CJ Walker', designation: 'Chief Financial Officer' },
    { id: 4, name: 'John D. Rockefeller', designation: 'Program Director' }
  ];

  const ListHeader = () => {
    //View to set in Header
    return (
      <View>
        <CardComponent
            title={historyTitleText}
            description={historyDescriptionText}
          />
          <Text style={styles.corporateLeadersTextStyle}>{corporateLeadersText}</Text>
      </View>
    );
  };

  return (
    <View style = {styles.container}>
          <FlatList
            ListHeaderComponent={ListHeader}
            data={listOfCorporateLeaders}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <CorporateLeaderComponent
                  name={item.name}
                  designation={item.designation}
                />
              );
            }}
          />
        </View>
  );
};

AboutusScreen.navigationOptions = {
  title: "About Us",
  headerStyle:{backgroundColor:'#147EFB'}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10
  },
  corporateLeadersTextStyle: {
    fontSize: 20,
    marginTop: 10, 
    padding: 15, 
    fontWeight:'bold',
    textAlign: 'left'
  }
});

export default AboutusScreen;
