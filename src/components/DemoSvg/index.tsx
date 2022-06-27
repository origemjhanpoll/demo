import { Dimensions } from "react-native";
import React, { useEffect } from "react";
import Svg, { Circle, G, Path, Text } from "react-native-svg";
import Animated, {
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const AnimatedPath = Animated.createAnimatedComponent(Path);
const dimensions = Dimensions.get("screen");

type ConfigAnchosProps = {
  a: [x: number, y: number];
  b: [x: number, y: number];
  c: [x: number, y: number];
};

function configAnchos({ a, b, c }: ConfigAnchosProps) {
  return {
    a: {
      point: {
        cx: a[0],
        cy: a[1],
        r: 6,
      },
      text: {
        fontSize: 30,
        x: a[0],
        y: a[1],
        dx: -30,
      },
      line: `M ${a[0]} ${a[1]} l ${b[0] - a[0]} ${b[1] - a[1]}`,
    },
    b: {
      point: {
        cx: b[0],
        cy: b[1],
        r: 6,
      },
      text: {
        fontSize: 30,
        x: b[0],
        y: b[1],
        dx: -10,
        dy: -10,
      },
      line: `M ${b[0]} ${b[1]} l ${c[0] - b[0]} ${c[1] - b[1]}`,
    },
    c: {
      point: {
        cx: c[0],
        cy: c[1],
        r: 6,
      },
      text: {
        fontSize: 30,
        x: c[0],
        y: c[1],
        dx: 10,
      },
    },
    lineGreen: `M ${(a[0] + b[0]) / 2} ${(a[1] + b[1]) / 2} l ${
      (a[0] + c[0]) / 2 - a[0]
    } ${(a[1] + c[1]) / 2 - a[1]}`,
    lineBlue: `M ${a[0]} ${a[1]} q 150 ${-a[1] + b[1]} ${c[0] - a[0]} ${-(
      a[1] - c[1]
    )}`,
  };
}

export function DemoSVG() {
  const anima = useSharedValue(10);
  const config = configAnchos({
    a: [50, dimensions.height - dimensions.width / 2],
    b: [dimensions.width / 2, dimensions.width / 2],
    c: [dimensions.width - 50, dimensions.height - dimensions.width / 2],
  });

  const followY = useDerivedValue(() => {
    return withSpring(anima.value);
  });

  const animatedProps = useAnimatedProps(() => {
    const path = `M ${dimensions.width / 2} 0 
    l 0 400
    l ${followY.value} 200
    `;
    return { d: path };
  });

  useEffect(() => {
    setTimeout(() => {
      anima.value = 200;
    }, 2000);
  }, []);

  return (
    <Svg
      height={dimensions.height}
      width={dimensions.width}
      style={{ backgroundColor: "yellow" }}
    >
      <AnimatedPath
        animatedProps={animatedProps}
        fill="transparent"
        strokeWidth={5}
        strokeMiterlimit="10"
        strokeDasharray={10}
        stroke="purple"
      />
      <Path d={config.a.line} stroke="red" strokeWidth="3" fill="none" />
      <Path d={config.b.line} stroke="red" strokeWidth="3" fill="none" />
      <Path d={config.lineGreen} stroke="green" strokeWidth="3" fill="none" />
      <Path
        id="lineBlue"
        d={config.lineBlue}
        stroke="blue"
        strokeWidth="5"
        fill="none"
      />
      {/* Mark relevant points */}
      <G fill="black">
        <Circle
          cx={config.a.point.cx}
          cy={config.a.point.cy}
          r={config.a.point.r}
        />
        <Circle
          cx={config.b.point.cx}
          cy={config.b.point.cy}
          r={config.b.point.r}
        />
        <Circle
          cx={config.c.point.cx}
          cy={config.c.point.cy}
          r={config.c.point.r}
        />
      </G>
      {/* Label the points */}
      <G fill="black">
        <Text
          fontSize={config.a.text.fontSize}
          x={config.a.text.x}
          y={config.a.text.y}
          dx={config.a.text.dx}
        >
          A
        </Text>
        <Text
          fontSize={config.b.text.fontSize}
          x={config.b.text.x}
          y={config.b.text.y}
          dx={config.b.text.dx}
          dy={config.b.text.dy}
        >
          B
        </Text>
        <Text
          fontSize={config.c.text.fontSize}
          x={config.c.text.x}
          y={config.c.text.y}
          dx={config.c.text.dx}
        >
          C
        </Text>
      </G>
    </Svg>
  );
}
