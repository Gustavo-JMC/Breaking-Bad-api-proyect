import React, { useEffect, useRef } from "react";

type DeleteCharProp = {
	data: any;
	setdata: any;
};

const DeleteChar: React.FunctionComponent<DeleteCharProp> = ({ data, setdata }) => {
	const deleteRef = useRef(null);

	useEffect(() => {
		// if (deleteRef.current != null) {
		// 	//@ts-ignore
		// 	deleteRef.current.value = props.value;
		// }
	}, []);

	return (
		<div>
			<h2>Borrar personaje por ID</h2>
			<input ref={deleteRef} type="text" name={"deletchar"} placeholder={"ID"} />
			<button
				className="btn btn-info m-1"
				onClick={(e) => {
					e.preventDefault();

					const dataFilter = data.filter((char: any) => {
						//@ts-ignore
						return Number(char.char_id) !== Number(deleteRef.current.value);
					});

					setdata([...dataFilter]);
				}}
			>
				Borrar personaje
			</button>
		</div>
	);
};

export default DeleteChar;
