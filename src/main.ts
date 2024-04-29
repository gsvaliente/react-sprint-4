import './style.css';

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
    if (!url) new Error('no url provided');
    const res = await fetch(url, HEADER);
    if (res.ok) {
      const { joke } = await res.json();
      console.log(joke);
      currentJoke = { joke, score: 0, date: new Date().toISOString() };
      return joke;
    } else {
      new Error('No joke found');
    }
  } catch (err) {
    console.error(err);
  }
}

async function printToScreen(element: HTMLElement, url: string) {
  const joke = await fetchData(url);
  if (joke) {
    element.innerHTML = joke;
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
