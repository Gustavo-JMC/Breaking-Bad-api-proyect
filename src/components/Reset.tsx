import React, { useRef } from "react";

type ResetProp = {
	data: any;
	setdata: any;
	page: any;
};

const Reset: React.FunctionComponent<ResetProp> = ({ data, setdata, page }) => {
	let url = `https://www.breakingbadapi.com/api/characters?limit=10&offset=${page * 10}`;
	return (
		<div>
			<button
				onClick={() => {
					fetch(url)
						.then((res: any) => res.json())
						.then((dataApi) => {
							setdata(dataApi);
						});
				}}
				className="btn btn-info"
			>
				Reset
			</button>
		</div>
	);
};

export default Reset;
