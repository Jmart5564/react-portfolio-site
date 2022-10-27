import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {

  if (location.pathname !== '/')
    return (
      <HeaderDiv>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink target={'_blank'} to={`${process.env.PUBLIC_URL}/resume.pdf`}>Resume</NavLink>
        <NavLink to="/connect">Connect</NavLink>
        <a href="https://github.com/Jmart5564">
          <img className='logo' src={`${process.env.PUBLIC_URL}/images/githublogo.png`}></img>
        </a>
        <a href="https://www.linkedin.com/in/jessica-martin5564/">
          <img className='logo' src={`${process.env.PUBLIC_URL}/images/linkedinlogo.png`}></img>
        </a>
      </HeaderDiv>
    );
}

const HeaderDiv = styled.div`
    padding-top: 15px;
    padding-bottom: 15px;
    display: flex;
    justify-content: space-evenly;
    /* gap: 15px; */
    font-size: larger;
    background-color: rgba(0, 0, 0, 0.336);
a:link {
  text-decoration: none;
}
a:visited {
  color: black;
}
a.active {
  font-size: 25px;
  text-decoration: underline;
  font-weight: 500;
}
img {
  width: 30px;
}
`;