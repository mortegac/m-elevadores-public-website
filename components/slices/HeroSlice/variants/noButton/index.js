import { SliceFactory } from "../../../../common/Containers";
import { Description, Content, ImgHolder } from "../default/defaultStyles";
import { asText } from "@prismicio/helpers";

const Base = (slice) => {
  const { description, image, title, mobileimage } = slice.primary;

  // window.console.log('--slice--', slice)

  return (
    <Content>
      <ImgHolder />
      {/* <picture style={{ visibility: "none" }}>
          <source srcSet={image?.url || ""} media="(max-width: 500px)" />
          <source srcSet={mobileimage?.url || ""} media="(max-width: 960px)" />
          <img src={image?.url || ""} alt="HeroImg" />
        </picture> */}
      {/* </ImgHolder> */}
      <Description>
        {title[0]?.text && <h1>{asText(title)}</h1>}
        {description[0]?.text && <p>{asText(description)}</p>}
      </Description>
    </Content>
  );
};

// export const  = SliceFactory(Base);
export const NoButton = SliceFactory(Base, {
  sectionContainerProps: {
    style: {
      // height: 'height: 600px',
      // backgroundColor: 'rgb(176, 232, 222)',
      // backgroundImage: 'linear-gradient(188deg, #33C7D9 0%, #128DA8 100%)',
      // background: 'transparent',
      // background: 'linear-gradient(180deg, rgba(60,234,255,1) 0%, rgba(60,234,255,1) 58%, rgba(7,143,241,1) 100%)',
    },
    bgImage: true,
    bgImageSrc: "",
    base: Base,
  },
});
