import React from "react";
import styled from "styled-components";
import Skillcard from "../components/cards/skills";
import ScrollAnimation from "react-animate-on-scroll";
import "../animate.css";
import { FaCode, FaDesktop, FaMobileAlt } from "react-icons/fa";
import Html from "../assests/Html5.svg";
import CSS from "../assests/Css3.svg";
import Javascript from "../assests/Javascript.svg";
import Reacts from "../assests/React.svg";
import Node from "../assests/Nodejs.svg";
import Github from "../assests/Github.svg";
import Heroku from "../assests/Heroku.svg";
import Mongo from "../assests/MongoDb.svg";
import Mocha from "../assests/Mocha.svg";
import Postgres from "../assests/Postgresql.svg";
import Trello from "../assests/Trello.svg";


const skills = [
  {
    id: 1,
    icon: <FaDesktop />,
    name: "FRONT END DEVELOPMENT",
    description:
      "Create responsive user pages for apps and websites."
  },
  {
    id: 2,
    icon: <FaCode />,
    name: "BACKEND-API DEVELOPMENT",
    description:
      "Build API's and backend solutions to interact with severs and databases."
  },
  {
    id: 3,
    icon: <FaMobileAlt />,
    name: "MOBILE APP DEVELOPMENT",
    description:
      "Create applications for mobile phones and Progessive Web Apps."
  }
];
const Container = styled.div`
    display:flex;
    flex-direction:column;
    height:100vh;
    width: 85%;
    margin-left:15%;
    margin-top:5%;
  h2{
      font-size:1.5em;
      color:rgb(32, 53, 67);
      margin-bottom: 5vh;
  }
  
`;
const Skill = styled.div`
  display: flex;
  margin: 3% 0%;
  width: 90%;
  justify-content: space-between;
`;
const Tools = styled.div`
  margin: 2% 1.5%;
  background-repeat: no-repeat;
  background-size: contain;
  height: 6vh;
  width: 25%;
`;
const ToolKit = styled.div`
  display: flex;
  width:100%;
`;
const Lower = styled.div`
  display: flex;
  width: 90%;
  justify-content:space-between;
`;
const FirstPart = styled.div`
  width:50%
`
const SecondPart = styled.div`
  width:40%;
  margin-left:10%;
`
const Div = styled.div`
display:flex;
width:100%;
justfy-content:space-between;
span{
    width:33%;
    padding:4% 0;
}
`;
const H = styled.h2`
margin-left:40%
`
const Skills = () => {
  return (
    <Container>
      <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOut">
        <H>WHAT I DO </H>
        <Skill>
          {skills.map(skill => (
            <Skillcard key={skill.id} data={skill} />
          ))}
        </Skill>
      </ScrollAnimation>
      <Lower>
        <FirstPart>
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <h2>TECHNICAL SKILLS</h2>
            <Div>
            <span>Programming</span>
            <span>Algorithms</span>
            <span>Database Management</span>
          
            </Div>
            <Div>
            <span>Lean Development</span>
            <span>Agile Development</span>
            <span>Test Driven Development</span>
            </Div>
            <Div>
            <span>User Research</span>
            <span>Debugging</span>
            <span>Project Management</span>
           
            </Div>
        
          </ScrollAnimation>
        </FirstPart>
        <SecondPart>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <h2>TOOLS</h2>
            <ToolKit>
              <Tools style={{ backgroundImage: `url(${Html})` }} />
              <Tools style={{ backgroundImage: `url(${CSS})` }} />
              <Tools style={{ backgroundImage: `url(${Javascript})` }} />
              <Tools style={{ backgroundImage: `url(${Reacts})` }} />
            </ToolKit>
            <ToolKit>
              <Tools style={{ backgroundImage: `url(${Postgres})` }} />
              <Tools style={{ backgroundImage: `url(${Node})` }} />
              <Tools style={{ backgroundImage: `url(${Trello})` }} />
              <Tools style={{ backgroundImage: `url(${Github})` }} />
            </ToolKit>
            <ToolKit>
              <Tools style={{ backgroundImage: `url(${Heroku})` }} />
              <Tools style={{ backgroundImage: `url(${Mongo})` }} />
              <Tools style={{ backgroundImage: `url(${Mocha})` }} />
              <Tools style={{ backgroundImage: `url(${Postgres})` }} />
            </ToolKit>
        </ScrollAnimation>
        </SecondPart>
      </Lower>
    </Container>
  );
};
export default Skills;
