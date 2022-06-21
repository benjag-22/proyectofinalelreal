let id = window.location.search.replace('?id=','');
fetch("https://api.allorigins.win/raw?url=https://api.deezer.com/artist/"+id)
  .then((response) => response.json())
  .then((artist) => {
        let artists = document.querySelector('.detail-artist');
       
        artists.innerHTML += `<a href="detail-track.html" class="sacardilineado">
        <div class="contenedorfoto"> <img src="${artist.picture_small}" alt=""></div>
         <h3>${artist.name}</h3>
          </h4>`;
        }
    );
    
   
