import React from "react";
import Layout from "../components/layout";
import Reveal from '../components/Reveal';

export default props => (
  <Layout title="FAQ" location={props.location}>
    <article id="FAQ">
      <section>
        <Reveal>
          <h3>Are we staying casual or getting fancy?</h3>
          <p>
            We’d love our guests to be dressed nicely for pictures, but formal attire is certainly not necessary. Think “Sunday best”–only on a Saturday. 
          </p>
          <p>
          And <strong><u>please</u></strong>, remember that it will be cold at the ceremony! 
          </p>
        </Reveal>

        <Reveal>
          <h3>How will the weather be for us? </h3>
          <p>
            As to be expected in Laguna Beach in December, it will likely be overcast and cold. The forecasted temperature is a high of 67, so likely much cooler in the morning. 
          </p>
        </Reveal>

        <Reveal>
          <h3>What do I need to bring?</h3>
          <p>
            Other than warm clothes, please plan to have an umbrella in your car in case rain makes a visit. We will be tying the knot rain or shine! 
          </p>
        </Reveal>
      </section>
    </article>
  </Layout>
);
