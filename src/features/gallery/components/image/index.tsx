import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import React from "react";

type ImageRenderPropType = {
  source: ImageSourcePropType;
  width: number;
  height: number;
};

export function ImageRender({ source, width, height }: ImageRenderPropType) {
  return (
    <View style={{ width, height }}>
      <Image style={[StyleSheet.absoluteFillObject]} source={source} />
    </View>
  );
}
