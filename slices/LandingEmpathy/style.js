import styled from "styled-components";
import { sectionPadding } from "../../components/styles/mixins";

const defaultPattern =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyMCcgaGVpZ2h0PScyMCcgdmlld0JveD0nMCAwIDIwIDIwJz48Y2lyY2xlIGN4PScxJyBjeT0nMScgcj0nMicgZmlsbD0nI2U1ZTVlNScgLz48L3N2Zz4=";

const Section = styled.section`
  background-image: ${({ bgimg }) => `url(${bgimg || defaultPattern})`};
  background-size: 20px 20px;
  background-position: center;
  background-color: ${({ bgimg }) => (bgimg ? "transparent" : "white")};
  ${sectionPadding("3rem")}
  text-align: center;
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: #3962e9;
  font-weight: bold;
  font-size: clamp(1.5rem, 5vw, 2rem);
  line-height: 1.3;
`;

const Description = styled.div`
  margin-top: 1.5rem;

  p {
    font-size: clamp(0.95rem, 2.5vw, 1rem);
    line-height: 1.8;
  }
`;

const Footer = styled.div`
  margin-top: 2.5rem;

  p {
    color: #000;
    text-align: center;
    font-weight: 500;
    font-size: clamp(0.95rem, 2.5vw, 1rem);
    line-height: 1.6;
  }
`;

export { Section, ContentWrapper, Title, Description, Footer };
