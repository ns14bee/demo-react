import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../context/AuthContext";

const OutletPage = () => {
	return (
		<AuthProvider>
			<Container
				className="d-flex align-items-center justify-content-center"
				style={{ minHeight: "100vh" }}
			>
				<div className="w-100" style={{ maxWidth: "400px" }}>
					<Outlet></Outlet>
				</div>
			</Container>
		</AuthProvider>
	);
};

export default OutletPage;
