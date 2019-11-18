import React from "react";
import LagunaBeachMap from "../components/lagunaBeachMap";
import Layout from "../components/layout";

import dining from "../images/restaurant.svg";
import ship from "../images/cruise.svg";

export default class locations extends React.Component {
  render() {
    return (
      <Layout title="Locations" location={this.props.location}>
        <article id="map">
          <figure>
            <LagunaBeachMap />
          </figure>
          <section>
            <p>
              Both locations for our special day are close to one another in Laguna Beach... lorem ipsum dolor sit amet.
            </p>
            <h2>The Locations</h2>
            <div className="two-grid">
              <div>
                <div className="reservations">
                  <img alt="" src={ship} />
                  <h3>The Wedding</h3>
                  <ul>
                    <li>
                      <a href="https://goo.gl/maps/FCSuKnJ5gfs8W5Y69" target="_blank" rel="noopener noreferrer">
                        Crescent Bay Point Park
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="reservations">
                  <img alt="" src={dining} />
                  <h3>The Reception</h3>
                  <ul>
                    <li>
                      <a href="https://g.page/harleylagunabeach?share" target="_blank" rel="noopener noreferrer">
                        Harley Laguna Beach
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </article>
      </Layout>
    );
  }
}
