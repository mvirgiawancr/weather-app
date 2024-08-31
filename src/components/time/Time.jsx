/* eslint-disable react/prop-types */
import "./Time.css";

const Time = ({ datas }) => {
  const localTimeString =
    datas?.location?.localtime || new Date().toISOString().slice(0, 16);

  const [datePart, timePart] = localTimeString.split(" ");

  const formattedDate = new Date(`${datePart}T${timePart}`).toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  const formattedTime = new Date(`${datePart}T${timePart}`).toLocaleTimeString(
    "en-US",
    {
      hour: "2-digit",
      minute: "2-digit",
    }
  );
  return (
    <div className="time-container">
      <h1>{formattedTime || "Loading..."}</h1>
      <p>{formattedDate || "Loading..."}</p>
    </div>
  );
};

export default Time;
