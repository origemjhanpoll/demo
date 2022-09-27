import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";
import { ImageRender } from "../../components/image";
import { fetchImagesFromPexels } from "../../service";
const { width, height } = Dimensions.get("screen");

const IMAGE_SIZE = 80;
const SPACING = 10;

export function GalleryHomePage() {
  const [images, setImages] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const imagesRef = useRef(null);
  const thumbRef = useRef(null);

  useEffect(() => {
    const fetchImages = async () => {
      const images = await fetchImagesFromPexels();
      setImages(images);
    };

    fetchImages();
  }, []);

  const scrollToActiveIndex = ({ index }: { index: number }) => {
    setActiveIndex(index);
    imagesRef?.current?.scrollToOffset({
      offset: index * width,
      animated: true,
    });
    if (index * (IMAGE_SIZE + SPACING) - IMAGE_SIZE / 2 > width / 2) {
      thumbRef?.current?.scrollToOffset({
        offset: index * (IMAGE_SIZE + SPACING) - width / 2 + IMAGE_SIZE / 2,
        animated: true,
      });
    } else {
      thumbRef?.current?.scrollToOffset({
        offset: 0,
        animated: true,
      });
    }
  };

  if (!images) return <Text>Loading...</Text>;

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <FlatList
        data={images}
        ref={imagesRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) =>
          scrollToActiveIndex({
            index: Math.floor(e.nativeEvent.contentOffset.x / width),
          })
        }
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ width, height }}>
            <Image
              source={{ uri: item.src.portrait }}
              style={[StyleSheet.absoluteFillObject]}
            />
          </View>
        )}
      />
      <FlatList
        data={images}
        ref={thumbRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: SPACING }}
        keyExtractor={(item) => item.id.toString()}
        style={{ position: "absolute", bottom: IMAGE_SIZE / 2 }}
        renderItem={({ item, index }) => (
          <Pressable onPress={() => scrollToActiveIndex({ index })}>
            <Image
              source={{ uri: item.src.portrait }}
              style={{
                backgroundColor: "#000",
                width: IMAGE_SIZE,
                height: IMAGE_SIZE,
                borderRadius: 16,
                marginRight: SPACING,
                borderWidth: 2,
                borderColor: activeIndex === index ? "#FFF" : "transparent",
              }}
            />
          </Pressable>
        )}
      />
    </View>
  );
}
