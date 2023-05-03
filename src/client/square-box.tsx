import { MeshProps, useFrame } from "@react-three/fiber";
import React, { useState } from "react";

interface SquareBoxProps extends MeshProps {
  color: string;
  hoverColor: string;
}

const SquareBox = (props: SquareBoxProps) => {
  const mesh = React.useRef();

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => {
    mesh.current.rotation.x += delta;
    mesh.current.rotation.y += delta;
  });

  return (
    <>
      <mesh
        {...props}
        ref={mesh}
        scale={active ? 2 : 1}
        onClick={() => setActive(!active)}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color={hovered ? props.hoverColor : props.color}
        />
      </mesh>
    </>
  );
};

export default SquareBox;
