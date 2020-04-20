import React from "react";
import { Route, Switch } from "react-router-dom";
import AlbumScreen from "./screens/album";
import DiscoveryScreen from "./screens/discovery";
import FavoritesScreen from "./screens/favorites";
import HomeScreen from "./screens/home";
import SearchScreen from "./screens/search";

const Routes = (props) => (
  <Switch>
    <Route exact path="/" component={HomeScreen} />
    <Route exact path="/discovery" component={DiscoveryScreen} />
    <Route exact path="/search" component={SearchScreen} />
    <Route exact path="/album/:id" component={AlbumScreen} />
    <Route exact path="/favorites" component={FavoritesScreen} />
  </Switch>
);

export default Routes;
