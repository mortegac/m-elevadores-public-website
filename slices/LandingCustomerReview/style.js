import styled from "styled-components";
import Slider from "react-slick";

export const Section = styled.section`
  padding: 2rem;
  background: white;
  padding: 1rem 10rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Title = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    font-weight: 900;
    font-size: 2rem;
    color: #3962e9;
  }
`;

export const StyledSlider = styled(Slider)`
  padding: 0 1rem;

  .slick-slide > div {
    padding: 0 15px;
  }

  .slick-dots {
    bottom: -30px;
  }

  .slick-dots li button:before {
    font-size: 10px;
    color: #888;
  }

  .slick-dots li.slick-active button:before {
    color: #000;
  }
`;

export const Review = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  min-height: 350px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  }
`;

export const ReviewHead = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid #ddd;
  flex-shrink: 0;
`;

export const UserIcon = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const LetterFallback = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #007bff;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const Username = styled.div`
  font-weight: 600;
`;

export const ReviewText = styled.div`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
`;
