import styled from 'styled-components';

export default function Footer() {

  if (location.pathname !== '/')
    return (
      <FooterDiv>
        <a href="https://github.com/Jmart5564">
          <img className='logo' src={`${process.env.PUBLIC_URL}/images/githublogo.png`}></img>
        </a>
        <a href="https://www.linkedin.com/in/jessica-martin5564/">
          <img className='logo' src={`${process.env.PUBLIC_URL}/images/linkedinlogo.png`}></img>
        </a>
      </FooterDiv>
    );
}

const FooterDiv = styled.div`
background-color: rgba(0, 0, 0, 0.336);
display: flex;
justify-content: center;
position: fixed;
left: 0;
bottom: 0;
right: 0;
gap: 50px;
.logo {
    height: 40px;
    width: 40px;
    padding-top: 5px;
}
`;