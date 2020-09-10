import React, { useState } from "react";
import { Container } from "react-bootstrap";
import ReactMapGL, { Marker } from "react-map-gl";
import key from "../../Key";
import InfoModal from "../InfoModal/InfoModal";

const Map = () => {
  const [mapStyle, setMapStyle] = useState({
    width: 400,
    height: 400,
    latitude: 23.46113,
    longitude: 91.179246,
    zoom: 8,
  });
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const lanlatInfo = { lan: mapStyle.latitude, lat: mapStyle.longitude };
  return (
    <Container fluid>
      <ReactMapGL
        {...mapStyle}
        onViewportChange={(nextViewport) => setMapStyle(nextViewport)}
        mapboxApiAccessToken={key}
      >
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
