import { PrismicRichText } from "@prismicio/react";
import { Grid, Section, Card } from "./style";

/**
 * @typedef {import("@prismicio/client").Content.LandingResponsibilitySlice} LandingResponsibilitySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LandingResponsibilitySlice>} LandingResponsibilityProps
 * @param { LandingResponsibilityProps }
 */
const LandingResponsibility = ({ slice }) => {
  return (
    <Section>
      <Grid>
        {slice?.items?.map((item, i) => (
          <Card key={i}>
            <div className="title">
              <PrismicRichText field={item.title} />
            </div>
            <div className="description">
              <PrismicRichText field={item.description} />
            </div>
            <div className="standout">
              <PrismicRichText field={item.standout} />
            </div>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default LandingResponsibility;
