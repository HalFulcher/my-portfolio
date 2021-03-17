// make Project titles in line with project descriptions.

import styled from "styled-components";
import nbrly from "../images/nbrly.png";
import weatherApp from "../images/weather-app.png";
import nasa from "../images/nasa.png";

const AllProjectsContainer = styled.div`
  padding: 1em 5em 7em;
`;

const SingleJobContainer = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: items;
  padding: 1em 2em 3em 2em;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2em 0;
    align-items: center;
  }
`;

const ProjectDescription = styled.span`
  margin: 0 0 0 2em;
  @media (max-width: 768px) {
    margin: 0 0 0 1em;
  }
`;

const ProjectImg = styled.img`
  padding: 1em 0 0 0;
  width: 300px;
  height: 100%;
`;

const Projects = () => {
  return (
    <AllProjectsContainer>
      <SingleJobContainer>
        <ProjectImg img src={nbrly} />
        <ProjectDescription>
          <h3>NBRLY - currently in construction</h3>
          <p>
            A full stack web app that connects you with the people around you.
            By answering the simple question, "What do you want to do today?"
            you are instantly linked with like-minded people in your geographic
            vicinity for sports, nightlife, and everything in between. Built
            with React and node, in collaboration with developers Robin Edwards
            and Anna Balquin.{" "}
            <a
              href="https://github.com/ro8inro8in/nbrly"
              target="_blank"
              rel="noreferrer"
            >
              Click here
            </a>{" "}
            to view frontend code. Click here to view backend code.
          </p>
        </ProjectDescription>
      </SingleJobContainer>

      <SingleJobContainer>
        <ProjectImg img src={nasa} />
        <ProjectDescription>
          <h3>NASA Search Engine</h3>
          <p>
            A search engine app for NASA's image library. API endpoint was
            provided as part of the brief. User is able to search for and return
            relevant images. Built with React.{` `}
            <a
              href="https://halfulcher.github.io/nasa-app/"
              target="_blank"
              rel="noreferrer"
            >
              Click here
            </a>{" "}
            to view deployed app.{` `}
            <a
              href="https://github.com/HalFulcher/nasa-app"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Click here
            </a>{" "}
            to view code.
          </p>
        </ProjectDescription>
      </SingleJobContainer>

      <SingleJobContainer>
        <ProjectImg img src={weatherApp} />

        <ProjectDescription>
          <h3>Weather App</h3>
          <p>
            The app uses the Open Weather API to retrieve and display 5-day
            weather forecast data for towns and cities in the UK. It includes
            detailed information such as: min and max temperature, humidity,
            wind direction and speed as well as a general description and icon
            depicting the general forecast. Made with React.{" "}
            <a
              href="https://halfulcher.github.io/weather-app/"
              target="_blank"
              rel="noreferrer"
            >
              Click here
            </a>
            {` `}
            to view deployed app.{` `}
            <a
              href="https://github.com/HalFulcher/weather-app"
              target="_blank"
              rel="noreferrer"
            >
              Click here
            </a>{" "}
            to view code.{" "}
          </p>
        </ProjectDescription>
      </SingleJobContainer>
    </AllProjectsContainer>
  );
};

export default Projects;
