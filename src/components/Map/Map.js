import React, { useState } from "react";
import { Container } from "react-bootstrap";
import ReactMapGL, { Marker } from "react-map-gl";
import key from "../../Key";
import InfoModal from "../InfoModal/InfoModal";

const Map = () => {
  //state to styling the map
  const [mapStyle, setMapStyle] = useState({
    width: "100%",
    height: "100vh",
    latitude: 23.46113,
    longitude: 91.179246,
    zoom: 8,
  });
  //state to show and hide Modal
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const lanlatInfo = { lat: mapStyle.latitude, lon: mapStyle.longitude };
  return (
    <Container fluid="true">
      <ReactMapGL
        {...mapStyle}
        onViewportChange={(nextViewport) => setMapStyle(nextViewport)}
        // secret api-key
        mapboxApiAccessToken={key}
      >
        {/* marker of current location */}
        <Marker latitude={23.46113} longitude={91.179246}>
          <i
            className="fas fa-map-marker text-danger"
            onClick={handleShowModal}
          ></i>
        </Marker>
      </ReactMapGL>
      {showModal ? (
        <InfoModal
          show={showModal}
          handleClose={handleCloseModal}
          lanlatInfo={lanlatInfo}
        ></InfoModal>
      ) : (
        false
      )}
    </Container>
  );
};

export default Map;
