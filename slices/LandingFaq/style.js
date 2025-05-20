import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fff;
  padding: 1rem 10rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const FaqSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* Title styling */
  .title p, h1{
    font-weight: 900;
    font-size: 2rem;
    color: #3962e9;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  /* FAQ container full width */
  .faq-list {
    width: 100%;
  }

  details {
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 1rem;
  padding: 0;
  background-color: #fff;

summary p {
  font-weight: 700;
}

  summary {
    list-style: none;
    cursor: pointer;
    font-weight: 700;
    position: relative;
    padding: 1rem 1rem 1rem 2.5rem;
    color: #000;
    user-select: none;

    border-radius: 8px; /* rounded corners when closed */
    background-color: transparent;

    &::-webkit-details-marker {
      display: none;
    }

    &::before {
      content: "+";
      position: absolute;
      left: 0.75rem;
      top: 50%;
      transform: translateY(-50%);
      font-weight: 700;
      font-size: 1.5rem;
      color: #000;
      transition: color 0.3s ease;
    }
  }

  &[open] {
    background-color: transparent;

    summary {
      background-color: #3962e9;
      color: #fff;
      border-radius: 8px 8px 0 0;
    }

    summary::before {
      content: "-";
      color: #fff;
    }
  }

  > *:not(summary) {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: max-height 0.35s ease, padding 0.35s ease, opacity 0.35s ease;
    color: #000;
    background-color: #c1d0ff;
    padding: 0 1rem;
    border-radius: 0 0 8px 8px;
    margin-top: 0;
  }

  &[open] > *:not(summary) {
    max-height: 500px;
    opacity: 1;
    padding: 1rem;
  }
}

  }
`;
