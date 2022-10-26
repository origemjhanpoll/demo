import {
  Canvas,
  Circle,
  useValue,
  vec,
  useTouchHandler,
  Points,
  Vector,
} from "@shopify/react-native-skia";
import React from "react";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

export function PointsHomePage() {
  const r = 16;
  const color = "black";
  const points = {
    r: 16,
    cx: width / 2,
    cy: height / 2 - r / 2,
  };

  const cx = useValue(points.cx);
  const cy = useValue(points.cy);
  const currentPoints = useValue<Vector[]>([vec(points.cx, points.cy)]);

  const touchHandler = useTouchHandler({
    onActive: ({ x, y }) => {
      cx.current = x;
      cy.current = y;
      const prev = currentPoints;
      currentPoints.current = [...prev.current, vec(x, y)];
    },
  });

  return (
    <Canvas style={{ height, width }} onTouch={touchHandler}>
      <Circle cx={cx} cy={cy} r={r} color={color} />
      <Points
        points={currentPoints}
        mode="polygon"
        style="stroke"
        strokeCap="round"
        strokeWidth={4}
      />
    </Canvas>
  );
}
