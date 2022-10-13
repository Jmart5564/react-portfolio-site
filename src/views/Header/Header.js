import { NavLink } from 'react-router-dom';
import './Header.css';


export default function Header() {
  return (
    <div className='header-container'>
      <NavLink to="/home">About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink target={'_blank'} to={`${process.env.PUBLIC_URL}/resume.pdf`}>Resume</NavLink>
      <NavLink to="/connect">Connect</NavLink>
    </div>
  );
}