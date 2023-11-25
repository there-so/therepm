import styled, { css } from "styled-components";

import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import SectionWrapper from "../components/SectionWrapper";
import { phone } from "../utils/media";

const IsItReady = () => (
  <SectionWrapper>
    <Anchor id="isitready" />

    <Container>
      <SectionHeading>Our New app (Noor)</SectionHeading>

      <Text>
        <p>👍 Start using Noor for free now instead of Slack/Discord/Teams</p>

        <p>📱 You can Use mac & ios app now. More platforms too.</p>

        <p>💌 Subscribe for updates on our latest features!</p>
      </Text>
    </Container>
  </SectionWrapper>
);

export default IsItReady;

const Text = styled.div`
  p {
    margin: 15px 0 0 0;
    color: ${(p) => p.theme.colors.greyText};

    &:first-child {
      margin-top: 0;
    }
  }
`;

const Anchor = styled.div`
  position: relative;
  top: -100px;

  ${phone(css`
    top: -60px;
  `)};
`;
