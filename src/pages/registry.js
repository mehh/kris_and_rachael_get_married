import React from "react";
import Layout from "../components/layout";

export default props => (
  <Layout title="Registry" location={props.location}>
    <article id="zola">
      <section>
        <p>
          We’re very fortunate to have everything we need for this next chapter together! Instead of a gift, we’re asking that those so inclined make a donation to one of the causes below. 
        </p>
        <p>
          We’ll be able to select the specific charities within any cause for which we receive donations. 
        </p>
      </section>
      <div id="zola-iframe-container">
        <iframe
          id="zola-iframe"
          title="registry"
          src="https://widget.zola.com/v1/widget/registry/krisandrachael/html?maxItems=12&amp;partnerId=squarespace"
          className="zola-registry-iframe"
          scrolling="no"
          style={{ height: "340px", width: "100%", position: "relative" }}
          width="100%"
          frameBorder="0"
        />
      </div>
    </article>
  </Layout>
);
