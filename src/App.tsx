import { Layout } from "antd";
import { Content, Header as AntHeader } from "antd/lib/layout/layout";
import { FC } from "react";
import styled from "styled-components";
import { HeaderLogo } from "./Logo";

const Header = styled(AntHeader)`
  height: 8rem;
  display: flex;
  justify-content: center;
`;

const App: FC = () => {
  return (
    <Layout>
      <Header>
        <HeaderLogo />
      </Header>
    </Layout>
  );
};

export default App;
