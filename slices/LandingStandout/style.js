import styled from "styled-components";

export const Section = styled.section`
  background-color: #fff;
  padding: 1rem 10rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Title = styled.div`
  p,
  h1 {
    font-weight: 900;
    font-size: 2rem;
    color: #3962e9;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
`;

export const ItemGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
    padding: 1rem;
  }
`;

export const Item = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  background-color: #3962e9;
  border-radius: 1rem;
  transition: transform 0.3s ease-in-out;
  will-change: transform;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 1rem;
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

  p,
  span {
    font-weight: inherit !important;
    margin: 0;
    text-align: center;
    font-size: 1rem;

    @media (max-width: 768px) {
      font-size: 0.85rem;
    }
  }
`;
