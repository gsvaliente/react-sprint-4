export async function getChuckJoke(): Promise<string | undefined> {
  try {
    const res = await fetch('https://api.chucknorris.io/jokes/random');
    const { value } = await res.json();
    return value;
  } catch (err) {
    console.error(err);
  }
}
