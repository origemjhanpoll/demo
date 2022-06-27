import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type ImageProps = {
  uri: string;
  size?: number;
};

export function ImagePath({ uri, size = 200 }: ImageProps) {
  return (
    <View>
      <Image
        source={{ uri: uri }}
        style={{ width: size, height: size, borderRadius: size }}
      />
    </View>
  )
}


const styles = StyleSheet.create({})