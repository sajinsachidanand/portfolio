import React from "react";

import {
  Section,
  SectionTitle,
  UnderlinedLink,
  UnorderedList,
  ListItem
} from "../../shared/styles/styled-components";
import { Points, Point } from "../../shared/styles/styles-projects";

import { OSS } from "../../data/projects";

const OpenSourceCommits = () => {
  return (
    <Section>
      <SectionTitle>Open Source Contributions</SectionTitle>
      <UnorderedList>
      </UnorderedList>
    </Section>
  );
};

export default OpenSourceCommits;
