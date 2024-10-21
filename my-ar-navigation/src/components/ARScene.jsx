import { useEffect, useState } from "react";

const ARScene = () => {
  const [markerStatus, setMarkerStatus] = useState("No marker detected yet");

  useEffect(() => {
    // Select all markers after the scene is fully loaded
    const markers = document.querySelectorAll("a-marker");

    const handleMarkerFound = (event) => {
      const markerId = event.target.id; // Use the marker's ID to identify which marker is detected
      setMarkerStatus(`Marker detected: ${markerId}`);
    };

    const handleMarkerLost = (event) => {
      const markerId = event.target.id; // Use the marker's ID to identify which marker is lost
      setMarkerStatus(`Marker lost: ${markerId}`);
    };

    // Add event listeners to each marker
    markers.forEach((marker) => {
      marker.addEventListener("markerFound", handleMarkerFound);
      marker.addEventListener("markerLost", handleMarkerLost);
    });

    // Cleanup event listeners on unmount
    return () => {
      markers.forEach((marker) => {
        marker.removeEventListener("markerFound", handleMarkerFound);
        marker.removeEventListener("markerLost", handleMarkerLost);
      });
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <a-scene
        embedded
        arjs="sourceType: webcam; debugUIEnabled: true;"
        vr-mode-ui="enabled: false"
        crossorigin="anonymous"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
        }}
      >
        {/* Asset management for .gltf, .bin, and textures */}
        <a-assets>
          <a-asset-item id="gltf-model" src="/models/scene.gltf"></a-asset-item>
        </a-assets>

        {/* Marker definitions with unique IDs */}
        <a-marker id="Bitspace Entrance" type="hiro">
          <a-entity scale="1 1 1" position="0 0 0"></a-entity>
        </a-marker>
        <a-marker id="ATC" type="pattern" url="/markers/pattern-ATC.patt">
          <a-entity scale="1 1 1" position="0 0 0"></a-entity>
        </a-marker>
        <a-marker
          id="FSC"
          type="pattern"
          url="/markers/pattern-FAITH STUDENT COUNCIL.patt"
        >
          <a-entity scale="1 1 1" position="0 0 0"></a-entity>
        </a-marker>
        <a-marker
          id="Guidance"
          type="pattern"
          url="/markers/pattern-GUIDANCE.patt"
        >
          <a-entity scale="1 1 1" position="0 0 0"></a-entity>
        </a-marker>
        <a-marker id="ISAAC" type="pattern" url="/markers/pattern-ISAAC.patt">
          <a-entity scale="1 1 1" position="0 0 0"></a-entity>
        </a-marker>
        <a-marker
          id="Mabini Bldg"
          type="pattern"
          url="/markers/pattern-MABINI.patt"
        >
          <a-entity scale="1 1 1" position="0 0 0"></a-entity>
        </a-marker>
        <a-marker id="MPCC" type="pattern" url="/markers/pattern-MPCC.patt">
          <a-entity scale="1 1 1" position="0 0 0"></a-entity>
        </a-marker>
        <a-marker
          id="MPH"
          type="pattern"
          url="/markers/pattern-MULTI PURPOSE HALL.patt"
        >
          <a-entity scale="1 1 1" position="0 0 0"></a-entity>
        </a-marker>
        <a-marker
          id="NU Space"
          type="pattern"
          url="/markers/pattern-NU SPACE.patt"
        >
          <a-entity scale="1 1 1" position="0 0 0"></a-entity>
        </a-marker>
        <a-marker
          id="Registrar"
          type="pattern"
          url="/markers/pattern-REGISTRAR.patt"
        >
          <a-entity scale="1 1 1" position="0 0 0"></a-entity>
        </a-marker>

        <a-camera></a-camera>
      </a-scene>

      {/* Display marker status */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          padding: "10px",
          borderRadius: "5px",
          fontSize: "20px",
          zIndex: 1,
        }}
      >
        {markerStatus}
      </div>
    </div>
  );
};

export default ARScene;
