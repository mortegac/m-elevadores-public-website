import { SliceFactory } from "../../../../common/Containers";
import { MainContainer, Header } from "./DefaultStyles";
import { PrismicRichText } from "@prismicio/react";
import { ItemsContainer } from "../../../../common/ItemsContainer/ItemsContainer";
import { Carousel } from "../../../../common/Carousel";

const Base = (slice) => {
  const { title, description } = slice.primary;
  const cards = slice.items;
  return (
    <MainContainer>
      <Header>
        <PrismicRichText field={title} />
        <PrismicRichText field={description} />
      </Header>
      {/* {cards.length <= 3 ? ( */}
      <ItemsContainer items={cards} />
      {/* ) : (
        <Carousel items={cards} />
      )} */}
    </MainContainer>
  );
};

const Default = SliceFactory(Base, {
  sectionContainerProps: {
    style: { background: "white" },
  },
});
export { Default };
