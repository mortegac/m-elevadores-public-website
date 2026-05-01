import styled from "styled-components";
import { sectionPadding } from "../../components/styles/mixins";

export const Section = styled.section`
  ${sectionPadding("2rem")}
  background: ${(props) =>
    props.$isBackgroundVariation ? "#243c70" : "#ffffff"};
`;

export const Title = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    font-weight: 900;
    font-size: clamp(1.5rem, 4.5vw, 2rem);
    color: ${(props) => (props.$isBackgroundVariation ? "white" : "#3962e9")};
  }
`;

export const Description = styled.div`
  max-width: 900px;
  margin: 0 auto 3rem auto;
  text-align: justify;
  line-height: 1.7;
  color: ${(props) =>
    props.$isBackgroundVariation ? "white" : "#555"};
  font-size: 1.05rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: left;
    font-size: 0.95rem;
    margin-bottom: 2rem;
    line-height: 1.65;
  }
`;

export const VideoGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;

  @media (min-width: 768px) {
    gap: 2rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 2.5rem;
  }
`;

export const VideoItem = styled.div`
  flex: 0 0 auto;
  width: calc(33.333% - 1rem);

  @media (max-width: 1024px) {
    width: calc(50% - 0.75rem);
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`;

export const Video = styled.video`
  width: 100%;
  max-height: 500px;
  object-fit: contain;
  border-radius: 14px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(57, 98, 233, 0.1);
  background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
  border: 2px solid rgba(57, 98, 233, 0.15);
`;
