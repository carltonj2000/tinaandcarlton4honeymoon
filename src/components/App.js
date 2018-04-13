import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import styled from "styled-components";

import Layout from "./Layout.js";
import Home from "./Home";

import { Routes } from "../utils/routes.js";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Layout active="melbourne">
            <Route path={Routes.melbourne} component={Home} />
            <Route path={Routes.sydney} component={Home} />
            <Route path={Routes.macquarie} component={Home} />
            <Route path={Routes.brisbane} component={Home} />
            <Route path={Routes.cairns} component={Home} />
            <Redirect to={Routes.melbourne} />
          </Layout>
        </Container>
      </Router>
    );
  }
}

export default App;
