import styled from "styled-components";
import { Show } from "../../models/Show";
import ShowItem from "./ShowItem";

const Wrapper = styled.div`
  max-width: 100%;
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
