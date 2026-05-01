import styled from "styled-components";
import { sectionPadding } from "../../components/styles/mixins";

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  background-color: #fff;
  ${sectionPadding("3rem")}

  font-size: clamp(1.75rem, 5vw, 4rem);
  font-weight: 800;
  color: #3962e9;
  text-align: center;

  @media (min-width: 768px) {
    gap: 1.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 2.5rem;
  }

  p {
    margin: 0;
    font: inherit;
    color: inherit;
    display: inline;
  }
`;

export const Counter = styled.span`
  position: relative;
  display: inline-block;
  font: inherit;
  color: inherit;
  width: 4ch;
  text-align: right;
`;

export const Text = styled.div`
  font: inherit;
  color: inherit;

  * {
    display: inline;
    margin: 0;
    font: inherit;
    color: inherit;
  }
`;
