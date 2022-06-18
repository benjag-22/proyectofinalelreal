fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre')
  .then(response => response.json())
  .then(data => console.log(data));
