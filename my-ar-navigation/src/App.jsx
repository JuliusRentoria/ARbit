// src/App.jsx
import { useState } from "react";
import Onboarding from "./components/Onboarding";
import ARScene from "./components/ARScene";

const App = () => {
  const [inARScene, setInARScene] = useState(false);

  return (
    <div>
      {inARScene ? (
        <ARScene />
      ) : (
        <Onboarding onStart={() => setInARScene(true)} />
      )}
    </div>
  );
};

export default App;
