import React from "react";
import { FaGithub } from "react-icons/lib/fa";

import {
  Wrapper,
  Link,
  Title,
  Points,
  Point,
  GithubUnderlinedLink
} from "../../shared/styles/styles-projects";
import { Section, SectionTitle } from "../../shared/styles/styled-components";

import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <Section>
      <SectionTitle>Projects I've Worked on 👨‍💻</SectionTitle>
      <Wrapper>
      </Wrapper>
    </Section>
  );
};

export default Projects;
