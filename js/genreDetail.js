let id = window.location.search.replace('?id=','');
fetch("https://api.allorigins.win/raw?url=https://api.deezer.com/genre/"+id)
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    let genre = document.querySelector('.comogenre');
    genre.innerHTML = `<a href="detail-track.html">${result.name}</a>`;
   
  });

  fetch("https://api.allorigins.win/raw?url=https://api.deezer.com/chart/"+id)
  .then((response) => response.json())
  .then((result) => {
        console.log(result)
        let artists = document.querySelector('.artists');
        result.artists.data.forEach(artist => {
        artists.innerHTML += `<div class="artistdiv"><a href="./detail-artist.html?id=${artist.id}" > <img src="${artist.picture_small}" alt=""> ${artist.name} </a></div>`;
    });
    
   
  });

