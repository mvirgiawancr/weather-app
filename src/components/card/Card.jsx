/* eslint-disable react/prop-types */
import "./Card.css";

const Card = ({ datas }) => {
  return (
    <div className="card-container">
      <h1>{datas?.location?.name || "Loading..."}</h1>
      <div className="img-container">
        {<img src={datas?.current?.condition.icon || "Loading"} alt="Icon" />}
        <h1>{datas?.current?.temp_c} °C</h1>
      </div>
      <h1 style={{ fontSize: "1.2rem" }}>{datas?.current?.condition.text}</h1>
    </div>
  );
};

export default Card;
