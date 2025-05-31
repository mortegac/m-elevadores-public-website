import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  background-color: #fff;
  padding: 3rem 10rem;

  font-size: 2.5rem;
  font-weight: 800;
  color: #3962e9;
  text-align: center;

  @media (max-width: 1100px) {
    font-size: 2rem;
    line-height: 1;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    font-size: 2rem;
    flex-wrap: wrap;
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
