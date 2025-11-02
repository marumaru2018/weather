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

// const Results = (props: WeatherDataStateType) => {
//   const { city, country, temperature, condition, icon } = props.result;
const Results = ({ result }: WeatherDataStateType) => {
  const { city, country, temperature, condition, icon } = result;

  return (
    <>
      {city && <h2>お天気情報</h2>}
      {city && <p>City: {city}</p>}
      {country && <p>Country: {country}</p>}
      {temperature && <p>Temperature: {temperature}</p>}
      {condition && (
        <div className="results-condition">
          <img src={icon} alt={condition} />
          <span>Condition: {condition}</span>
        </div>
      )}
    </>
  );
};

export default Results;
