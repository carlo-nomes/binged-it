import { useEffect, useState } from "react";
import { Show } from "../models/Show";

const BASE_URL = "http://api.tvmaze.com";

const mapToShow = (item: any): Show => {
  return {
    id: item.show.id,
    title: item.show.name,
    description: item.show.summary,
    image: item.show.image?.medium,
    episodes: 0, // TODO get seperatly
  };
};

type Result = [data: Show[], loading: boolean];

const useFetchShows = (query: string): Result => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Show[]>([]);

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    const url = `${BASE_URL}/search/shows?q=${query}`;

    const doFetch = async () => {
      const response = await fetch(url);
      const json = await response.json();
      const mapped = json.map(mapToShow);
      setData(mapped);
      setLoading(false);
    };
    doFetch();
  }, [query]);

  return [data, loading];
};

export default useFetchShows;
