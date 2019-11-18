import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

export default class LagunaBeachMap extends React.Component {
  state = {
    lat: 33.541679,
    lng: -117.7854,
    zoom: 13
  };
  render() {
    const style = {
      width: "calc(100% - 1rem)",
      height: "27.5rem"
    };
    const position = [this.state.lat, this.state.lng];
    if (typeof window !== "undefined") {
      return (
        <Map
          style={style}
          preferCanvas={true}
          center={position}
          zoom={this.state.zoom}
        >
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            maxZoom="18"
            minZoom="8"
          />
          <Marker position={[33.547570, -117.803210]}>
            <Popup>
              <b>The venue!</b>
              <br />
              Crescent Bay Park
              <br />
              Crescent Bay Dr, Laguna Beach, CA 92651
            </Popup>
          </Marker>
          <Marker position={[33.542440, -117.782100]}>
            <Popup>
              <b>The Reception!</b>
              <br />
              Harley Laguna Beach
              <br />
              370 Glenneyre St, Laguna Beach, CA 92651
            </Popup>
          </Marker>
        </Map>
      );
    } else {
      return null;
    }
  }
}
