import React from "react";
import { useHistory } from "react-router";

type NotFoundProps = {};

const NotFound: React.FunctionComponent<NotFoundProps> = (props) => {
	const history = useHistory();
	return (
		<div>
			<h1>No Info</h1>
			<button
				onClick={() => {
					history.push("/");
				}}
			>
				HOMEPAGE
			</button>
		</div>
	);
};

export default NotFound;
