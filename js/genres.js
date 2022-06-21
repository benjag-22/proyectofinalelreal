fetch("https://api.allorigins.win/raw?url=https://api.deezer.com/genre")
  .then((response) => response.json())
  .then((result) => {
    let section = document.querySelector(".genre");
    result.data.forEach((genre) => {
      if(genre.id!=0){
        let div = `<div><a href="detail-genres.html?id=${genre.id}">${genre.name}</a></div>`;
        section.innerHTML= section.innerHTML  + div;
      }
    });
  });
