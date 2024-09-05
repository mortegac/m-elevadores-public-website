import { SliceFactory } from "../../../../common/Containers";
import { Description, Content, ImgHolder, Anchor, ButtonContainer } from "../default/defaultStyles";
import { RichText } from "prismic-reactjs";

const Base = (props) => {
  const { description, image, title, mobileimage, buttontext, buttonlink
  } = props.primary;

  // window && window.console.log('--props.primary--', props.primary)

  return (
    <Content backgroundColor={"transparent"}>
      <Description>
        {title[0]?.text && RichText.render(title)}
        {description[0]?.text && (
          RichText.render(description)
        )}
        {/* {buttontext &&
          <Button>
            {buttontext ? buttontext : `Cotiza`}
          </Button>
        } */}
        
       { buttontext &&
          <Anchor id={buttonlink?.uid} href={buttonlink?.uid} >
              <ButtonContainer fullwidth={true}>
                {buttontext || "Cotiza"}
              </ButtonContainer>
          </Anchor>
        }
          
      </Description>

      <ImgHolder>
        <picture>
          <source srcSet={image.url} media="(max-width: 500px)" />
          <source srcSet={mobileimage.url} media="(max-width: 960px)" />
          <img src={image.url} alt="HeroImg" />
        </picture>
      </ImgHolder>
    </Content>
  );
};

// export const Default = SliceFactory(Base);
export const Default = SliceFactory(Base, {
  sectionContainerProps: {
    style: {
      backgroundColor: '#243C70',
      background: '#243C70',
    },
    bgImage: true,
    bgImageSrc: "https://images.prismic.io/m-elevadores/ZsP1BUaF0TcGJE_C_fondo-contruccion.png?auto=format,compress",
    base: Base
  }
});

// ${(props) => props.theme.colors.secondary};