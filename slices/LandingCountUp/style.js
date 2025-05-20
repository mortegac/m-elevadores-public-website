import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  background-color: #fff;
  padding: 4rem 10rem;

  font-size: 4rem;
  font-weight: 800;
  color: #3962e9;
  text-align: center;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    font-size: 2.5rem;
    flex-wrap: wrap; /* allows line wrap on small screens */
  }

  p {
    margin: 0;
    font: inherit;
    color: inherit;
    display: inline;
  }
`;

export const Counter = styled.span`
  font: inherit;
  color: inherit;
  min-width: 4ch;
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
