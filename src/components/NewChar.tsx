import React from "react";
import Input from "./input/Input";

type NewCharType = {
	getChangeValue: any;
	newChar: object;
	data: any[];
	setdata: any;
	setNewChar: any;
	newCharEmpty: any;
};

const NewChar: React.FunctionComponent<NewCharType> = ({
	getChangeValue,
	newChar,
	data,
	setdata,
	setNewChar,
	newCharEmpty,
}) => {
	function handleSubmit(e: any) {
		e.preventDefault(e);
		setNewChar(newCharEmpty);
		setdata([...data, newChar]);

		e.target.reset();
	}

	return (
		<div className=" d-flex flex-column align-items-center">
			<h2>Agregar un nuevo personaje</h2>
			<form onSubmit={handleSubmit}>
				<Input //////////////////+
					name="ID"
					type="number"
					placeholder="ID"
					value=""
					onChange={getChangeValue}
				/>
				<Input
					name="name"
					type="text"
					placeholder="name"
					value=""
					onChange={getChangeValue}
				/>
				<Input
					name="birthday"
					type="text"
					placeholder="birthday"
					value=""
					onChange={getChangeValue}
				/>
				<Input
					name="occupation"
					type="text"
					placeholder="occupation"
					value=""
					onChange={getChangeValue}
				/>
				<Input
					name="img"
					type="text"
					placeholder="img"
					value=""
					onChange={getChangeValue}
				/>
				<Input
					name="status"
					type="text"
					placeholder="status"
					value=""
					onChange={getChangeValue}
				/>
				<Input
					name="nickname"
					type="text"
					placeholder="nickname"
					value=""
					onChange={getChangeValue}
				/>
				<Input
					name="appearance"
					type="text"
					placeholder="appearance"
					value=""
					onChange={getChangeValue}
				/>
				<Input
					name="portrayed"
					type="text"
					placeholder="portrayed"
					value=""
					onChange={getChangeValue}
				/>
				<Input
					name="category"
					type="text"
					placeholder="category"
					value=""
					onChange={getChangeValue}
				/>

				<Input
					name="better_call_saul_appearance"
					type="text"
					placeholder="better_call_saul_appearance"
					value=""
					onChange={getChangeValue}
				/>
				<br />
				<button type="submit" className="btn btn-info m-1" onClick={(e) => {}}>
					Agregar personaje
				</button>
			</form>
		</div>
	);
};

export default NewChar;
