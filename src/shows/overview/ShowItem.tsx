import styled from "styled-components";

const Wrapper = styled.div`
  margin: 1rem auto 3rem auto;
  display: grid;
  grid-template-areas:
    "image header"
    "image description";
  grid-template-columns: 1fr 5fr;
  grid-template-rows: auto 1fr;
  column-gap: 1rem;
  row-gap: 0.5rem;
`;

const ImageWrapper = styled.div`
  grid-area: image;
  width: 100%;
  height: 0%;
  overflow: hidden;
  padding-top: 150%;
  position: relative;
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  max-height: 100%;
  transform: translateX(-50%);
`;

interface ImageProps {
  url: string;
  alt: string;
}
const Image = ({ url }: ImageProps) => (
  <ImageWrapper>
    <Img src={url} />
  </ImageWrapper>
);

const Header = styled.div`
  grid-area: header;
`;

const Title = styled.h1`
  margin: 0;
`;

const Description = styled.p`
  grid-area: description;
  max-height: 100%;
  overflow: hidden;
  display: block;
  margin: 0;
`;

interface ShowItemProps {
  title: string;
  episodes: number;
  description: string;
  image: string;
}

const ShowItem = ({ title, episodes, description, image }: ShowItemProps) => (
  <Wrapper>
    <Image url={image} alt={title} />

    <Header>
      <Title>{title}</Title>
      <strong>{episodes} episodes</strong>
    </Header>
    <Description>{description}</Description>
  </Wrapper>
);
export default ShowItem;
