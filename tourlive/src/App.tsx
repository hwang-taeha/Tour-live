import * as React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ListPage from "./pages/listPage";
import DetailPage from "./pages/detailPage";

const baseWrap = styled.div``;

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={ListPage}></Route>
          <Route path="/detail/:id" component={DetailPage}></Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
