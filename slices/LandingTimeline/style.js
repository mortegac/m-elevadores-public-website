import styled from "styled-components";

export const Section = styled.div`
  background-color: white;
  padding: 1rem 10rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }

  .title h1 {
    font-weight: 900;
    font-size: 2rem;
    color: #3962e9;
    text-align: center;
    margin: 0;
  }

  .step-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }

  .step {
    position: relative;
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: flex-start;
    max-width: 600px;
    width: 100%;
    overflow: visible;

    &::before {
      content: "";
      position: absolute;
      top: -24px;
      bottom: -24px;
      left: 20px;
      width: 2px;
      background-color: #3962e9;
      z-index: -1;
    }
  }

  .step:first-child::before {
    top: 50%;
  }

  .step:last-child::before {
    bottom: 50%;
  }

  .step-number {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    min-width: 40px;
    min-height: 40px;
    color: white;
    font-weight: 700;
    font-size: 1.2rem;
    background: #3962e9;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(57, 98, 233, 0.5);
    user-select: none;
    transition: background 0.3s ease;

    flex-shrink: 0; /* Prevent shrinking on mobile */

    &::before {
      content: "";
      position: absolute;
      top: -24px;
      bottom: -24px;
      left: 50%;
      transform: translateX(-50%);
      width: 2px;
      background-color: #3962e9;
      z-index: -1;
    }
  }

  .step:first-child .step-number::before {
    top: 100%;
  }

  .step:last-child .step-number::before {
    bottom: 100%;
  }
`;
