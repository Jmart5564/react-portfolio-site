import styled from 'styled-components';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css'; 
// import 'slick-carousel/slick/slick-theme.css';

export default function Projects() {

  // const settings = {
  //   dots: true,
  //   arrows: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };


  return (
    <ProjectsContainer>
      {/* <Slider {...settings}> */}
      <ProjectDiv>
        <img src={`${process.env.PUBLIC_URL}/images/Forte.png`}></img>
        <h1>Forte</h1>
        <h3>Javascript, CSS3, HTML5, Tone.js</h3>
        <p>Forte is an ear training app help make musical ear training fun and engaging</p>
        <a href="https://github.com/forte-group/forte">Github</a>
        <a href="https://forte-ear-trainer.netlify.app/">Deployed Site</a>
      </ProjectDiv>
      <ProjectDiv>
        <img src={`${process.env.PUBLIC_URL}/images/termagotchi.jpeg`}></img>
        <h1>Termagotchi</h1>
        <h3>Node.js, Express, Chalk, Inquirer</h3>
        <p>Termagotchi is a Tamagotchi inspired choose your own adventure terminal game</p>
        <a href="https://github.com/jenna-graham/Termagotchi">Github</a>
        <a href="https://www.npmjs.com/package/the-termagotchi">NPM Package Site</a>
      </ProjectDiv>
      <ProjectDiv>
        <img src={`${process.env.PUBLIC_URL}/images/sound-palette1.png`}></img>
        <h1>Sound Palette</h1>
        <h3>React, React-Three-Fiber, React-Piano</h3>
        <p>Termagotchi is a Tamagotchi inspired choose your own adventure terminal game</p>
        <a href="https://github.com/ryanjeffrey/sound-palette">Github</a>
        <a href="https://sound-palette.netlify.app/">Deployed Site</a>
      </ProjectDiv>
      {/* </Slider> */}
    </ProjectsContainer>
  );
}

const ProjectsContainer = styled.div`
display: flex;
flex-direction: column;
align-content: center;
padding-bottom: 40px;
`;


const ProjectDiv = styled.div`
background-color: grey;
width: 600px;
padding: 10px 0px;
margin: 40px 20px;
border-radius: 2%;
align-self: center;
img {
  height: 500px;
  width: 575px;
  border-radius: 2%;
}
a{
  padding: 0px 5px;
}
`;

// const ProjectsContainer = styled.div`
// display: flex;
// flex-direction: column;
// align-content: center;
// justify-content: center;
// padding-bottom: 40px;
// width: 600px;
// `;


// const ProjectDiv = styled.div`
// background-color: grey;
// width: 600px;
// padding: 10px 0px;
// border-radius: 2%;
// align-self: center;
// justify-self: center;
// img {
//   height: 500px;
//   border-radius: 2%;
//   margin-left: 10px;
// }
// a{
//   padding: 0px 5px;
// }
// `;