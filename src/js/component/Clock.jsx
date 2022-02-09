import React, { useState } from "react";

export const Clock = () => {
	const [color, setColor] = useState("red");
	var timer = null;
	function switchColor() {
		if (color == "green") setColor("yellow");
		if (color == "yellow") setColor("red");
		if (color == "red") setColor("green");
	}
	function switchClockStatus() {
		if (timer == null) {
			timer = setInterval(switchColor, 3000);
			console.log(timer);
		} else {
			clearInterval(timer);
			timer = null;
			console.log(timer);
		}
	}

	switchClockStatus();

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
				<button className="stopstart" onClick={switchClockStatus}>
					Start/Stop
				</button>
			</div>
		</div>
	);
};
