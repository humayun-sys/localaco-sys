import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./scss/App.scss";

import Header from "./components/Header";

import Home from "./pages/Home";
import Careers from "./pages/Careers";
import Advertise from "./pages/Advertise";
import Contact from "./pages/Contact";
import TermsOfServices from "./pages/TermsOfServices";
import Teams from "./components/Teams";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Gallery from './components/Gallery';
import Features from "./components/Features";
import Screenshots from "./components/Screenshots";
import Pricing from "./components/Pricing";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route
            exact={true}
            path="/Terms-of-Services"
            component={TermsOfServices}
          />
          <Route
            exact={true}
            path="/Privacy-Policy"
            component={PrivacyPolicy}
          />
          <Route exact={true} path="/Contact" component={Contact} />
          <Route exact={true} path="/Pages/Advertise" component={Advertise} />
          <Route exact={true} path="/Careers" component={Careers} />
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/Gallery" component={Gallery} />
          <Route exact={true} path="/Teams" component={Teams} />
          <Route exact={true} path="/Features" component={Features} />
          <Route exact={true} path="/Screenshots" component={Screenshots} />
          <Route exact={true} path="/Pages/PrivacyPolicy" component={PrivacyPolicy} />
          <Route exact={true} path="/Pages/TermsOfServices" component={TermsOfServices} />
          <Route exact={true} path="/Pages/Advertise" component={Advertise} />
          <Route exact={true} path="/Pages/Pricing" component={Pricing} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
