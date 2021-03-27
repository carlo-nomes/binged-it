import { useEffect, useState } from "react";
import { Show } from "../models/Show";

const BASE_URL = "http://api.tvmaze.com";

// TODO: make dynamic
const query = "grey's anatomy";

const mapToShow = (item: any): Show => {
  console.log(item);
  return {
    id: item.show.id,
    title: item.show.name,
    description: item.show.summary,
    image: item.show.image?.original,
    episodes: 0, // TODO get seperatly
  };
};

const useFetchShows = () => {
  const [shows, setShows] = useState<Show[]>([]);

  useEffect(() => {
    const url = `${BASE_URL}/search/shows?q=${query}`;

    const doFetch = async () => {
      const response = await fetch(url);
      const json = await response.json();
      const mapped = json.map(mapToShow);
      setShows(mapped);
    };
    doFetch();
  }, []);

  return [shows];
};

export default useFetchShows;
