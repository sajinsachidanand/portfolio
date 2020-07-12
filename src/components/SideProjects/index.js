import React, { Component } from "react";
import { FaGithub } from "react-icons/lib/fa";
import ToggleDisplay from "react-toggle-display";

import {
  Wrapper,
  Link,
  Title,
  Points,
  Point,
  GithubUnderlinedLink
} from "../../shared/styles/styles-projects";
import {
  Section,
  SectionTitle,
  ShowMoreButton
} from "../../shared/styles/styled-components";

import { sideProjects } from "../../data/projects";

class SideProjects extends Component {
  state = {
    show: false,
    text: "Show me more"
  };

  handleClick() {
    this.setState({
      show: !this.state.show,
      text: "That's Enough!"
    });
  }

  render() {
    return (
      <Section>
        <SectionTitle>Side Projects</SectionTitle>
        <ShowMoreButton onClick={() => this.handleClick()}>
          {this.state.text}
        </ShowMoreButton>
        <ToggleDisplay show={this.state.show}>
          <Wrapper>
          </Wrapper>
        </ToggleDisplay>
      </Section>
    );
  }
}

export default SideProjects;
