type FormPops = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Form = (props: FormPops) => {
  // const { setCity, getWeather } = props;

  return (
    <form onSubmit={props.getWeather}>
      <input
        type="text"
        placeholder="都市名をローマ字で入力してください"
        onChange={(e) => props.setCity(e.target.value)}
      />
      <button type="submit">天気を取得</button>
    </form>
  );
};

export default Form;
