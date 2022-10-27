import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export default function Home() {

  const delay = ms => new Promise(res => setTimeout(res, ms));
  
  const reload = async () => {
    await delay(10);
    location.reload();
  };

  return (
    <HomeContainer>
      <h1>This is Home, Add cool shit here</h1>
      <p>Checkout my site {' '}
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