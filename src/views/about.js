import React from "react";
import styled from "styled-components";
import developer from "../assests/developer.png";
import ScrollAnimation from 'react-animate-on-scroll';
import "../animate.css";
const Container = styled.div`
  width: 85%;
  margin-left: 15%;
  display: flex;
  height:100vh;
  justify-content: space-between;
  align-items: center;
  div{
    width:90%;
  }
  @media(max-width:1024px){
    flex-direction:column;
    margin:0 5%;
    width:90%;
  }
`;
const Details = styled.div`
  width: 50%;
  margin-right: 10%;
  margin-top:5%;
  text-align: justify;
  @media(max-width:1024px){
    width:100%;
    margin-left:15%;
  
  }
  @media(max-width:600px){
    margin-right:0%;
    width:100%;
    margin-left:0%;
  
  }
  h2{
    color:rgb(32, 53, 67);
    font-size:1.5em;
    @media(max-width:800px){
      text-align:center;
      margin:0% 5%;
    
    }
    @media(max-height:400px){
      text-align:left;
      margin-left:10%;
    
    }
  }
  p {
    line-height: 22px;
    font-size: 0.9em;
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
    @media(max-width:600px){
      line-height:18px;
      font-size:0.8em;
      padding: 0%;
    }
    @media(max-width:1024px){
      font-size:1em;
    }

  }
  h3{
    @media(max-width:600px){
      margin: 0 5%;
    }
  }
  span {
    border: 2px solid rgb(32, 53, 67);
    border-raduis: 5px;
    width: 18%;
    margin-bottom:5%;
    text-align: center;
    @media(max-width:600px){
      line-height:18px;
      font-size:0.6em;
    }
  }
`;
const Side = styled.div`
width: 100%
background: url(${developer});
height:80vh;
background-size:100%;
background-position:center;
background-repeat:no-repeat;
@media(max-width:600px){
  height:40vh;
  width:100%;
  background-size:100%;
  margin-bottom:1%;
}
@media(max-height:400px){
  height:50vh;
  margin-left:5%;
  background-size:60%;
  width:100%;
}
@media(min-width:601px and max-width:1024px){
  height:40vh;
  margin-left:10%;
  background-size:60%;
}
`;
const Initial = styled.div`
  font-weight: bold;
  @media(max-width:800px){
    padding-top:5%;
    text-align:center;
  }
  @media(max-height:400px){
    padding-top:5%;
    text-align:left;
  }
`;
const About = () => {
  return (
    <Container>
       <ScrollAnimation animateIn="fadeIn"><Side></Side></ScrollAnimation>
      <Details>
      <ScrollAnimation animateIn="fadeInUp" style={{width:'100%'}}>
        <h2>About Me</h2>

        <Initial>Firstly, I love coding!</Initial>
        <p>
          When I was 10, I went with a classmate to the cybercafe to get answers
          to a school project. While there, I started inputting the web address
          in the google search bar. He had to correct me quite a number of times
          before i got the difference. It was simple, if you need to go the
          exact web page, put the address in the address bar. But i did not know it.
          That was my first experience with computers and that was the moment i
          decided i was going to learn what there was to learn about this
          intriguing device everyone in the cybercafe was spending time on. Over
          the years, technology has evolved and the number of people going to
          cybercafe has drastically reduced in Nigeria but my excitement over
          technology has not.
        </p>
        <p>
          I am Ogbonna Basil, a software engineer. I have a degree in Mathematics and Statistics, certifications in data
          science, and experience in building web apps. 
          </p>
          <p>My ultimate desire is to improve human lives and raise human potential
          through software development and to contribute my quarter to making our cities
          smarter and our lives less stressful.When I am not coding, I am volunteering, listening to music, or
          playing chess.
        </p>
        <h3>My Core </h3>
        <p>
          {" "}
          <span>HTML</span>
          <span>CSS</span>
          <span>Javascript</span>
          <span>React</span>
          <span>Node Js</span>
         <span>REST</span>
          <span>GraphQl</span>
          <span> API </span>
          <span>Postgres</span>
          <span>MongoDb</span>
        </p>
        </ScrollAnimation>
      </Details>
    </Container>
  );
};
export default About;
