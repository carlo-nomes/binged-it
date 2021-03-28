import styled from "styled-components";
import { Show } from "../../models/Show";
import Item from "./Item";

const Wrapper = styled.div`
  max-width: 100%;
`;

interface Props {
  shows: Show[];
}

const ShowOverview = ({ shows }: Props) => (
  <Wrapper>
    {shows.map((show) => (
      <Item
        key={show.id}
        title={show.title}
        description={show.description}
        image={show.image}
        episodes={show.episodes}
      />
    ))}
  </Wrapper>
);

export default ShowOverview;
