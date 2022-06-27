
import React from 'react';
import { View } from 'react-native';
import { DemoSVG } from './src/components/DemoSvg';
import { DemoPage } from './src/page';


export default function App() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {/* <DemoPage /> */}
      <DemoSVG />
    </View>
  );
}