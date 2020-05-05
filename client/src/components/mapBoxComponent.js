import React, { createRef } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import SuperCluster from "supercluster";
import { backImage } from "../images/icons8-circle-100.png";

class MapBoxComponent extends React.Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this.state = {
      viewport: {
        latitude: 60,
        longitude: -95,
        width: "70vw",
        height: "70vh",
        zoom: 2
      }
    };
  }

  setViewPort = viewport => {
    this.setState({
      viewport: {
        latitude: viewport.latitude,
        longitude: viewport.longitude,
        width: this.state.viewport.width,
        height: this.state.viewport.height,
        zoom: viewport.zoom
      }
    });
  };

  componentDidMount = () => {
    const points = this.props.incomingCovidData.map(eachValue => ({
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [eachValue.countryInfo.lat, eachValue.countryInfo.long]
      }
    }));
  };

  render() {
    return (
      <div>
        <div
          className="mapbox"
          style={{
            border: "2px solid rgba(0,0,0,0)",
            boxShadow:
              "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
            width: "72vw",
            height: "72wh",
            marginLeft: "15%",

            borderRadius: "15px"
          }}
        >
          <div style={{ textAlign: "center", color: "black" }}>World Map</div>
          <ReactMapGL
            ref={this.mapRef}
            maxZoom="20"
            style={{ borderRadius: "0%,0%,1%,1%", marginLeft: "1%" }}
            mapStyle="mapbox://styles/rahulpatel596/ck8fabm8t2lh51ini6imuy5oi"
            {...this.state.viewport}
            mapboxApiAccessToken="pk.eyJ1IjoicmFodWxwYXRlbDU5NiIsImEiOiJjazg1YjZka3IwNTZ2M2Zsa3d2aHRmbTZ1In0.1HATofAfdL14jYyDvDsVZQ"
            onViewportChange={viewport => {
              this.setViewPort(viewport);
            }}
          >
            {this.props.incomingCovidData.map(eachValue => (
              <Marker
                key={eachValue.countryInfo._id}
                country={eachValue.country}
                latitude={eachValue.countryInfo.lat}
                longitude={eachValue.countryInfo.long}
              >
                <div>
                  <div
                    style={{
                      color: "black"
                    }}
                  >
                    {" "}
                    {eachValue.cases}
                  </div>

                  {/* <img src="https://img.icons8.com/metro/26/000000/marker.png" /> */}
                </div>
              </Marker>
            ))}
          </ReactMapGL>
        </div>
      </div>
    );
  }
}

export default MapBoxComponent;
