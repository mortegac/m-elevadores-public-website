import { PrismicRichText } from "@prismicio/react";
import { FaqSection, Wrapper } from "./style";

/**
 * @typedef {import("@prismicio/client").Content.LandingFaqSlice} LandingFaqSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LandingFaqSlice>} LandingFaqProps
 * @param { LandingFaqProps }
 */
const LandingFaq = ({ slice }) => {
  const title = slice.primary.title;
  const items = slice.items || [];

  return (
    <Wrapper>
      <FaqSection>
        <div className="title">
          <PrismicRichText field={title} />
        </div>

        <div className="faq-list">
          {items.map((item, idx) => (
            <details key={idx}>
              <summary>
                <PrismicRichText field={item.question} />
              </summary>
              <PrismicRichText field={item.answer} />
            </details>
          ))}
        </div>
      </FaqSection>
    </Wrapper>
  );
};

export default LandingFaq;
