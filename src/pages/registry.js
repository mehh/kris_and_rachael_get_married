import React from "react";
import Layout from "../components/layout";

export default props => (
  <Layout title="Registry" location={props.location}>
    <article id="zola">
      <section>
        <p>
          Make no mistake: your presence is the perfect present and we are not
          expecting any gifts. In lieu of a traditional contribution, we would
          also be deeply honoured to have you donate in our name to a
          progressive cause you believe strongly in.
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
