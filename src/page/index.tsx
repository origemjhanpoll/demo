import { View, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import { ImageCirle } from '../components/ImageCircle';
import { ImagePath } from '../components/ImagePath';

const { width, height } = Dimensions.get("screen");

const imageCircle = {
  uri: 'https://images.unsplash.com/photo-1656265932544-1772c9a8eb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80',
  size: 140
}
const imagePath = {
  uri: 'https://images.unsplash.com/photo-1656326863537-afec347c505f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  size: 200
}

export function DemoPage() {
  return (
    <View style={style.container}>
      <ImageCirle uri={imageCircle.uri} size={imageCircle.size} />
      <ImagePath uri={imagePath.uri} size={imagePath.size} />
    </View>
  );
}


const style = StyleSheet.create({
  "container": {
    alignItems: "center"
  }
})