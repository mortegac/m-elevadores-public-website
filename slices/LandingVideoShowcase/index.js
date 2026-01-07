import { PrismicRichText } from "@prismicio/react";
import {
  Section,
  Title,
  Description,
  VideoGrid,
  VideoItem,
  Video,
} from "./style";

const LandingVideoShowcase = ({ slice }) => {
  const { title, description } = slice.primary;
  const videos = slice.items || [];
  const isBackgroundVariation = slice.variation === "backgroundColor";

  return (
    <Section $isBackgroundVariation={isBackgroundVariation}>
      <Title $isBackgroundVariation={isBackgroundVariation}>
        <PrismicRichText field={title} />
      </Title>

      <Description $isBackgroundVariation={isBackgroundVariation}>
        <PrismicRichText field={description} />
      </Description>

      <VideoGrid>
        {videos.map((item, index) => {
          const videoUrl = item.video?.url;
          if (!videoUrl) return null;

          return (
            <VideoItem key={index}>
              <Video src={videoUrl} controls playsInline preload="metadata" />
            </VideoItem>
          );
        })}
      </VideoGrid>
    </Section>
  );
};

export default LandingVideoShowcase;
