import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../context/AuthContext";

const OutletPage = () => {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <AuthProvider>
          <Outlet></Outlet>
        </AuthProvider>
      </div>
    </Container>
  );
};

export default OutletPage;
