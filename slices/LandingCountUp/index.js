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
        {inView && <CountUp end={max} duration={duration} prefix="+" />}
      </Counter>
      <Text>
        <PrismicRichText field={text} />
      </Text>
    </Section>
  );
};

export default LandingCountUp;
