import "./App.css";

import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Feed from "./components/feed/Feed";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Login from "./components/auth/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Feed} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </BrowserRouter>
      <Footer />/
    </>
  );
}

export default App;
