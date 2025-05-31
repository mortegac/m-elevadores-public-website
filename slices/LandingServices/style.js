import styled from "styled-components";

export const Section = styled.div`
  background-color: white;
  padding: 1rem 10rem;

  h1 {
    color: #3962e9;
    text-align: center;
    margin-top: 0;
    font-size: 2rem;
  }

  @media (max-width: 1100px) {
    padding: 1rem;
  }

  @media (max-width: 768px) {
    h1 {
      line-height: 1;
      margin: 1rem 0;
    }
  }
`;

export const ServicesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  padding: 1rem 0;
`;

export const Service = styled.div`
  position: relative;
  flex: 0 1 calc(33.33% - 1rem);
  height: 300px;
  border-radius: 8px;
  background: ${({ bgimage }) =>
    bgimage ? `url(${bgimage}) center/cover no-repeat` : "#3962E9"};
  overflow: hidden;
  cursor: ${({ nohover }) => (nohover ? "auto" : "pointer")};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    opacity: ${({ nohover }) => (nohover ? 1 : 0)};
    transition: opacity 0.3s ease-in-out;
    z-index: 1;

    @media (max-width: 768px) {
      opacity: 1;
    }
  }

  .service-link {
    position: absolute;
    inset: 0;
    z-index: 2;
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  .service-content {
    pointer-events: none;
    text-align: left;
  }

  .service-content h2,
  .service-content p {
    color: white;
    opacity: ${({ nohover }) => (nohover ? 1 : 0)};
    transform: ${({ nohover }) =>
      nohover ? "translateY(0)" : "translateY(10px)"};
    transition: opacity 0.3s ease, transform 0.3s ease;
    margin: 0;
    padding: 0 10px;
  }

  .service-content h2 {
    font-size: 1.2rem;
    text-align: center;
    line-height: 1.2;

    @media (max-width: 768px) {
      opacity: 1;
      transform: translateY(0);
    }

    @media (max-width: 480px) {
      line-height: 1.1;
    }
  }

  .service-content p {
    font-size: 0.8rem;
    max-height: 120px;
    overflow: auto;

    @media (max-width: 768px) {
      font-size: 0.9rem;
      opacity: 1;
      transform: translateY(0);
    }

    @media (max-width: 480px) {
      font-size: 0.8rem;
    }

    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 4px;
    }
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover .service-content h2,
  &:hover .service-content p {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 1024px) {
    flex: 0 1 calc(50% - 1rem);
  }

  @media (max-width: 600px) {
    flex: 0 1 100%;
  }
`;
