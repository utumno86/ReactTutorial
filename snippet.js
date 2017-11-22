// write a function to retrieve a blob of json
// make an ajax request! Use the 'fetch' function
// https://rallycoding.herokuapp.com/api/music_albums

async function fetchAlbums() {
  const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
  const json = await res.json();

  console.log(json);
}

fetchAlbums();
