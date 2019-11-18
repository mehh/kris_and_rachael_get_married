import React from "react";
import Layout from "../components/layout";
import Reveal from '../components/Reveal';

export default props => (
  <Layout title="FAQ" location={props.location}>
    <article id="FAQ">
      <section>
        <Reveal>
          <h3>How do I get to Laguna Beach?</h3>
          <p>
            Lorem Ipsum Dolor Sit Amet
          </p>
        </Reveal>

        <Reveal>
          <h3>How do I get to the wedding?</h3>
          <p>
            There is parking at the venue if you'd like to drive, otherwise an
            Uber or taxi will do the trick.
          </p>
        </Reveal>

        <Reveal>
          <h3>What's the vibe?</h3>
          <p>
            We are very glad you asked: Meow Schmeow
          </p>
        </Reveal>

        <Reveal>
          <h3>Is anything going on the rest of the weekend?</h3>
          <p>
            Lorem ipsum dolor sit amet meow schmeow
          </p>
        </Reveal>

        <Reveal>
          <h3>What's the weather going to be like?</h3>
          <p>
            Lagnua Beach, much like Southern California, could do almost anything in December.
            It could be a gentle rain over a cool, moody beach. It could be summer
            sun and blue skies. Layers are encouraged, we promise it's beautiful
            either way and we chose the venue because it's beautiful no matter the
            weather.
          </p>
        </Reveal>
      </section>
    </article>
  </Layout>
);
