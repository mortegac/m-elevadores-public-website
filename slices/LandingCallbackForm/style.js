import styled from "styled-components";
import { sectionPadding, touchInput, tapTarget } from "../../components/styles/mixins";

export const Section = styled.section`
  background-color: #243c70;
  ${sectionPadding("2rem")}
`;

export const Title = styled.div`
  h1 {
    font-weight: 900;
    font-size: 2rem;
    color: white;
    text-align: center;
    margin: 0;

    @media (min-width: 768px) {
      font-size: 2.25rem;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 2.5rem;
    }

    @media (max-width: 768px) {
      font-size: clamp(1.4rem, 6vw, 1.75rem);
      line-height: 1.2;
    }
  }
`;

export const Subtitle = styled.div`
  p {
    font-weight: 600;
    font-size: 1rem;
    color: white;
    text-align: center;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      font-size: 0.9rem;
      margin-top: 0.5rem;
      margin-bottom: 1.25rem;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0.25rem;
  }
`;

export const InputWrapper = styled.div`
  flex: 1 1 220px;
  display: flex;
  flex-direction: column;
  min-width: 0;

  input {
    ${touchInput}
  }

  label {
    color: white;
    margin-bottom: 4px;
  }

  .error-message {
    min-height: 1em;
    font-size: 0.8rem;
    color: #ffd700;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
  }

  .error-message.visible {
    opacity: 1;
    visibility: visible;
  }

  @media (max-width: 768px) {
    flex: 0 0 auto;
    width: 100%;

    label {
      font-size: 0.85rem;
      margin-bottom: 2px;
    }

    input {
      padding: 10px 12px;
      min-height: 40px;
    }

    .error-message {
      min-height: 0;
      height: 0;
      overflow: hidden;
      margin: 0;
    }

    .error-message.visible {
      min-height: 1em;
      height: auto;
      margin-top: 2px;
    }
  }
`;

export const ButtonWrapper = styled.div`
  flex: 1 1 220px;
  display: flex;
  flex-direction: column;
  min-width: 0;

  .error-message {
    height: 1em;
    min-height: 1em;
    visibility: hidden;
  }

  @media (max-width: 768px) {
    flex: 0 0 auto;
    width: 100%;
    margin-top: 0.5rem;

    .error-message {
      display: none;
    }
  }
`;

export const Button = styled.button`
  all: unset;
  ${tapTarget}
  padding: 14px 20px;
  border-radius: 8px;

  @media (max-width: 768px) {
    padding: 12px 16px;
    min-height: 44px;
  }
  background-color: #0070f3;
  color: white;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;
  line-height: 1.2;

  &:hover {
    background-color: #005bb5;
  }
`;
