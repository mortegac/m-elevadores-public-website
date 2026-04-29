import { PrismicRichText } from "@prismicio/react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Section, Counter, Text } from "./style";

/**
 * @typedef {import("@prismicio/client").Content.LandingCountUpSlice} LandingCountUpSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LandingCountUpSlice>} LandingCountUpProps
 * @param { LandingCountUpProps }
 */
const LandingCountUp = ({ slice }) => {
  const { max, duration, text } = slice.primary;

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <Section ref={ref}>
      <Counter>
        {/* Static value always in DOM for SSR/crawlers */}
        <span aria-hidden="true" style={{ visibility: "hidden", whiteSpace: "nowrap" }}>
          +{max}
        </span>
        <span style={{ position: "absolute", left: 0, top: 0 }} aria-label={`+${max}`}>
          {inView ? (
            <CountUp end={max} duration={duration} prefix="+" />
          ) : (
            <noscript>+{max}</noscript>
          )}
        </span>
      </Counter>

      <Text>
        <PrismicRichText field={text} />
      </Text>
    </Section>
  );
};

export default LandingCountUp;
