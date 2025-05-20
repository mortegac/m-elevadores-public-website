import { PrismicRichText } from "@prismicio/react";
import {
  Icon,
  IconWrapper,
  Item,
  ItemGrid,
  Label,
  Section,
  Title,
} from "./style";

/**
@typedef {import("@prismicio/client").Content.LandingStandoutSlice} LandingStandoutSlice
@typedef {import("@prismicio/react").SliceComponentProps<LandingStandoutSlice>} LandingStandoutProps
@param { LandingStandoutProps }
*/

const LandingStandout = ({ slice }) => {
  const title = slice.primary.title;
  const items = slice.items;

  return (
    <Section>
      <Title>
        <PrismicRichText field={title} />
      </Title>

      <ItemGrid>
        {items.map((i, idx) => (
          <Item key={idx}>
            <IconWrapper>
              <Icon src={i.icon.url} alt={i.icon.alt || "Icon"} />
            </IconWrapper>
            <Label>
              <PrismicRichText field={i.label} />
            </Label>
          </Item>
        ))}
      </ItemGrid>
    </Section>
  );
};

export default LandingStandout;
