import React from "react";
import { useHistory } from "react-router";

type HomepageProps = {};

const HomePage: React.FunctionComponent<HomepageProps> = (props) => {
	const history = useHistory();
	return (
		<div className="homepage_container">
			<div className="d-flex flex-column align-items-center">
				<img
					className="w-25 m-5"
					alt="breakinbadlogo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/1024px-Breaking_Bad_logo.svg.png"
				/>
				<button
					className="btn btn-primary w-25 m-5"
					onClick={() => {
						history.push("/tabla/0");
					}}
				>
					IR A TABLA
				</button>
			</div>
		</div>
	);
};

export default HomePage;
