import React from "react";
import { Link } from "react-router-dom";

const NewPortfolioNav = () => {
  return (
    <section
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <nav>
        <span style={{ fontWeight: "bold" }}>I moved my portfolio to:</span>
        <Link
          to="https://shiref-mohammed.vercel.app"
          style={{
            marginLeft: "5px",
            textDecoration: "underline",
            color: "blue",
            fontStyle: "italic",
          }}
        >
          https://shiref-mohammed.vercel.app
        </Link>
      </nav>
    </section>
  );
};

export default NewPortfolioNav;
