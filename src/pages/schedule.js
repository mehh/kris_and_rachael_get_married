import React from "react";
import Layout from "../components/layout";
import Reveal from '../components/Reveal';

import rings from "../images/wedding-rings_mf.svg";
import dining from "../images/restaurant.svg";

export default props => (
  <Layout title="Schedule" location={props.location}>
          <h1>The Big Day</h1>
          <h2>Saturday Dec 21, 2019</h2>
    <div className="two-grid schedule">
      <Reveal>
        <div>


          <img alt="Wedding Rings" src={rings} />
          <h2>Ceremony</h2>
          <h4>10:00am</h4>
          <h3>Crescent Bay Point Park</h3>
          <h4>Crescent Bay Dr, Laguna Beach, CA 92651</h4>
          <p>
            Please plan to arrive at or before 9:45 to find parking and meet at the park. You can park anywhere on the street near the park. 
          </p>
        </div>
        <hr />
      </Reveal>
      <Reveal>
        <div>
          <img alt="Dining" src={dining} />
          <h2>Brunch!</h2>
          <h4>11:15am</h4>
          <h3>Harley</h3>
          <h4>370 Glenneyre St, Laguna Beach, CA 92651</h4>
          <p>
            Join us at Harley Laguna Beach to celebrate over brunch! It’s just a 5-10 minute drive South. 
          </p>
        </div>
        <hr />      
      </Reveal>
    </div>
  </Layout>
);
