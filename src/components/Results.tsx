// import type { WeatherDataStateType } from "../App";
// import { WeatherDataStateType } from "../App";

type WeatherDataStateType = {
  result: {
    country: string;
    city: string;
    temperature: string;
    condition: string;
    icon: string;
  };
};

// const Results = (props: WeatherDataPropsType) => {
//   const { city, country, temperature, condition, icon } = props.weatherData;

const Results = (props: WeatherDataStateType) => {
  // const Results = ({ weatherData }: WeatherDataPropsType) => {
  // const { city, country, temperature, condition, icon } = weatherData;
  // const city = weatherData?.city;
  // const country = weatherData?.country;
  // const temperature = weatherData?.temperature;
  // const condition = weatherData?.condition;
  // const icon = weatherData?.icon;

  return (
    <>
      {props.result.city && <h2>お天気情報</h2>}
      {props.result.city && <p>City: {props.result.city}</p>}
      {props.result.country && <p>Country: {props.result.country}</p>}
      {props.result.temperature && (
        <p>Temperature: {props.result.temperature}</p>
      )}
      {props.result.condition && (
        <div className="results-condition">
          <img src={props.result.icon} alt={props.result.condition} />
          <span>Condition: {props.result.condition}</span>
        </div>
      )}
    </>
  );
};

export default Results;
