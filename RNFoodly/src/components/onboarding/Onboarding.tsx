import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import slideData from '../../data/OnboardingData/SlideData';
import OnboardingItem from './OnboadringItem';

function Onboarding() {
  return (
    <View style={styleOnBoard.container}>
      <FlatList
        data={slideData}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        bounces={false}
        renderItem={({item}) => (
          <OnboardingItem
            title={item.title}
            subTitle={item.subtitle}
            img={item.image}></OnboardingItem>
        )}
      />
    </View>
  );
}

const styleOnBoard = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Onboarding;
