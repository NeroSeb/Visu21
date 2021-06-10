import * as React from "react";
import { Switch, Route, Router } from "wouter";
import Home from "../pages/Home";
import lexique from "../pages/lexique";
import Classes from "../pages/Classes";
import Category from "../pages/Category";
import Taux from "../pages/Taux";
import PrevenuTotal from "../pages/PrevenuTotal";
import PrevenuH from "../pages/PrevenuH";
import PrevenuF from "../pages/PrevenuF";
import PrevenuPM from "../pages/PrevenuPM";
import LesesTotal from "../pages/LesesTotal";
import LesesH from "../pages/LesesH";
import LesesF from "../pages/LesesF";
import LesesPM from "../pages/LesesPM";


export default () => (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/classes" component={Classes} />
      <Route path="/category" component={Category} />
      <Route path="/taux" component={Taux} />
      <Route path="/prevenuTotal" component={PrevenuTotal} />
      <Route path="/prevenuH" component={PrevenuH} />
      <Route path="/prevenuF" component={PrevenuF} />
      <Route path="/prevenuPM" component={PrevenuPM} />
      <Route path="/LesesTotal" component={LesesTotal} />
      <Route path="/LesesH" component={LesesH} />
      <Route path="/LesesF" component={LesesF} />
      <Route path="/LesesPM" component={LesesPM} />
      <Route path="/lexique" component={lexique} />
    </Switch>
);
