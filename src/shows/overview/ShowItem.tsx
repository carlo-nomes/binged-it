import styled from "styled-components";
import DOMPurify from "dompurify";

const Wrapper = styled.div`
  height: 15rem;
  width: 100%;
  overflow: hidden;

  margin: 1rem auto 3rem auto;
  display: grid;

  grid-template-areas:
    "image header"
    "image description";

  grid-template-columns: 1fr 5fr;
  column-gap: 1rem;

  grid-template-rows: auto 1fr;
  row-gap: 0.5rem;
`;

const ImageWrapper = styled.div`
  grid-area: image;
  min-width: 10rem;
  height: 0%;
  overflow: hidden;
  padding-top: 150%;
  position: relative;
  background-color: rgba(0, 0, 0, 0.2);
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  height: 100%;
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
  overflow: hidden;
  width: 100%;
`;

const Title = styled.h1`
  margin: 0;
  display: block;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Description = styled.div`
  grid-area: description;
  overflow: hidden;

  mask-image: linear-gradient(#000 0%, #000 75%, transparent 100%);
`;

interface ShowItemProps {
  title: string;
  episodes: number;
  description: string;
  image: string;
}

const ShowItem = ({ title, episodes, description, image }: ShowItemProps) => {
  const sanitizedDescription = DOMPurify.sanitize(description);

  return (
    <Wrapper>
      <Image url={image} alt={title} />

      <Header>
        <Title>{title}</Title>
        <strong>{episodes} episodes</strong>
      </Header>

      <Description dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
    </Wrapper>
  );
};
export default ShowItem;
