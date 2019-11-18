import React from "react";
import LagunaBeachMap from "../components/lagunaBeachMap";
import Layout from "../components/layout";
import Reveal from '../components/Reveal';

import dining from "../images/restaurant.svg";
import ship from "../images/cruise.svg";

export default class locations extends React.Component {
  render() {
    return (
      <Layout title="Locations" location={this.props.location}>
        <article id="map">
          <Reveal>
            <figure>
              <LagunaBeachMap />
            </figure>
          </Reveal>
          <section>
            <p>
              Both locations for our special day are close to one another in Laguna Beach... lorem ipsum dolor sit amet.
            </p>
            <h2>The Locations</h2>
            <div className="two-grid">
              <Reveal>
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
                    <li>
                      <h4>Crescent Bay Dr<br /> Laguna Beach, CA 92651</h4>
                    </li>
                  </ul>
                </div>
              </div>
              </Reveal>
              <Reveal>
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
                    <li>
                      <h4>370 Glenneyre St<br /> Laguna Beach, CA 92651</h4>
                    </li>
                  </ul>
                </div>
              </div>
              </Reveal>
            </div>
          </section>
        </article>
      </Layout>
    );
  }
}
