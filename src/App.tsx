import { FC, useState } from "react";
import styled from "styled-components";
import { Spin } from "antd";
import AntSearch from "antd/lib/input/Search";
import AntLayout, {
  Content as AntContent,
  Footer,
  Header as AntHeader,
} from "antd/lib/layout/layout";
import { HeaderLogo } from "./Logo";
import useFetchShows from "./services/useFetchShows";
import ShowOverview from "./shows/overview/ShowOverview";

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
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10rem;
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
