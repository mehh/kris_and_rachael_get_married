import React from "react";
import { Helmet } from "react-helmet";
import "./layout.css";
import Nav from "../components/nav";
import Header from "../components/header";
import OverlayTransition from "../components/OverlayTransition";

export default ({ children, location, title }) => (
  <div>
    <Helmet>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.3.3/dist/leaflet.css"
        integrity="sha512-Rksm5RenBEKSKFjgI3a41vrjkw4EVPlJ3+OiI65vTjIdo9brlAacEuKOiQ5OFh7cOI1bkDwLqdLw3Zg0cRJAAQ=="
        crossorigin=""
      />
      <title>Kris &amp; Rachael Get Married</title>
    </Helmet>
    <div id="container">
      <Header siteTitle={title} />
      <Nav path={location.pathname} />
      {children}
    </div>
    <footer>
      <p>
        <i className="fas fa-heart" />
        Source on
        <a href="https://github.com/mehh/kris_and_rachael_get_married">
          <i className="fab fa-github" />
        </a>
      </p>
    </footer>
    <OverlayTransition />
  </div>
);
