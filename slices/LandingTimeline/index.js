import { PrismicRichText } from "@prismicio/react";
import { Section } from "./style";

/**
 * @typedef {import("@prismicio/client").Content.LandingTimelineSlice} LandingTimelineSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LandingTimelineSlice>} LandingTimelineProps
 * @param { LandingTimelineProps }
 */
const LandingTimeline = ({ slice }) => {
  const title = slice.primary.title;
  const items = slice.items || [];

  return (
    <Section>
      <div className="title">
        <PrismicRichText field={title} />
      </div>

      <div className="step-wrapper">
        {items.map((i, idx) => (
          <div className="step">
            <div className="step-number">{idx}</div>
            <PrismicRichText field={i.step} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default LandingTimeline;
