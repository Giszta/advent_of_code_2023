import "./Day.css";

const Day = ({ dayNumber }: { dayNumber: number }) => {
	return (
		<div className="day-container">
			<p>{dayNumber}</p>
		</div>
	);
};

export default Day;
