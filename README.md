# Joke Fetcher App

This is a simple app that fetches jokes from two different APIs and allows users to rate the jokes. Created using [Vite](https://vitejs.dev/).

## Usage

1. Clone the repository

```bash
git clone https://github.com/gsvaliente/react-sprint-5.git
```

2. Install dependencies

```bash
pnpm install
# or
npm install
# or
yarn install
```

3. Start the application:

```bash
pnpm run dev
# or
npm run dev
# or
yarn run dev
```

4. Open your browser and navigate to `http://localhost:<port>`

## Description

This application fetches from two different APIs: [JokeAPI](https://jokeapi.dev/) and [Chuck Norris API](https://api.chucknorris.io/). Users will randomly get different jokes and have the ability to rate them if they want. The application keeps track of when each joke has been shown and the rating the user gives it. In addition, it also fetches the current weather in Barcelona using [OpenWeather](https://openweathermap.org/api).

## Code Structure

The application consists of the following files:

```
├── README.md
├── index.html
├── src
│ ├── main.ts
│ ├── style.css
│ └── weather.ts
└── tsconfig.json
```

The **src** directory contains all the main TS files

## Features

- Fetch jokes randomly from two different APIs
- Display jokes on screen
- Rakes jokes using buttons with emojis
- Keep track of jokes
- Fetches a WeatherAPI to get the current weather (Barcelona)

## Dependencies

```
├── dependencies
│   ├── typescript -> .pnpm/typescript@5.4.5/node_modules/typescript
│   └── vite -> .pnpm/vite@5.2.10/node_modules/vite
```
