import styled from "styled-components";
import nbrly from "../images/nbrly.png";
import weatherApp from "../images/weather-app.png";
import nasa from "../images/nasa.png";
import bookLibraryApi from "../images/book-library-api.png";
import "../CSS/styles.css";
import YoutubeEmbed from "./YoutubeEmbed";

const AllProjectsContainer = styled.div`
  padding: 0em 3em 7em 3em;
  @media (max-width: 768px) {
    padding: 0em 1em 6em 1em;
  }
`;

const SingleJobContainer = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: items;
  padding: 3em;

  @media (max-width: 768px) {
    flex-direction: column;

    padding-top: 3em;
    padding-bottom: 3em;
  }
`;

const ProjectDescription = styled.span`
  align-items: center;
`;

const ProjectImg = styled.img`
  padding-top: 1em;
  width: 300px;
  margin-right: 3em;
  @media (max-width: 768px) {
    margin: 0;
    width: 100%;
  }
`;

const ProjectHeading = styled.h1`
  font-family: "Major Mono Display", monospace;
  text-align: center;
  padding-top: 4em;
`;

const Heading = styled.h3`
  font-family: "Syne Mono", monospace;
  color: #d26f4e;
`;

const NbrlyVid = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
`;

const Projects = () => {
  return (
    <div id="Projects">
      <AllProjectsContainer>
        <ProjectHeading>projects</ProjectHeading>
        <SingleJobContainer>
          <a
            href="https://github.com/anna-m-b/nbrly"
            target="_blank"
            rel="noreferrer"
          >
            <ProjectImg img src={nbrly} />
          </a>
          <ProjectDescription>
            <Heading>NBRLY</Heading>
            <p>
              A full stack web app that connects you with the people around you.
              By answering the simple question, "What do you want to do today?"
              you are instantly linked with like-minded people in your
              geographic vicinity for sports, nightlife, and everything in
              between. Built with React and Firebase, in collaboration with
              developers Robin Edwards and Anna Balquin.{" "}
              <a
                href="https://nbrly-nu.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Click here
              </a>{" "}
              to view deployed app.{" "}
              <a
                href="https://github.com/halfulcher/nbrly"
                target="_blank"
                rel="noreferrer"
              >
                Click here
              </a>{" "}
              to view code.{" "}
            </p>
            <p>Video demo:</p>
            <YoutubeEmbed embedId="BygQIm68VdI" />
          </ProjectDescription>
        </SingleJobContainer>

        <SingleJobContainer>
          <a
            href="https://halfulcher.github.io/nasa-app/"
            target="_blank"
            rel="noreferrer"
          >
            <ProjectImg img src={nasa} />
          </a>
          <ProjectDescription>
            <Heading>NASA Search Engine</Heading>
            <p>
              A search engine app for NASA's image library. API endpoint was
              provided as part of the brief. User is able to search for and
              return space-related images. Built with React.{` `}
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
          <a
            href="https://halfulcher.github.io/weather-app/"
            target="_blank"
            rel="noreferrer"
          >
            <ProjectImg img src={weatherApp} />
          </a>
          <ProjectDescription>
            <Heading>Weather App</Heading>
            <p>
              The app uses the Open Weather API to retrieve and display 5-day
              weather forecast data for towns and cities in the UK. It includes
              detailed information such as: min and max temperature, humidity,
              wind direction and speed as well as a general description and icon
              depicting the general forecast. Built with React.{" "}
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

        <SingleJobContainer>
          <a
            href="https://github.com/HalFulcher/book-library-api"
            target="_blank"
            rel="noreferrer"
          >
            <ProjectImg img src={bookLibraryApi} />
          </a>
          <ProjectDescription>
            <Heading>Book Library API</Heading>
            <p>
              An API that allows users to create accounts, list books and
              request to loan other users books. Uses the Sequelize Object
              Relational Mapper (ORM) to interact with the SQL database. Built
              with Express, Node.js, Sequelize and MySQL.{" "}
              <a
                href="https://github.com/HalFulcher/book-library-api"
                target="_blank"
                rel="noreferrer"
              >
                Click here
              </a>
              {` `}
              to view code.{` `}
            </p>
          </ProjectDescription>
        </SingleJobContainer>
      </AllProjectsContainer>
    </div>
  );
};

export default Projects;
