import { PrismicRichText } from "@prismicio/react";
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
        {items.map((i) => (
          <Service bgimage={i.bgimage.url}>
            <PrismicRichText field={i.servicetitle} />
            <PrismicRichText field={i.description} />
          </Service>
        ))}
      </ServicesWrapper>
    </Section>
  );
};

export default LandingServices;
