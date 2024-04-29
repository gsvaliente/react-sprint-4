const weatherDiv: HTMLElement = document.getElementById('weather-info')!;

//types
type WeatherObj = {
  name: string;
  main: MainObj;
  info: InfoObj;
};

type InfoObj = {
  id: number;
  main: string;
  description: string;
  icon: string;
};
type MainObj = {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
};

export async function fetchWeather(): Promise<WeatherObj> {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=barcelona&appid=41296a53eeeeae85ceab537b2aae439f&units=metric`
  );
  const data = await response.json();
  const {
    name,
    main,
    weather: [info],
  } = data;
  const weatherObj = { name, main, info };
  console.log(weatherObj);
  return weatherObj;
}

export async function paintWeather() {
  const weather = await fetchWeather();
  weatherDiv.innerHTML = `
    <p>${weather.name}</p>
    <p>${weather.main.temp.toFixed(1)}</p>
    <span>${weather.info.main}</span>
  `;
}
