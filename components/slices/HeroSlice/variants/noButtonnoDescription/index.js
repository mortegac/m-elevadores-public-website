import { SliceFactory } from "../../../../common/Containers";
import { Description, Content, ImgHolder } from "../default/defaultStyles";
import { asText } from "@prismicio/helpers";

const Base = (slice) => {
  const { image, title, mobileimage } = slice.primary;

  return (
    <Content>
      <Description>
        {title[0]?.text && <h1>{asText(title)}</h1>}
      </Description>
      <ImgHolder>
        <picture>
          <source srcSet={image.url} media="(max-width: 500px)" />
          <source srcSet={mobileimage.url} media="(max-width: 960px)" />
          <img
            src={image.url}
            alt={image.alt || "M-Elevadores — Soluciones de accesibilidad"}
          />
        </picture>
      </ImgHolder>
    </Content>
  );
};

export const NoButtonnoDescription = SliceFactory(Base, {
  sectionContainerProps: {
    style: {
      backgroundColor: "#243C70",
    },
    bgImage: true,
    base: Base,
  },
});
