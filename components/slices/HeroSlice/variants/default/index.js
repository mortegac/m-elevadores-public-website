import { SliceFactory } from "../../../../common/Containers";
import {
  Description,
  Content,
  ImgHolder,
  Anchor,
  ButtonContainer,
} from "../default/defaultStyles";
import { asText } from "@prismicio/helpers";

const Base = (props) => {
  const { description, image, title, mobileimage, buttontext, buttonlink } =
    props.primary;

  return (
    <Content backgroundColor={"transparent"}>
      <Description>
        {title[0]?.text && <h1>{asText(title)}</h1>}
        {description[0]?.text && <p>{asText(description)}</p>}
        {/* {buttontext &&
          <Button>
            {buttontext ? buttontext : `Cotiza`}
          </Button>
        } */}

        {buttontext && (
          <Anchor id={buttonlink?.uid} href={buttonlink?.uid}>
            <ButtonContainer fullwidth={true}>
              {buttontext || "Cotiza"}
            </ButtonContainer>
          </Anchor>
        )}
      </Description>

      <ImgHolder>
        <picture>
          <source srcSet={image.url} media="(max-width: 450px)" />
          <source srcSet={mobileimage.url} media="(max-width: 960px)" />
          <img src={image.url} alt={image.alt || "M-Elevadores — Instalación de ascensores y salvaescaleras en Chile"} />
        </picture>
      </ImgHolder>
    </Content>
  );
};

// export const Default = SliceFactory(Base);
export const Default = SliceFactory(Base, {
  sectionContainerProps: {
    style: {
      backgroundColor: "#243C70",
      background: "#243C70",
    },
    bgImage: true,
    bgImageSrc:
      "https://images.prismic.io/m-elevadores/ZsP1BUaF0TcGJE_C_fondo-contruccion.png?auto=format,compress",
    base: Base,
  },
});

// ${(props) => props.theme.colors.secondary};
