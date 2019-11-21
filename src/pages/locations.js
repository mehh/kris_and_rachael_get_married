import React from "react";
import LagunaBeachMap from "../components/lagunaBeachMap";
import Layout from "../components/layout";
import Reveal from '../components/Reveal';

import dining from "../images/restaurant.svg";
import island from "../images/island.svg";

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
              Both located in beautiful Laguna Beach, Crescent Bay Point Park and Harley are only a 5-10 minute drive apart! Click the destination names below to open in Google Maps. 
            </p>
            <h2>The Locations</h2>
            <div className="two-grid">
              <Reveal>
              <div>
                <div className="reservations">
                  <img alt="" src={island} />
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
                    <li>
                      <hr />
                      <p>
                        To find the park, turn onto Crescent Bay Dr. on the <strong><i>ocean side</i></strong> of Pacific Coast Hwy. 
                      </p>
                      <p>
                        Crescent Bay Dr. is a large loop, and the park is located at the point where it begins to loop back–overlooking the ocean. 
                      </p>
                      <p>
                        You can park anywhere on the street near the park. 
                      </p>
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
                    <li>
                      <hr />
                      <p>
                        Harley is located at the corner of Glenneyre St & Mermaid St. 
                      </p>
                      <p>
                        After the ceremony, turn right onto Pacific Coast Highway to head south towards Laguna’s downtown area. Turn left onto Park Ave, then another left onto Eiler Larsen Ln., then right onto Glenneyre St.
                      </p>
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
