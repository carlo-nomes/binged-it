import { useEffect, useState } from "react";
import { Show } from "../models/Show";

const BASE_URL = "http://api.tvmaze.com";

const mapToShow = (item: any): Show => {
  return {
    id: item.show.id,
    title: item.show.name,
    description: item.show.summary,
    image: item.show.image?.original,
    episodes: 0, // TODO get seperatly
  };
};

const useFetchShows = (query: string) => {
  const [shows, setShows] = useState<Show[]>([]);

  useEffect(() => {
    if (!query) return;

    const url = `${BASE_URL}/search/shows?q=${query}`;

    const doFetch = async () => {
      const response = await fetch(url);
      const json = await response.json();
      const mapped = json.map(mapToShow);
      setShows(mapped);
    };
    doFetch();
  }, [query]);

  return [shows];
};

export default useFetchShows;
