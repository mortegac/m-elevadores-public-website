import styled from "styled-components";

export const Nav = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 1.5rem;

  li a {
    position: relative;
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    padding-bottom: 4px;
    transition: all 0.3s ease;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0%;
      height: 2px;
      background: #3962e9;
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }

  @media (max-width: 1160px) {
    display: none;
  }
`;

export const MobileMenuIcon = styled.div`
  display: none;

  @media (max-width: 1160px) {
    display: block;
    cursor: pointer;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  height: 100vh;
  width: 100%;
  background-color: #243c70;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  transition: right 0.3s ease-in-out;
  padding: 1rem;
  z-index: 1000;
  }
`;

export const CloseIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

export const MobileNavLinks = styled.ul`
  list-style: none;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  
    li a {
    position: relative;
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    padding-bottom: 4px;
    transition: all 0.3s ease;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0%;
      height: 2px;
      background: #3962e9;
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
`;

export const Logo = styled.div`
  img {
    height: 40px;
    width: auto;
  }
`;

export const ContactButtons = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 1160px) {
    display: none;
  }

  .contact-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 10px;
    background: #3962e9;
    color: #fff;
    border-radius: 5px;
    text-decoration: none;

    p {
      font-weight: bold;
    }

    img {
      width: 20px;
      height: 20px;
    }

    &:hover {
      background: #0059c1;
    }
  }
`;
