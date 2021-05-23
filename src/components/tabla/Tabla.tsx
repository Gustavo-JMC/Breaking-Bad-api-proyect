import React, { useState, useEffect } from "react";
import Tablarow from "../Tablarow";

type TablaProps = {
	prepareData: any;
	filterData: string[];
};

const Tabla: React.FunctionComponent<TablaProps> = (props) => {
	const [filterData, setFilterData] = useState<any>([]);
	const [filterHeaders, setFilterHeaders] = useState<any>([]);

	useEffect(() => {
		if (props.prepareData[1] != undefined) {
			//CHEQUEO QUE LA DATA DE LA API YA VENGA CARGADA EN EL COMPONENTE
			let result: any; //CREO UNA VARIABLE DONDE GUARDO MIS RESULTADOS FILTRADOS
			result = props.prepareData[1].filter(
				(heads: any) => !props.filterData.includes(heads)
			); //FILTRO LOS ENCABEZADOS ORIGINALES UNO POR UNO CON INCLUDES CHEQUEANDO QUE EL NOMBRE DEL ENCABEZADO ORIGINAL NO COINCIDA CON LO QUE PUSE EN PROPS.FILTERDATA
			setFilterHeaders(result); //GUARDO EN EL ESTADO DE ENCABEZADOS FILTRADOS, MIS ENCABEZADOS FILTRADOS
		}
		if (props.prepareData[0] != undefined) {
			//CHEQUEO QUE LA DATA DE LA API YA VENGA CARGADA EN EL COMPONENTE
			let newData: any[] = []; //CREO UNA VARIABLE PARA GUARDAR MIS PERSONAJES CON LA DATA FILTRADA
			let result: any; //CREAR UNA VARIABLE QUE GUARDE CADA UNA DE LAS COLUMNAS FILTRADAS
			for (let i = 0; i < props.prepareData[0].length - 1; i++) {
				//RECORRO CADA UNO DE LOS PERSONAJES Y FILTRO SEGUN EL PROPIERTY NAME
				//@ts-ignore
				result = props.prepareData[0][i].filter(
					(data: any) => !props.filterData.includes(data.propiertyName)
				); //EVITO AQUELLAS COLUMNAS QUE NO QUIERO
				newData.push(result); //GUARDO LAS COLUMNAS DE CADA PERSONAJE EN UN ARRAY DIFERENTE (UNO POR CADA PERSNAJE)
			}
			setFilterData(newData); //GUARDO EN EL ESTADO DE DATA FILTRADA LA INFORMACION DE MIS PERSONAJES FILTRADA
		}
	}, [props.prepareData, filterHeaders.length, filterData.length]);

	return (
		<table className="m-5 table w-75 mx-auto ">
			<thead>
				<tr className="header bg-dark color text-white">
					{props.prepareData[1].map((property: any, i: number) => {
						// if (property === "better_call_saul_appearance") {
						// 	return;
						// }
						return (
							<th className="p-3" key={i}>
								{property}
							</th>
						);
					})}
				</tr>
			</thead>

			<tbody className="table-dark table-striped">
				{filterData.map((tData: any, nData: number) => (
					<Tablarow dataRow={tData} key={`tableRow-${nData}`} />
				))}
			</tbody>
		</table>
	);
};

export default Tabla;
