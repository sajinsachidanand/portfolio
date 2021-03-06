import React from "react";

import {
  Section,
  SectionTitle,
  UnderlinedLink,
  UnorderedList,
  ListItem
} from "../../shared/styles/styled-components";

import { Points, Point } from "../../shared/styles/styles-projects";

import { blogposts, blogMeta } from "../../data/blog";
import { links } from "../../data/socialLinks";

const Blogs = () => {
  return (
    <Section id="blogs">
      <SectionTitle>Latest Blog Posts 📋</SectionTitle>
      <Points>
        <Point>{blogMeta.description}</Point>
        <Point>
          For Full Archive, go{" "}
          <UnderlinedLink target="_blank" rel="noopener" href={links.medium}>
            here!
          </UnderlinedLink>
        </Point>
      </Points>
      <UnorderedList>
      </UnorderedList>
    </Section>
  );
};

export default Blogs;
