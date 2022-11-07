import {
  Canvas,
  Path,
  useTouchHandler,
  useValue,
} from "@shopify/react-native-skia";

export function PathPage() {
  const path = useValue("");

  const onTouch = useTouchHandler({
    onStart: ({ x, y, id }) => {
      path.current = `${path.current} M ${x} ${y}`;
    },
    onActive: ({ x, y, id }) => {
      path.current = `${path.current} L ${x} ${y}`;
    },
  });

  return (
    <Canvas style={{ flex: 1 }} onTouch={onTouch}>
      <Path
        strokeJoin="round"
        strokeWidth={4}
        style="stroke"
        path={path}
        color="lightblue"
      />
    </Canvas>
  );
}
