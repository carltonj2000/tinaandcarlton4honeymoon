import React from "react";
import styled from "styled-components";

import Meta from "./Meta";
import Header from "./Header";
import Footer from "./Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 5px;
`;

export default ({ children }) => (
  <Container>
    <Meta />
    <Header />
    {children}
    <Footer />
  </Container>
);
