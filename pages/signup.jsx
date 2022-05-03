import React from "react";
import { Form, Title } from "../components";

const Signup = () => {
	return (
		<div className="md:w-2/3 lg:w-1/2 m-auto py-5">
			<Title
				heading="Getting Started"
				subheading="Create an account to continue and connect with the people."
			/>

			<Form />
		</div>
	);
};

export default Signup;
