import React from "react";
import Layout from "../components/layout";
import jam from "../images/intro.jpg";
import jammob from "../images/intro-mobile.jpg";

export default props => (
  <Layout title="Kris &amp; Rachael" location={props.location}>
    <picture>
      <source srcSet={jammob} media="(max-width: 600px)" />
      <source srcSet={jam} />
      <img className="photo" src={jam} alt="The day we met..." />
    </picture>
    <article id="story">
      <section>
        <hr />
        <h2>Lorem Ipsum Dolor Sit Amet...</h2>
        <hr />
        <p>
        Bacon ipsum dolor amet landjaeger shankle pastrami doner picanha, ham short loin chuck sirloin jowl t-bone ball tip pork chop. Ribeye t-bone meatloaf bacon pig tail. Pork loin sausage pork chop, drumstick bresaola chuck spare ribs jowl short ribs pork belly rump. Kielbasa shankle shank chicken, sausage frankfurter ham hock. Picanha pancetta pork chop pastrami tri-tip chuck bresaola beef ribs salami. Pork chop short ribs turducken, chuck hamburger salami ham pig cow shankle shoulder. Swine corned beef t-bone ribeye.
        </p>


        <p>“I love you more,” he said.</p>
      </section>
    </article>
  </Layout>
);
