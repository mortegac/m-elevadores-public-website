import styled from "styled-components";

export const Section = styled.section`
  background-color: #243c70;
  padding: 4rem 10rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Title = styled.div`
  p,
  h1 {
    font-weight: 900;
    font-size: 2rem;
    color: white;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 0;
  }
`;

export const Subtitle = styled.div`
  p,
  h2 {
    font-weight: 600;
    font-size: 1rem;
    color: white;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: flex-end;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const InputWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 200px;

  input {
    padding: 8px;
    border-radius: 5px;
    width: 100%;
    box-sizing: border-box;
    border: none;
  }

  label {
    color: white;
    margin-bottom: 4px;
  }

  .error-message {
    min-height: 1em;
    font-size: 0.8rem;
    color: red;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
  }

  .error-message.visible {
    opacity: 1;
    visibility: visible;
  }
`;

export const ButtonWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 200px;

  .error-message {
    height: 1em;
    min-height: 1em;
    visibility: hidden;
  }
`;

export const Button = styled.button`
  all: unset;
  padding: 8px;
  border-radius: 5px;
  background-color: #2760d9;
  color: white;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;
  line-height: 1;
`;
