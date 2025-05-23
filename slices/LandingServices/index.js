import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { Section, ServicesWrapper, Service } from "./style";

/**
 * @typedef {import("@prismicio/client").Content.LandingServicesSlice} LandingServicesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LandingServicesSlice>} LandingServicesProps
 * @param { LandingServicesProps }
 */

const LandingServices = ({ slice }) => {
  const title = slice.primary.title;
  const items = slice.items || [];

  return (
    <Section>
      <PrismicRichText field={title} />

      <ServicesWrapper>
        {items.map((i, index) => (
          <Service
            key={index}
            bgimage={i.bgimage.url}
            nohover={slice.variation === "nohover"}
          >
            <PrismicLink field={i.link} className="service-link">
              <div className="service-content">
                <PrismicRichText field={i.servicetitle} />
                <PrismicRichText field={i.description} />
              </div>
            </PrismicLink>
          </Service>
        ))}
      </ServicesWrapper>
    </Section>
  );
};

export default LandingServices;
