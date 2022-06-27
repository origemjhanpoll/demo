import { View, Image, StyleSheet } from "react-native";
import React from "react";

type ImageProps = {
  uri: string;
  size: number;
};

export function ImageCirle({ uri, size }: ImageProps) {
  return (
    <Image
      source={{ uri: uri }}
      style={{ width: size, height: size, borderRadius: size }}
    />
  );
}
