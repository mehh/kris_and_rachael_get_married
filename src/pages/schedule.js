import React from "react";
import Layout from "../components/layout";
import Reveal from '../components/Reveal';

import rings from "../images/wedding-rings_mf.svg";
import donut from "../images/donut.svg";
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
            Please plan to arrive at or before 9:30 to find parking and meet at the park.
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
            Join us at Harley in downtown Laguna Beach to celebrate over brunch!
          </p>
        </div>
        <hr />      
      </Reveal>
      {/* <Reveal>
        <div>
          <img alt="Donuts" src={donut} />
          <h2>Coffee &amp; Donuts</h2>
          <h4>Sunday May 26, 2019</h4>
          <h4>11:00am-12:30pm</h4>
          <h3>Brooks Park</h3>
          <h4>1 Oak Street, Harwich, MA 02645</h4>
          <h5>Day-after Casual</h5>
          <p>
            Join us at the picnic tables with blue check tablecloths for our first
            dozen donuts as a married couple. New England takes donuts incredibly
            seriously; ours come from Hole in One. Kids welcome.
          </p>
        </div>
      </Reveal> */}
    </div>
  </Layout>
);
