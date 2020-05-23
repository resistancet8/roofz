import React, { Suspense, lazy, Component } from "react";
import "./App.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Routes = lazy(() => import("./routes/publicRoutes"));

class App extends Component {
  render() {
    return (
      <div className="App">
        <Suspense fallback={<div>...Loading</div>}>
          <Routes />
        </Suspense>
      </div>
    );
  }
}

export default App;