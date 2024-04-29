import './style.css';

// constants
const URL = 'https://v2.jokeapi.dev/joke/Any?type=single';
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

async function fetchData(url: string): Promise<string | undefined> {
  try {
    if (!url) throw new Error('no url provided');

    const res = await fetch(url, HEADER);

    if (!res.ok) throw new Error('No joke found');
    const { joke } = await res.json();
    createJoke(joke);
    return joke;
  } catch (err) {
    console.error(err);
    return undefined;
  }
}

function createJoke(joke: string) {
  return (currentJoke = { joke, score: 0, date: new Date().toISOString() });
}

async function printToScreen(element: HTMLElement, url: string) {
  const joke = await fetchData(url);
  if (joke) {
    console.log(joke);
    element.innerHTML = joke;
  } else {
    element.innerHTML = 'Sorry! No joke was found';
  }
}
printToScreen(jokeDiv, URL);

nextBtn.addEventListener('click', () => {
  printToScreen(jokeDiv, URL);
  reportJokes = [...reportJokes, currentJoke];
  console.log(reportJokes);
});

function changeScore(score: number) {
  currentJoke = { ...currentJoke, score };
}

oneBtn.addEventListener('click', () => {
  changeScore(1);
});
twoBtn.addEventListener('click', () => {
  changeScore(2);
});
threeBtn.addEventListener('click', () => {
  changeScore(3);
});
