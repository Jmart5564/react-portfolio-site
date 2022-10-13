import styled from 'styled-components';

export default function Footer() {
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
border-top: 1px solid black;
display: flex;
justify-content: center;
position: fixed;
left: 0;
bottom: 0;
right: 0;
.logo {
    height: 50px;
    width: 50px;
}
a {
  margin: 10px;
}
`;