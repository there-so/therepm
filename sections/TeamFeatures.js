/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import styled, { css } from "styled-components";

import { phone } from "../utils/media";
import Container from "../components/Container";
import FeatureItem from "../components/FeatureItem";
import SectionHeading from "../components/SectionHeading";
import { Circle, Rect, Triangle } from "../components/Svgs";

const TeamFeatures = () => (
  <Wrapper>
    <Container>
      <SectionHeading>Noor Features</SectionHeading>

      <GridWrapper>
        <FeatureItem
          title="Messaging"
          desc="Message once and reach every relevant conversation."
          renderIcon={() => <Triangle />}
          iconTop={-10}
          iconLeft={-9}
        />

        <FeatureItem
          title="Focus Mode"
          desc="Notifications that don't disrupt your flow."
          renderIcon={() => <Circle />}
          iconTop={-12}
          iconLeft={-25}
        />

        <FeatureItem
          title="Real Time Collaboration"
          desc="Seamless voice, screen sharing and presence."
          renderIcon={() => <Rect />}
          iconTop={-6}
          iconLeft={-14}
        />

        <FeatureItem
          title="Shared Notes (tasks)"
          desc="Shared task management to stay in sync."
          renderIcon={() => <Triangle />}
          iconTop={-12}
          iconLeft={-25}
        />

        <FeatureItem
          title="Cross Platform"
          desc="Available on Mac, IOS and web"
          renderIcon={() => <Circle />}
          iconTop={-12}
          iconLeft={-25}
        />

        <FeatureItem
          title="Offline Support"
          desc="Access your chats even without an internet connection."
          renderIcon={() => <Triangle />}
          iconTop={-12}
          iconLeft={-12}
        />

        <SubscribeToTeams />
      </GridWrapper>
    </Container>
  </Wrapper>
);

export default TeamFeatures;

const SubscribeToTeams = () => (
  <SlackWrapper>
    <SlackFeatureItemWrapper>
      <FeatureItem
        title="Install Noor Now"
        desc="We’re now building the best team chat app"
      />
      <br />
      <ButtonLink href="https://noor.to">Download Noor</ButtonLink>
    </SlackFeatureItemWrapper>
  </SlackWrapper>
);

const Wrapper = styled.section`
  margin-top: 170px;

  ${phone(css`
    margin-top: 110px;
  `)};
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto 1fr;
  grid-column-gap: 100px;
  grid-row-gap: 40px;

  ${phone(css`
    grid-template-columns: 1fr;
  `)};
`;

const SlackIconWrapper = styled.div`
  max-width: 400px;
  border-radius: 5px;
  box-shadow: 0 8px 24px 2px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 0 auto;
  margin-bottom: 24px;

  align-self: flex-start;

  img {
    display: block;
  }
`;

const SlackFeatureItemWrapper = styled.div`
  grid-column: 2;
  grid-row: 1;
  padding-bottom: 12px;
`;

const SlackWrapper = styled.div`
  width: 100%;
  grid-column: 1 / 4;
  padding: 30px 37px;
  background: #c9fcff; /* #f0f0f0; */
  text-align: center;

  ${phone(css`
    grid-column: 1;
    padding: 22px 25px;
    text-align: right;

    display: inline-grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto;
  `)};
`;

const ButtonLink = styled.a`
  padding: 12px 24px;
  font-size: 20px;
  font-weight: 600;

  background: ${(p) => p.theme.colors.brandBlue};
  color: rgba(255, 255, 255, 0.85);
  border: none;
  cursor: pointer;

  text-decoration: none;
  transform-origin: right center;
  transition: background 160ms ease-out, transform 160ms ease-out, color 160ms,
    box-shadow 160ms;

  background: ${(p) => p.theme.colors.brandBlue};
  transform: scale(1.1);
  color: white;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.15);

  &:hover {
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
    color: rgba(255, 255, 255, 0.85);
  }

  &:active {
    transform: scale(1.05);
  }

  ${phone(css`
    margin-top: 18px;
    transform-origin: center center;
  `)};
`;
