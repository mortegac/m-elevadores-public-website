import styled from "styled-components";
import { sectionPadding } from "../../components/styles/mixins";

const Section = styled.div`
  background: white;
  ${sectionPadding("2rem")}
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 2rem;
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  padding: clamp(1.25rem, 4vw, 3rem);
  transition: box-shadow 0.3s ease;

  .title h1 {
    color: #2f54eb;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.2;
    margin-bottom: 0.75rem;

    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }

  .description p {
    color: #333;
    font-size: 0.95rem;
    margin-bottom: 0.75rem;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }

  .standout p {
    background-color: #e6f0ff;
    color: #2f54eb;
    font-weight: 700;
    font-size: 0.95rem;
    padding: 0.5rem 1rem;
    border-radius: 999px;
    display: inline-block;
    margin-top: 1rem;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

export { Section, Grid, Card };
