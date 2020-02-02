import React from "react";
import Layout from "../components/layout";
import Reveal from '../components/Reveal';
import gallery_ceremony from "../images/gallery_ceremony.jpg";
import gallery_postceremony from "../images/gallery_post-ceremony.jpg";
import gallery_friends_and_family from "../images/gallery_friends_and_family.jpg";
import gallery_reception from "../images/gallery_reception.jpg";
import gallery_beach from "../images/gallery_beach.jpg";
import gallery_details from "../images/gallery_details.jpg";



export default props => (
  <Layout title="Gallery" location={props.location}>
    <article id="Gallery">
      <section>
        <Reveal>
          <p>
            Below you will find photos of our special day.  Feel free to download them!
          </p>
          <p>
              All photos shot by our talented photographer, Jessica Mendoza, her website can be viewed here: <a href="http://www.jessicalynnmendoza.com/" target="_blank" rel="noopener noreferrer"><span role="img" aria-label="cemera">📸</span> jessicalynnmendoza.com <span role="img" aria-label="cemera">📸</span></a>
          </p>
        </Reveal>

        <Reveal>
            <section>
                <div class="two-grid">
                    <div class="reservations">
                        <a href="https://photos.app.goo.gl/dp7MTLPvypjCXGBeA" target="_blank" rel="noopener noreferrer">
                            <img className="photo" src={gallery_ceremony} alt="Wedding Ceremony Photos..." />
                        </a>
                        <h3>Ceremony</h3>
                    </div>
                    <div class="reservations">
                        <a href="https://photos.app.goo.gl/QqorBXzCJume9xLr7" target="_blank" rel="noopener noreferrer">
                            <img className="photo" src={gallery_postceremony} alt="Wedding Post Ceremony Photos..." />
                        </a>
                        <h3>Post-Ceremony</h3>
                    </div>
                </div>                           
            </section>
        </Reveal>

        <Reveal>
            <section>
                <div class="two-grid">
                    <div class="reservations">
                        <a href="https://photos.app.goo.gl/7TidSvAadtmJNhG96" target="_blank" rel="noopener noreferrer">
                            <img className="photo" src={gallery_friends_and_family} alt="Wedding Friends & Family..." />
                        </a>
                        <h3>Friends And Family</h3>
                    </div>
                    <div class="reservations">
                        <a href="https://photos.app.goo.gl/EU6ehz1pFiQVtZqL8" target="_blank" rel="noopener noreferrer">
                            <img className="photo" src={gallery_reception} alt="Wedding Reception Photos..." />
                        </a>
                        <h3>Reception</h3>
                    </div>
                </div>                           
            </section>
        </Reveal>

        <Reveal>
            <section>
                <div class="two-grid">
                    <div class="reservations">
                        <a href="https://photos.app.goo.gl/FpXCT2Boqhi5qX5D6" target="_blank" rel="noopener noreferrer">
                            <img className="photo" src={gallery_beach} alt="Wedding Beach..." />
                        </a>
                        <h3>Beach</h3>
                    </div>
                    <div class="reservations">
                        <a href="https://photos.app.goo.gl/3xpQZBavJRtemUq6A" target="_blank" rel="noopener noreferrer">
                            <img className="photo" src={gallery_details} alt="Wedding Details..." />
                        </a>
                        <h3>Details</h3>
                    </div>
                </div>                           
            </section>
        </Reveal>        
      </section>
    </article>
  </Layout>
);
