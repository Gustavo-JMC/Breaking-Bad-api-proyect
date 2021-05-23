import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import Tabla from "../components/tabla/Tabla";

import Input from "../components/input/Input"; ////////+
import { BBCharType } from "../types/types"; ////////+
import NewChar from "../components/NewChar";
import DeleteChar from "../components/DeleteChar";
import Reset from "../components/Reset";

type HomeProps = {};

const TableView: React.FunctionComponent<HomeProps> = () => {
	const newCharEmpty: BBCharType = {
		////////+
		char_id: "",
		name: "",
		birthday: "",
		occupation: [],
		img: "",
		status: "",
		nickname: "",
		appearance: [],
		portrayed: "",
		category: "",
		better_call_saul_appearance: [],
	};

	const [newChar, setNewChar] = useState<BBCharType>(newCharEmpty); ////////+

	const { pageID } = useParams<any>();
	const history = useHistory();

	const [page, setPage] = useState<number>(Number(pageID));

	const [data, setdata] = useState<any>();

	const [loading, setloading] = useState(true);

	let url = "";
	if (Number(pageID) < 7 && Number(pageID) >= 0) {
		url = `https://www.breakingbadapi.com/api/characters?limit=10&offset=${page * 10}`;
	} else {
		history.push("/NotFound");
	}

	useEffect(() => {
		fetch(url)
			.then((res: any) => res.json())
			.then((dataApi) => {
				setdata(dataApi);

				setloading(false);
			});
	}, [url]);

	useEffect(() => {
		// console.log(newChar);
	}, [newChar, data]);

	const prepareData = () => {
		let formattedChars: any = []; //DATA QUE ESPERA EL BODY DE MI TABLA
		let formattedCharsHeads: any = []; //DATA QUE ESPERAN LOS ENCABEZADOS DE MI TABLA

		if (data !== undefined) {
			formattedCharsHeads = Object.keys(data[0]);
			for (let nCharacters = 0; nCharacters < data.length; nCharacters++) {
				let dataChar: any[] = [];
				let propierties = Object.values(data[nCharacters]); //OBJECT VALUES NOS TRAE TODOS LO VALORES DEL OBJETO UNO POR UNO
				let propiertiesNames = Object.keys(data[nCharacters]);
				for (
					let characterPropierty = 0;
					characterPropierty < propierties.length;
					characterPropierty++
				) {
					// POR CADA UNA DE LAS PROPIEDADES ENCONTRADAS EN UN PERSONAJE HAZ LO SIGUIENTE
					dataChar.push({
						value: propierties[characterPropierty],
						type: typeof propierties[characterPropierty],
						propiertyName: propiertiesNames[characterPropierty],
					});
				}
				formattedChars.push(dataChar); //POR CADA PERSONAJE CREO UNA ROW CON 16 COLUMNAS CORRESPONDIENTES A CADA PROPIEDAD
			}
			///////Crea nueva personaje
			let dataChar: any[] = [];
			for (let i = 0; i < Object.keys(newChar).length; i++) {
				let propierties = Object.values(newChar);
				dataChar.push({
					value: propierties[i],
					type: typeof propierties[i],
					propiertiesName: Object.keys(newChar)[i],
				});
			}
			formattedChars.push(dataChar); //Agregar nuevo personaje
		}
		return [formattedChars, formattedCharsHeads]; //DEVUELVO TODA LA DATA FORMATEADA DE MIS PERSONAJES
	};

	const getChangeValue = (val: string[]) => {
		////////+
		let userArray: string[] = val[1].split(",");
		switch (val[0]) {
			case "ID":
				setNewChar({
					char_id: val[1],
					name: newChar.name,
					birthday: newChar.birthday,
					occupation: newChar.occupation,
					img: newChar.img,
					status: newChar.status,
					nickname: newChar.nickname,
					appearance: newChar.appearance,
					portrayed: newChar.portrayed,
					category: newChar.category,
					better_call_saul_appearance: newChar.better_call_saul_appearance,
				});
				break;
			case "name":
				setNewChar({
					char_id: newChar.char_id,
					name: val[1],
					birthday: newChar.birthday,
					occupation: newChar.occupation,
					img: newChar.img,
					status: newChar.status,
					nickname: newChar.nickname,
					appearance: newChar.appearance,
					portrayed: newChar.portrayed,
					category: newChar.category,
					better_call_saul_appearance: newChar.better_call_saul_appearance,
				});
				break;
			case "birthday":
				setNewChar({
					char_id: newChar.char_id,
					name: newChar.name,
					birthday: val[1],
					occupation: newChar.occupation,
					img: newChar.img,
					status: newChar.status,
					nickname: newChar.nickname,
					appearance: newChar.appearance,
					portrayed: newChar.portrayed,
					category: newChar.category,
					better_call_saul_appearance: newChar.better_call_saul_appearance,
				});
				break;
			case "occupation":
				setNewChar({
					char_id: newChar.char_id,
					name: newChar.name,
					birthday: newChar.birthday,
					occupation: userArray,
					img: newChar.img,
					status: newChar.status,
					nickname: newChar.nickname,
					appearance: newChar.appearance,
					portrayed: newChar.portrayed,
					category: newChar.category,
					better_call_saul_appearance: newChar.better_call_saul_appearance,
				});
				break;
			case "img":
				setNewChar({
					char_id: newChar.char_id,
					name: newChar.name,
					birthday: newChar.birthday,
					occupation: newChar.occupation,
					img: val[1],
					status: newChar.status,
					nickname: newChar.nickname,
					appearance: newChar.appearance,
					portrayed: newChar.portrayed,
					category: newChar.category,
					better_call_saul_appearance: newChar.better_call_saul_appearance,
				});
				break;
			case "status":
				setNewChar({
					char_id: newChar.char_id,
					name: newChar.name,
					birthday: newChar.birthday,
					occupation: newChar.occupation,
					img: newChar.img,
					status: val[1],
					nickname: newChar.nickname,
					appearance: newChar.appearance,
					portrayed: newChar.portrayed,
					category: newChar.category,
					better_call_saul_appearance: newChar.better_call_saul_appearance,
				});
				break;
			case "nickname":
				setNewChar({
					char_id: newChar.char_id,
					name: newChar.name,
					birthday: newChar.birthday,
					occupation: newChar.occupation,
					img: newChar.img,
					status: newChar.status,
					nickname: val[1],
					appearance: newChar.appearance,
					portrayed: newChar.portrayed,
					category: newChar.category,
					better_call_saul_appearance: newChar.better_call_saul_appearance,
				});
				break;
			case "appearance":
				setNewChar({
					char_id: newChar.char_id,
					name: newChar.name,
					birthday: newChar.birthday,
					occupation: newChar.occupation,
					img: newChar.img,
					status: newChar.status,
					nickname: newChar.nickname,
					appearance: userArray,
					portrayed: newChar.portrayed,
					category: newChar.category,
					better_call_saul_appearance: newChar.better_call_saul_appearance,
				});
				break;
			case "portrayed":
				setNewChar({
					char_id: newChar.char_id,
					name: newChar.name,
					birthday: newChar.birthday,
					occupation: newChar.occupation,
					img: newChar.img,
					status: newChar.status,
					nickname: newChar.nickname,
					appearance: newChar.appearance,
					portrayed: val[1],
					category: newChar.category,
					better_call_saul_appearance: newChar.better_call_saul_appearance,
				});
				break;
			case "category":
				setNewChar({
					char_id: newChar.char_id,
					name: newChar.name,
					birthday: newChar.birthday,
					occupation: newChar.occupation,
					img: newChar.img,
					status: newChar.status,
					nickname: newChar.nickname,
					appearance: newChar.appearance,
					portrayed: newChar.portrayed,
					category: val[1],
					better_call_saul_appearance: newChar.better_call_saul_appearance,
				});
				break;
			case "better_call_saul_appearance":
				setNewChar({
					char_id: newChar.char_id,
					name: newChar.name,
					birthday: newChar.birthday,
					occupation: newChar.occupation,
					img: newChar.img,
					status: newChar.status,
					nickname: newChar.nickname,
					appearance: newChar.appearance,
					portrayed: newChar.portrayed,
					category: newChar.category,
					better_call_saul_appearance: userArray,
				});

				break;
		}
		//console.log(val)
	};

	return (
		<div className="tableview_container">
			<div className=" d-flex flex-column align-items-center">
				{loading ? (
					<h1>Loading ...</h1>
				) : (
					<Tabla prepareData={prepareData()} filterData={[]} />
				)}
				{page > 0 ? (
					<button
						className="btn btn-info m-1"
						onClick={() => {
							setPage(page - 1);
							history.push(`/tabla/${Number(pageID) - 1}`);
						}}
					>
						ANTERIOR
					</button>
				) : (
					<button className="btn btn-info m-1" disabled>
						ANTERIOR
					</button>
				)}
				{page < 6 ? (
					<button
						className="btn btn-info m-1"
						onClick={() => {
							setPage(page + 1);
							history.push(`/tabla/${Number(pageID) + 1}`);
						}}
					>
						SIGUIENTE
					</button>
				) : (
					<button className="btn btn-info m-1" disabled>
						SIGUIENTE
					</button>
				)}

				<hr />

				<div className="card">
					<div className="card-body">
						<NewChar
							getChangeValue={getChangeValue}
							newChar={newChar}
							data={data}
							setdata={setdata}
							setNewChar={setNewChar}
							newCharEmpty={newCharEmpty}
						/>
					</div>
				</div>
				<br />

				<div className="card m-5 ">
					<div className="card-body d-flex flex-column align-items-center">
						<DeleteChar data={data} setdata={setdata} />

						<br />
						<Reset data={data} setdata={setdata} page={page} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default TableView;
