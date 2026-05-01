import styled from "styled-components";
import { sectionPadding, touchInput, tapTarget } from "../../components/styles/mixins";

export const Section = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  ${sectionPadding("2.5rem")}
  background: ${({ bgimage }) =>
    bgimage ? `url(${bgimage}) center/cover no-repeat` : "#243c70"};
  color: white;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
    display: ${({ bgimage }) => (bgimage ? "block" : "none")};
  }

  @media (min-width: 768px) {
    grid-template-columns: 1.1fr 1fr;
    gap: 2rem;
    align-items: center;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 3rem;
  }
`;

export const KeywordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.875rem;
  margin-top: 1rem;
`;

export const Keyword = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
`;

export const Title = styled.div`
  margin-bottom: 1rem;
  h1 {
    margin: 0;
    text-align: left;
    font-size: clamp(1.75rem, 5vw, 3rem);
    line-height: 1.15;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      margin-bottom: 0.5rem;
    }
  }

  p {
    font-size: clamp(0.95rem, 2.5vw, 1.1rem);
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      line-height: 1.55;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 14px;
    padding: 1.25rem;
    backdrop-filter: blur(6px);
    border: 1px solid rgba(255, 255, 255, 0.15);
  }

  h2 {
    margin: 0;
    line-height: 1.2;
  }

  p {
    margin: 0;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 0.5rem;
  }

  input {
    ${touchInput}
  }

  .error-message {
    color: #ffd700;
    font-size: 0.875rem;
    visibility: hidden;

    &.visible {
      visibility: visible;
    }
  }
`;

export const TextArea = styled.textarea`
  ${touchInput}
  resize: vertical;
  max-height: 150px;
  min-height: 96px;
`;

export const ButtonWrapper = styled.div`
  button {
    ${tapTarget}
    width: 100%;
    padding: 14px 24px;
    background-color: #0070f3;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;

    &:hover {
      background-color: #005bb5;
    }
  }
`;
