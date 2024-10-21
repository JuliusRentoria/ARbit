// src/components/Onboarding.jsx
import PropTypes from "prop-types";

const Onboarding = ({ onStart }) => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Welcome to Campus Navigator!</h1>
        <p style={styles.description}>
          Discover and navigate the campus with ease using augmented reality.
        </p>
        <button style={styles.button} onClick={onStart}>
          Start Navigation
        </button>
      </div>
    </div>
  );
};

// Add prop types for validation
Onboarding.propTypes = {
  onStart: PropTypes.func.isRequired, // onStart should be a required function
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundImage: "url('/images/campus-bg.jpg')", // Add a background image
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  content: {
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Light overlay on the content
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)", // Soft shadow for depth
    textAlign: "center",
    maxWidth: "500px",
    animation: "fadeIn 1s ease-in-out", // Fade-in animation
  },
  title: {
    fontSize: "32px",
    marginBottom: "20px",
    color: "#333",
    fontFamily: "'Poppins', sans-serif", // Modern font
  },
  description: {
    fontSize: "18px",
    marginBottom: "30px",
    color: "#555",
    lineHeight: "1.6",
    fontFamily: "'Poppins', sans-serif",
  },
  button: {
    padding: "12px 30px",
    fontSize: "18px",
    backgroundColor: "#28a745", // Bright, attractive button color
    color: "#fff",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    transition: "background-color 0.3s ease", // Smooth transition effect
  },
  "@keyframes fadeIn": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
};

// Add hover effect for the button
styles.button[":hover"] = {
  backgroundColor: "#218838", // Darker shade on hover
};

export default Onboarding;
