import { Layout } from "antd";
import { Content, Header as AntHeader } from "antd/lib/layout/layout";
import { FC } from "react";
import styled from "styled-components";
import { HeaderLogo } from "./Logo";
import useFetchShows from "./services/useFetchShows";
import ShowOverview from "./shows/overview/ShowOverview";

const Header = styled(AntHeader)`
  height: 8rem;
  display: flex;
  justify-content: center;
`;

const App: FC = () => {
  const [shows] = useFetchShows();
  return (
    <Layout>
      <Header>
        <HeaderLogo />
      </Header>
      <Content>
        <ShowOverview shows={shows} />
      </Content>
    </Layout>
  );
};

export default App;
