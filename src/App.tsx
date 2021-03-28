import { FC, useState } from "react";
import styled from "styled-components";
import { Spin } from "antd";
import AntSearch from "antd/lib/input/Search";
import AntLayout, {
  Content as AntContent,
  Header as AntHeader,
} from "antd/lib/layout/layout";
import { HeaderLogo } from "./components/Logo";
import useFetchShows from "./services/useFetchShows";
import ShowOverview from "./shows/Overview";

const Search = styled(AntSearch)`
  margin: 1rem;
`;

const Layout = styled(AntLayout)`
  min-height: 100vh;
`;

const Header = styled(AntHeader)`
  height: 8rem;
  display: flex;
  justify-content: center;
`;

const Content = styled(AntContent)`
  width: 100%;
  min-height: 100%;
  max-width: 60rem;

  margin: 0 auto;
  padding: 0 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App: FC = () => {
  const [query, setQuery] = useState("");
  const [shows, loading] = useFetchShows(query);

  return (
    <Layout>
      <Header>
        <a href="/">
          <HeaderLogo />
        </a>
      </Header>
      <Content>
        <Search
          placeholder="Search for your favorite shows"
          onSearch={setQuery}
        />
        <Spin spinning={loading}>
          <ShowOverview shows={shows} />
        </Spin>
      </Content>
    </Layout>
  );
};

export default App;
