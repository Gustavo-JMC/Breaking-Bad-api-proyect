import React, { useRef, useEffect } from "react";

type InputProps = {
	name: string;
	placeholder: string;
	value: string;
	type: string;
	onChange: (val: string[]) => void;
};

const Input: React.FunctionComponent<InputProps> = (props) => {
	const inputRef = useRef(null);

	useEffect(() => {
		if (inputRef.current != null) {
			//@ts-ignore
			inputRef.current.value = props.value;
		}
	}, []);

	const handleChange = () => {
		if (inputRef.current != null) {
			//@ts-ignore
			props.onChange([props.name, inputRef.current.value]);
		}
	};

	return (
		<div>
			<input
				required
				ref={inputRef}
				type={props.type}
				name={props.name}
				placeholder={props.placeholder}
				//value={props.value}
				onChange={handleChange}
			/>
		</div>
	);
};

export default Input;
