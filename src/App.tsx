import { Layout, Space } from "antd";
import AntSearch from "antd/lib/input/Search";
import {
  Content as AntContent,
  Header as AntHeader,
} from "antd/lib/layout/layout";
import React, { FC, useState } from "react";
import styled from "styled-components";
import { HeaderLogo } from "./Logo";
import useFetchShows from "./services/useFetchShows";
import ShowOverview from "./shows/overview/ShowOverview";

const Search = styled(AntSearch)`
  margin: 1rem;
`;

const Header = styled(AntHeader)`
  height: 8rem;
  display: flex;
  justify-content: center;
`;

const Content = styled(AntContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10rem;
`;

const App: FC = () => {
  const [query, setQuery] = useState("");
  const [shows] = useFetchShows(query);
  return (
    <Layout>
      <Header>
        <HeaderLogo />
      </Header>
      <Content>
        <Search onSearch={setQuery} />
        <ShowOverview shows={shows} />
      </Content>
    </Layout>
  );
};

export default App;
