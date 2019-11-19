import React, { useEffect } from "react";
import Layout from "../components/layout";
import jam from "../images/intro.jpg";
import jammob from "../images/intro-mobile.jpg";
import Reveal from '../components/Reveal';
import { Link } from "gatsby";
// import { setBodyClasses } from '../functions/index';



export default props => (
  <Layout title="Kris &amp; Rachael" location={props.location}>
    <Reveal>
    <picture>
      <source srcSet={jammob} media="(max-width: 600px)" />
      <source srcSet={jam} />
      <img className="photo" src={jam} alt="The day we met..." />
    </picture>
    </Reveal>
    <Reveal>
      <article id="story">
      <section>
          <hr />
          <h2>Thank you for joining us! <span role="img" aria-label="heart">❤️</span></h2>
          <hr />
          <p>
            From office rivals, to the best of friends, and now husband & wife. We’re so excited for this next chapter! 
          </p>
          <p>
            We can’t imagine a life without one another nor a better group of family and friends to surround ourselves with on the big day! 
          </p>
          <p>“I love you more,” he said.</p>
        </section>

        <section>
          <hr />
          <h2>Details</h2>
          <hr />
          <p>
          The morning will start with a ceremony at the coast in Laguna Beach, at Crescent Bay Point Park. The ceremony will begin at 9:45, so please plan to arrive at or before 9:30 to find parking and meet at the park. For more details on Crescent Bay Point Park, such as the address and where to park view the <Link to="/locations">Locations page</Link>. 
          </p>
          <p>
          Following the ceremony, we will celebrate with a brunch in Downtown Laguna Beach at Harley Laguna Beach. Harley is approximately 5-10 minutes South of Crescent Bay Point Park. Brunch will casually begin at 11:15. Feel free to enter the restaurant and grab a beverage upon arrival. Harley's address is listed on the Locations page. 
          </p>
          <p>“I love you more,” he said.</p>
        </section>
      </article>
    </Reveal>
  </Layout>
);
