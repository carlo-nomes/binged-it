import styled from "styled-components";
import DOMPurify from "dompurify";
import ShowPoster from "./Poster";
import ShowDescription from "./Description";
import Title from "./Title";

const Wrapper = styled.div`
  height: 15rem;
  width: 100%;
  overflow: hidden;
  margin: 1rem auto 3rem auto;

  display: grid;
  grid-template-areas:
    "poster header"
    "poster description";

  grid-template-columns: 1fr 5fr;
  column-gap: 1rem;

  grid-template-rows: auto 1fr;
  row-gap: 0.5rem;
`;

const Poster = styled(ShowPoster)`
  grid-area: poster;
`;

const Header = styled.div`
  grid-area: header;
  overflow: hidden;
  width: 100%;
`;

const Description = styled(ShowDescription)`
  grid-area: description;
`;

interface Props {
  title: string;
  episodes: number;
  description: string;
  image: string;
}

const Item = ({ title, episodes, description, image }: Props) => {
  const sanitizedDescription = DOMPurify.sanitize(description);

  return (
    <Wrapper>
      <Poster src={image} alt={title} />

      <Header>
        <Title>{title}</Title>
        <strong>{episodes} episodes</strong>
      </Header>

      <Description dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
    </Wrapper>
  );
};
export default Item;
