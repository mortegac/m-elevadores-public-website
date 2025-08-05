import styled from "styled-components";

const Section = styled.div`
  background: white;
  padding: 2rem 10rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const Card = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  transition: box-shadow 0.3s ease;
  width: calc(50% - 0.5rem);
  padding: 5rem;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1.25rem;
  }

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
