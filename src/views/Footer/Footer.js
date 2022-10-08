import './Footer.css';

export default function Footer() {
  return (
    <div className='footer-container'>
      <a href="https://github.com/Jmart5564">
        <img className='logo' src={`${process.env.PUBLIC_URL}/images/githublogo.png`}></img>
      </a>
      <a href="https://www.linkedin.com/in/jessica-martin5564/">
        <img className='logo' src={`${process.env.PUBLIC_URL}/images/linkedinlogo.png`}></img>
      </a>
    </div>
  );
}