import styled from 'styled-components';


export default function Projects() {
  return (
    <ProjectsContainer>
      <ProjectDiv>
        <img src={`${process.env.PUBLIC_URL}/images/Forte.png`}></img>
        <h1>Forte</h1>
      </ProjectDiv>
      <ProjectDiv>
        <img src={`${process.env.PUBLIC_URL}/images/Forte.png`}></img>
        <h1>Termagotchi</h1>
      </ProjectDiv>
    </ProjectsContainer>
  );
}

const ProjectsContainer = styled.div`
display: flex;
flex-direction: column;
align-content: center;
`;



const ProjectDiv = styled.div`
background-color: grey;
width: 600px;
padding-top: 10px;
margin: 40px 20px;
border-radius: 2%;
align-self: center;
img {
  height: 500px;
  border-radius: 2%;
}
`;