import styled from "styled-components";
import { sectionPadding } from "../../components/styles/mixins";

export const Section = styled.section`
  background-color: #fff;
  ${sectionPadding("2rem")}
`;

export const Title = styled.div`
  h1 {
    font-weight: 900;
    font-size: clamp(1.5rem, 4.5vw, 2rem);
    color: #3962e9;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
`;

export const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  justify-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 2rem;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  background: #f0f4ff;
  border-radius: 14px;
  padding: 1.25rem 0.75rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-3px);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    background: transparent;
    padding: 0;
    max-width: 180px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.25rem;
  background-color: #3962e9;
  border-radius: 1rem;
  transition: transform 0.3s ease-in-out;
  will-change: transform;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 0.875rem;
  }
`;

export const Icon = styled.img`
  width: 2rem;
  height: 2rem;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const Label = styled.div`
  font-weight: 700;
  text-align: center;
  margin-top: 0.625rem;

  p,
  span {
    font-weight: inherit !important;
    margin: 0;
    text-align: center;
    font-size: 1rem;

    @media (max-width: 768px) {
      font-size: 0.82rem;
      line-height: 1.3;
    }
  }
`;
