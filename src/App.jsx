import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card/Card";
import Input from "./components/Input/Input";
import { getWeatherByCity, getWeather } from "./api";
import Time from "./components/time/Time";

const App = () => {
  const [coordinates, setCoordinates] = useState({ lat: null, lon: null });
  const [datas, setDatas] = useState(null);
  const [city, setCity] = useState("");

  useEffect(() => {
    if (!city) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoordinates({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting geolocation: ", error);
        }
      );
    }
  }, [city]);

  useEffect(() => {
    const fetchData = async () => {
      if (coordinates.lat !== null && coordinates.lon !== null && !city) {
        const data = await getWeather(coordinates.lat, coordinates.lon);
        setDatas(data);
      }
    };

    fetchData();
  }, [coordinates, city]);

  useEffect(() => {
    const fetchCityData = async () => {
      if (city) {
        const data = await getWeatherByCity(city);
        setDatas(data);
      }
    };

    fetchCityData();
  }, [city]);

  const handleSearch = (search) => {
    setCity(search);
  };
  return (
    <div className="App">
      <div className="bg-app" />
      <div className="container">
        <Input onSearch={handleSearch} />
        {datas ? <Card datas={datas} /> : <p>Loading...</p>}
        <Time datas={datas} />
      </div>
      <div className="footer">
        <p>Created With ❤️ By Virgi</p>
      </div>
    </div>
  );
};

export default App;
