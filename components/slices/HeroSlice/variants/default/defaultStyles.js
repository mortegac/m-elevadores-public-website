import styled from "styled-components";

export const Anchor = styled.a`
  display: flex;
  justify-content: flex-start;
  margin: 0;
  margin-top:24px;
  &.fullwidth {
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  @media (max-width: 500px) {
    width: 100%;
  }
  text-decoration: none;
`;
export const ButtonContainer = styled.button`

  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-family: ${(props) => props.theme.typography.fontFamily};
  white-space: nowrap;
  border-radius: ${(props) => props.theme.button.borderRadius};
  font-size: 16px;
  line-height: 24px;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
  height: ${(props) => props.theme.button.height};
  
  background:${(props) => props.theme.colors.white};
  
  color:${(props) => props.theme.colors.bgColorTertiary};
  
  :hover {
    background: #e4e1e1;
    color:${(props) => props.theme.colors.grey};
  }
  padding:${(props) => props.theme.button.padding};
  
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top:30px;
  margin-bottom:102px;
  
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
    text-align: center;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
  }
`;

export const Description = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 50%;
  padding-bottom: 50px;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
    margin-left: 0;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    text-align: center;
  }
  h1 {
    margin: 0;
    margin-bottom: 8px;
    line-height:  ${(props) => props.theme.typography.h1.desktop.lineHeight};
    font-size: ${(props) => props.theme.typography.h1.desktop.fontSize};
    color: ${(props) => props.theme.colors.white};
    z-index: 10px;
    em {
      color:${(props) => props.theme.colors.white};
      font-style: normal;
      z-index: 10px;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.xl}) {
      line-height:  ${(props) => props.theme.typography.h1.mobile.lineHeight};
      font-size: ${(props) => props.theme.typography.h1.mobile.fontSize};
      margin-bottom: 16px;
      em {
        color: ${(props) => props.theme.colors.white};
        font-style: normal;
        z-index: 10px;
      }
    }
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      width: 100%;
      line-height:  ${(props) => props.theme.typography.h1.mobile.lineHeight};
      font-size: ${(props) => props.theme.typography.h1.mobile.fontSize};
      em {
        color: ${(props) => props.theme.colors.white};
        font-size: 34px;
        z-index: 10px;
      }
    }
  }
  h2 {
    margin: 0;
    margin-bottom: 8px;
    line-height:  ${(props) => props.theme.typography.h1.desktop.lineHeight};
    font-size: ${(props) => props.theme.typography.h2.desktop.fontSize};
    color: #e5e4e4;
    z-index: 10px;
    em {
      color:${(props) => props.theme.colors.white};
      font-style: normal;
      z-index: 10px;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.xl}) {
      line-height:  ${(props) => props.theme.typography.h1.mobile.lineHeight};
      font-size: ${(props) => props.theme.typography.h1.mobile.fontSize};
      margin-bottom: 16px;
      em {
        color: ${(props) => props.theme.colors.white};
        font-style: normal;
        z-index: 10px;
      }
    }
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      width: 100%;
      line-height:  ${(props) => props.theme.typography.h1.mobile.lineHeight};
      font-size: ${(props) => props.theme.typography.h1.mobile.fontSize};
      em {
        color: ${(props) => props.theme.colors.white};
        font-size: 34px;
        z-index: 10px;
      }
    }
  }
  p {
    margin: 0;
    letter-spacing: 0.25px;
    // line-height:  ${(props) => props.theme.typography.p.desktop.lineHeight};
    line-height:  1.5;
    font-size: 24px;
    z-index: 10px;
    font-weight: ${(props) => props.theme.typography.p.desktop.fontWeight};
    color: ${(props) => props.theme.colors.white};
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      margin-bottom: 32px;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      width: 100%;
      line-height:  ${(props) => props.theme.typography.p.mobile.lineHeight};
      font-size: ${(props) => props.theme.typography.p.mobile.fontSize};
      text-align: center;
    }
  }
`;
// jaja
export const ImgHolder = styled.div`
  z-index: 2;
  backgroundImage: ${(props) => props.bgImage || ""}
  width: 50%;
  display: flex;
  justify-content: flex-start;
  picture{
    text-align: right;
    }
    img {
      width: 80%;
      // border-radius: 50%;
    }
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 80%;
    // border-radius: 24px;
    img {
      width: 100%;
    }
  }
`;

export const Button = styled.button`
    border-radius: 22px;
    height: 48px;
    padding: 10px 30px;
    border: transparent;
    font-size: 16px;
    margin-top: 18px;
    line-height: 24px;
    width:280px;
    height:48px;
    cursor: pointer; 
    color: ${(props) => props.theme.colors.secondary};
    background: ${(props) => props.theme.colors.white};
`;
