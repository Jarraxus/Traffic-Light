import React, { useState } from "react";

export const Clock = () => {
	const [color, setColor] = useState("red");
	setInterval(() => {
		if (color == "green") setColor("yellow");
		if (color == "yellow") setColor("red");
		if (color == "red") setColor("green");
	}, 3000);

	return (
		<div className="container">
			<div className="pole"></div>
			<div className="traffic-light">
				<div
					className={color == "red" ? "red active" : "red"}
					onClick={() => setColor("red")}></div>
				<div
					className={color == "yellow" ? "yellow active" : "yellow"}
					onClick={() => setColor("yellow")}></div>
				<div
					className={color == "green" ? "green active" : "green"}
					onClick={() => setColor("green")}></div>
			</div>
		</div>
	);
};
