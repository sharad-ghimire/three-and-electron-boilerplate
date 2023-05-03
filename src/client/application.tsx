import React from "react";
import { Canvas } from "@react-three/fiber";
import { Leva, useControls } from "leva";
import SquareBox from "./square-box";

interface ApplicationProps {}

const Application = (props: ApplicationProps) => {
  const values = useControls({
    x: 0,
    y: 0,
    z: 0,
    color: "yellow",
    hoverColor: "green",
  });

  return (
    <>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <SquareBox
          position={[values.x, values.y, values.z]}
          color={values.color}
          hoverColor={values.hoverColor}
        />
      </Canvas>

      <Leva />
    </>
  );
};

export default Application;
