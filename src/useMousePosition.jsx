import { useState, useMemo } from "react";

const useMousePosition = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
  

  const bind = useMemo(
    () => ({
      onMouseMove: (event) => {
        setMousePosition({x: event.nativeEvent.clientX, y: event.nativeEvent.clientY});
      }
    }),
    []
  );
  return [mousePosition.x, mousePosition.y, bind];
};

export default useMousePosition;
