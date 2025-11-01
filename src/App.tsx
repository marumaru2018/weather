import "./App.css";
import Form from "./components/Form";
import Results from "./components/Results";
import Title from "./components/Title";
import { useState } from "react";

// APIキーとURLを環境変数から取得
const URL = "https://api.weatherapi.com/v1/current.json";
const APIKEY = import.meta.env.VITE_WEATHER_API_KEY;

type WeatherDataStateType = {
  country: string;
  city: string;
  temperature: string;
  condition: string;
  icon: string;
};
function App() {
  const [city, setCity] = useState<string>("");
  const [result, setResult] = useState<WeatherDataStateType>({
    country: "",
    city: "",
    temperature: "",
    condition: "",
    icon: "",
  });
  const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch(`${URL}?key=${APIKEY}&q=${city}&aqi=no`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // setWeatherData({
        //   country: data.location.country,
        //   city: data.location.name,
        //   temperature: data.current.temp_c + "°C",
        //   condition: data.current.condition.text,
        //   icon: data.current.condition.icon,
        // });
        // Reset city input after fetching weather data
        setCity("");
        setResult({
          country: data.location.country,
          city: data.location.name,
          temperature: data.current.temp_c + "°C",
          condition: data.current.condition.text,
          icon: data.current.condition.icon,
        });
      })
      .catch((error) => {
        alert("Error fetching weather data. Please try again.");
        console.error("Error fetching weather data:", error);
      })
      .finally(() => {
        // setLoading(false);
      });
  };

  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Form setCity={setCity} getWeather={getWeather} />
        <Results result={result} />
      </div>
    </div>
  );
}

export default App;
