import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Form, Card, Button } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";

const SignUpPage = () => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const { signUp } = useAuth();

	const handleSubmit = (e) => {
		e.preventDefault();
		signUp(emailRef.current.value, passwordRef.current.value);
	};
	return (
		<>
			<Card>
				<Card.Body>
					<h2 className="text-center mb-4">Sign Up</h2>
					<Form>
						<Form.Group>
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" ref={emailRef} required></Form.Control>
						</Form.Group>
						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="email"
								ref={passwordRef}
								required
							></Form.Control>
						</Form.Group>
						<Form.Group>
							<Form.Label>Password Confirmation</Form.Label>
							<Form.Control
								type="email"
								ref={passwordConfirmRef}
								required
							></Form.Control>
						</Form.Group>
						<Button className="w-100" type="submit">
							Sign Up
						</Button>
					</Form>
				</Card.Body>
			</Card>
			<div className="w-100 text-center mt-2">
				Already have an account? <Link to="/login">Log In</Link>
			</div>
		</>
	);
};

export default SignUpPage;
