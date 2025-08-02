import { PrismicRichText } from "@prismicio/react";
import { ContentWrapper, Description, Footer, Section, Title } from "./style";

/**
 * @typedef {import("@prismicio/client").Content.LandingEmpathySlice} LandingEmpathySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LandingEmpathySlice>} LandingEmpathyProps
 * @param { LandingEmpathyProps }
 */
const LandingEmpathy = ({ slice }) => {
  const { title, description, footer, bgimg } = slice.primary;

  return (
    <Section bgimg={bgimg?.url}>
      <ContentWrapper>
        <PrismicRichText
          field={title}
          components={{
            heading1: ({ children }) => <Title>{children}</Title>,
          }}
        />
        <Description>
          <PrismicRichText
            field={description}
            components={{
              paragraph: ({ children }) => <p>{children}</p>,
            }}
          />
        </Description>
        <Footer>
          <PrismicRichText
            field={footer}
            components={{
              paragraph: ({ children }) => <p>{children}</p>,
            }}
          />
        </Footer>
      </ContentWrapper>
    </Section>
  );
};

export default LandingEmpathy;
