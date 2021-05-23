import React from "react";

type TablaRowProps = {
	dataRow: any;
};

const Tablarow: React.FunctionComponent<TablaRowProps> = (props) => {
	return (
		<tr>
			{props.dataRow.map((col: any, nCol: number) => {
				return (
					<td key={`${col}-${nCol}`}>
						{col.propiertyName !== "img" ? (
							col.type == "string" || col.type == "number" ? (
								col.value
							) : (
								col.value.length
							)
						) : (
							<img className="w-50" src={col.value} alt={col.value} />
						)}
					</td>
				);
			})}
		</tr>
	);
};

export default Tablarow;
