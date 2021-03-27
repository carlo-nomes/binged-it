import styled from "styled-components";
import { Show } from "../../models/Show";
import ShowItem from "./ShowItem";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 50rem;
`;

interface ShowOverviewProps {
  shows: Show[];
}

const ShowOverview = ({ shows }: ShowOverviewProps) => (
  <Wrapper>
    {shows.map((show) => (
      <ShowItem
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
