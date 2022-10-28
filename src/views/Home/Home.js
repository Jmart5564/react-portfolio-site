/* eslint-disable react/no-unknown-property */
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text3D } from '@react-three/drei';
import font1 from '../../fonts/font1.json';

function HomeText() { 
  return (
    <mesh>
      <Text3D
        font={font1}>
          HELLO WORLD
        <meshNormalMaterial />
      </Text3D>
      <Text3D
        font={font1}
        position={[0, -2, -5]}>
          Welcome to the void
        <meshNormalMaterial />
      </Text3D>
    </mesh>
  );
}


export default function Home() {

  const delay = ms => new Promise(res => setTimeout(res, ms));
  
  const reload = async () => {
    await delay(10);
    location.reload();
  };

  return (
    <HomeContainer>
      <Canvas>
        <HomeText />
        <OrbitControls />
      </Canvas>
      <p>To enter, click {' '}
        <NavLink to="/about" onClick={reload}>here</NavLink>
      </p>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
width: 100vw;
height: 100vh;
background-color: black;
color: white;
a:visited {
  color: white;
}
h1 {
  margin: 0;
}
`;