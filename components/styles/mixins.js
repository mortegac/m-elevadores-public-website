import { css } from "styled-components";

export const sectionPadding = (mobilePadding = "2rem") => css`
  padding: ${mobilePadding} 1.25rem;

  @media (min-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) =>
      theme.sectionContainer?.padding?.desktop || "2.5rem 5%"};
  }
`;

export const container = css`
  width: 100%;
  margin: 0 auto;
  padding: ${({ theme }) =>
    theme.sliceContainer?.padding?.mobile || "0 1.25rem"};
  max-width: ${({ theme }) => theme.sliceContainer?.maxWidth || "1136px"};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) =>
      theme.sliceContainer?.padding?.desktop || "0 24px"};
  }
`;

export const tapTarget = css`
  min-height: 48px;
  min-width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const touchInput = css`
  min-height: 48px;
  width: 100%;
  padding: 12px;
  font-size: 16px; /* Prevents auto-zoom on iOS safari */
  border-radius: 8px;
  border: 1px solid #ccc;
`;

export const mobilePadding = css`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
`;
