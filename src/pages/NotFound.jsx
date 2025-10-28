import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  const styles = {
    container: {
      textAlign: "center",
      padding: "80px 20px",
      color: "#fff",
    },
    title: {
      fontSize: "72px",
      marginBottom: "20px",
    },
    message: {
      fontSize: "18px",
      marginBottom: "30px",
    },
    link: {
      TextDecoration: "none",
      color: "#007bff",
    },
  };

  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.title}>404</h1>
        <p style={styles.message}>Oops! Something went wrong 😐</p>
        <Link style={styles.link} to="/">
          ⬅️ Back to Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
