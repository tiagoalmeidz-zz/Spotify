import React from "react";
import { Container, Section } from "react-bulma-components";

const SectionWrapper = ({ children }) => {
  return (
    <Section>
      <Container>{children}</Container>
    </Section>
  );
};
export default SectionWrapper;
