import axios from "axios";

const URL = "https://weatherapi-com.p.rapidapi.com/forecast.json";

export const getWeather = async (lat, lng) => {
  try {
    const { data } = await axios.get(URL, {
      params: {
        q: `${lat},${lng}`,
      },
      headers: {
        "x-rapidapi-key": "3da6296422mshf9cd2f45feb14bcp146619jsn6e9510f1c9d6",
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};
export const getWeatherByCity = async (city) => {
  try {
    const { data } = await axios.get(
      "https://weatherapi-com.p.rapidapi.com/current.json",
      {
        params: {
          q: city,
          days: "1",
        },
        headers: {
          "x-rapidapi-key":
            "3da6296422mshf9cd2f45feb14bcp146619jsn6e9510f1c9d6",
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
