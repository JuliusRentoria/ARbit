import { useEffect, useState } from "react";

const ARScene = () => {
  const [markerStatus, setMarkerStatus] = useState("No marker detected yet");
  const [currentMarker, setCurrentMarker] = useState(null);
  const [destination, setDestination] = useState("");
  const [isDestinationModalOpen, setDestinationModalOpen] = useState(false);
  const [destinationInfo, setDestinationInfo] = useState("");

  const markerOptions = [
    { id: "Bitspace Entrance", info: "Welcome to the Bitspace Entrance." },
    { id: "ATC", info: "This is the ATC building." },
    { id: "FSC", info: "Here is the Faith Student Council office." },
    {
      id: "Guidance",
      info: "Guidance office is located inside Mabini Building.",
    },
    { id: "ISAAC", info: "This is the ISAAC building." },
    { id: "Mabini Bldg", info: "Mabini Building is located here." },
    { id: "MPCC", info: "Multi-Purpose Covered Court (MPCC)." },
    { id: "MPH", info: "This is the Multi-Purpose Hall (MPH)." },
    { id: "NU Space", info: "Welcome to NU Space." },
    { id: "Registrar", info: "The Registrar's Office is located here." },
  ];

  useEffect(() => {
    // Select all markers after the scene is fully loaded
    const markers = document.querySelectorAll("a-marker");

    const handleMarkerFound = (event) => {
      const markerId = event.target.id; // Use the marker's ID to identify which marker is detected
      setCurrentMarker(markerId);
      setMarkerStatus(`Marker detected: ${markerId}`);
      setDestinationModalOpen(true); // Open the destination modal when marker is detected
    };

    const handleMarkerLost = (event) => {
      const markerId = event.target.id; // Use the marker's ID to identify which marker is lost
      setMarkerStatus(`Marker lost: ${markerId}`);
      setCurrentMarker(null);
      setDestinationModalOpen(false);
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

  const handleDestinationSelect = (event) => {
    const selectedDestination = event.target.value;
    setDestination(selectedDestination);

    // Get information for the selected destination
    const selectedInfo = markerOptions.find(
      (option) => option.id === selectedDestination
    )?.info;

    setDestinationInfo(selectedInfo || "No information available.");
    setDestinationModalOpen(false); // Close the modal after selecting destination
  };

  // Remove current marker from destination options
  const availableDestinations = markerOptions.filter(
    (option) => option.id !== currentMarker
  );

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
        arjs="sourceType: webcam; debugUIEnabled: false;"
        vr-mode-ui="enabled: false"
        crossorigin="anonymous"
        style={{
          width: "100%",
          height: "100%",
          position: "fixed", // Ensures the scene stays fixed on the screen
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          margin: 0,
          padding: 0,
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

        <a-camera
          style={{
            width: "100%",
            height: "100%", // Ensures the camera spans the full width and height
            position: "fixed", // Ensures the camera remains fixed on the screen
          }}
        ></a-camera>
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

      {/* Destination selection modal */}
      {isDestinationModalOpen && (
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            padding: "20px",
            borderRadius: "10px",
            zIndex: 2,
          }}
        >
          <h3>Select Your Destination</h3>
          <select onChange={handleDestinationSelect} value={destination}>
            <option value="">--Select a destination--</option>
            {availableDestinations.map((option) => (
              <option key={option.id} value={option.id}>
                {option.id}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Floating overlay for current location and destination info */}
      {(currentMarker || destination) && (
        <div
          style={{
            position: "absolute",
            top: "60px", // Position it below the status display
            left: "50%",
            transform: "translateX(-50%)",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            padding: "10px",
            borderRadius: "5px",
            fontSize: "4.3vw", // Responsive font size
            maxWidth: "90%", // Limit the width of the overlay
            overflow: "auto", // Enable scrolling if needed
            zIndex: 1,
          }}
        >
          {currentMarker && <div>Current Location: {currentMarker}</div>}
          {destination && <div>Destination: {destination}</div>}
          {destinationInfo && <div>Info: {destinationInfo}</div>}
        </div>
      )}
    </div>
  );
};

export default ARScene;
