import React from "react";
import Layout from "../components/layout";
import jam from "../images/intro.jpg";
import jammob from "../images/intro-mobile.jpg";
import Reveal from '../components/Reveal';
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
        </section>

        <section>
          <hr />
          <h2>Details</h2>
          <hr />
          <p>
            The festivities will begin with a ceremony at the coast in Laguna Beach, at Crescent Bay Point Park. The ceremony will begin at 10:00, so please plan to arrive at or before 9:45 to find parking and meet at the park. And remember, it will be cold! 
          </p>
          <p>
            Following the ceremony, we will celebrate with a brunch in Downtown Laguna Beach at Harley Laguna Beach. Harley is approximately 5-10 minutes South of Crescent Bay Point Park. Brunch will casually begin at 11:15. Feel free to enter the restaurant upon arrival, as they’ll be open just for us! 
          </p>
          <p>
            For more details on Crescent Bay Point Park and Harley Laguna Beach, such as addresses and where to park view the <a href="/locations">Locations page</a>. 
          </p>
        </section>

        <section>
          <hr />
          <h2>Announcement Video</h2>
          <hr />
          <iframe id="ytplayer" type="text/html" width="720" height="405"
            src="https://www.youtube.com/embed/5FL9NWmKtO8"
            frameborder="0" allowfullscreen></iframe>
        </section>
      </article>
    </Reveal>
  </Layout>
);
