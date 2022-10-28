/* eslint-disable react/no-unknown-property */
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text3D, Sparkles, Stars } from '@react-three/drei';
// import font1 from '../../fonts/font1.json';
// import font2 from '../../fonts/font2.json';
// import creepfont from '../../fonts/creepfont.json';
import codafont from '../../fonts/codafont.json';
// import combofont from '../../fonts/combofont.json';

function HomeText() { 
  return (
    <mesh>
      <Text3D
        position={[-4.5, 0, 0]}
        font={codafont}>
          HELLO WORLD
        <meshNormalMaterial />
      </Text3D>
      <Sparkles 
        size={3}
        count={100}
        scale={[20, 20, 10]}
        position={[0, 0, 0]}
        color="#d9cafc"/>
      <Stars radius={100} 
        depth={0} 
        count={1000} 
        factor={5} 
        saturation={0} 
        fade speed={1} />
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