import './style.css';
import { paintWeather } from './weather';

paintWeather();
// constants
const URL = 'https://v2.jokeapi.dev/joke/Any?type=single';
const OTHER_URL = 'https://api.chucknorris.io/jokes/random';
const HEADER = { headers: { Accept: 'application/json' } };

// selectors
const jokeDiv: HTMLElement = document.getElementById('joke')!;
const nextBtn: HTMLElement = document.getElementById('btn-next')!;
const oneBtn: HTMLElement = document.getElementById('one-btn')!;
const twoBtn: HTMLElement = document.getElementById('two-btn')!;
const threeBtn: HTMLElement = document.getElementById('three-btn')!;

// type
type JokeData = {
  joke: string;
  score: number;
  date: string;
};

let reportJokes: JokeData[] | [] = [];
let currentJoke: JokeData;

async function fetchData(url: string): Promise<any> {
  try {
    if (!url) throw new Error('no url provided');

    const res = await fetch(url, HEADER);

    if (!res) throw new Error('No response was found');
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return 'Problem fetching joke';
  }
}

function createJoke(joke: string) {
  return (currentJoke = { joke, score: 0, date: new Date().toISOString() });
}

function changeScore(score: number) {
  currentJoke = { ...currentJoke, score };
}

async function printToScreen(element: HTMLElement) {
  const randomNum = Math.round(Math.random()) + 1;

  let tempJoke: string;
  if (randomNum === 1) {
    const res = await fetchData(OTHER_URL);
    tempJoke = res.value;
  } else {
    const res = await fetchData(URL);
    tempJoke = res.joke;
  }
  createJoke(tempJoke);
  if (tempJoke) {
    element.innerHTML = tempJoke;
  } else {
    element.innerHTML = 'Sorry! No joke was found';
  }
}

printToScreen(jokeDiv);

nextBtn.addEventListener('click', () => {
  printToScreen(jokeDiv);
  reportJokes = [...reportJokes, currentJoke];
  console.log(reportJokes);
});

oneBtn.addEventListener('click', () => {
  changeScore(1);
});
twoBtn.addEventListener('click', () => {
  changeScore(2);
});
threeBtn.addEventListener('click', () => {
  changeScore(3);
});
