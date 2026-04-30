import { PrismicRichText } from "@prismicio/react";
import { asText } from "@prismicio/helpers";
import { FaqSection, Icon, Wrapper } from "./style";
import { useState } from "react";

const LandingFaq = ({ slice }) => {
  const title = slice?.primary?.title;
  const items = slice?.items || [];
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => setOpenIndex((prev) => (prev === index ? null : index));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items
      .filter((item) => item.question?.[0]?.text && item.answer?.[0]?.text)
      .map((item) => ({
        "@type": "Question",
        name: asText(item.question),
        acceptedAnswer: { "@type": "Answer", text: asText(item.answer) },
      })),
  };

  return (
    <Wrapper id="faq">
      {faqSchema.mainEntity.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <FaqSection>
        <div className="title">
          <PrismicRichText field={title} />
        </div>

        <div className="faq-list">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`faq-item ${isOpen ? "open" : ""}`}>
                <div className="faq-question" onClick={() => toggle(idx)}>
                  <Icon className={isOpen ? "open" : ""} />
                  <PrismicRichText field={item.question} />
                </div>
                {/* Answer is always in the DOM for SSR/crawlers; CSS controls visibility */}
                <div
                  className="faq-answer"
                  style={{
                    maxHeight: isOpen ? "2000px" : "0",
                    overflow: "hidden",
                    opacity: isOpen ? 1 : 0,
                    transition: "max-height 0.4s ease-in-out, opacity 0.3s ease",
                  }}
                >
                  <PrismicRichText field={item.answer} />
                </div>
              </div>
            );
          })}
        </div>
      </FaqSection>
    </Wrapper>
  );
};

export default LandingFaq;
