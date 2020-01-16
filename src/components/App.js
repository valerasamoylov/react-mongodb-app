import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage.js";
import NavBar from "./views/NavBar/NavBar";
import MovieDetail from "./views/MovieDetail/MovieDetail";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/movie/:movieId" component={MovieDetail} />
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
