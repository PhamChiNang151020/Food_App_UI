import React from 'react';
import {Image, StyleSheet, Text, View, useWindowDimensions} from 'react-native';

type OnboardingItemProps = {
  title: String;
  subTitle: String;
  img: String;
};

function OnboardingItem(item: OnboardingItemProps) {
  const {width} = useWindowDimensions();
  return (
    <View style={[stylesItem.container, {width}]}>
      <Image
        source={item.img}
        style={[stylesItem.img, {width, resizeMode: 'contain'}]}></Image>

      <View style={[{flex: 0.3}, {paddingHorizontal: 15}]}>
        <Text style={stylesItem.title}> {item.title}</Text>
        <Text style={stylesItem.subTitle}> {item.subTitle}</Text>
      </View>
    </View>
  );
}

const stylesItem = StyleSheet.create({
  container: {
    flex: 1,
  },

  img: {
    flex: 0.7,
    backgroundColor: '#421422',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
    color: '#000000',
  },
  subTitle: {textAlign: 'center', fontSize: 17, color: '#000000'},
});
export default OnboardingItem;
