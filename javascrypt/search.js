const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTNkYjc2OGQ3OGEzN2JiZGU5ZjhkNDI3YWZmMTg1YiIsInN1YiI6IjY1NjRkMzE0YTM1YzhlMDBhYjhjYzY1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H2ugfOI5D_D6eVtuTtQrHb91n6SoFYTHtyhrRcRwhc8'
  }
};

// url para concatenar a las imagenes 
const urlImage = "https://image.tmdb.org/t/p/original";

let searchMovie = localStorage.getItem("searchMovie");
let searchTitle = document.getElementById("searchTitle");
let url = `https://api.themoviedb.org/3/search/movie?query=${searchMovie}&include_adult=false&language=en-US&page=1`;

searchTitle.textContent = `Resultados de: "${searchMovie}"`;

console.log(url)

fetch(url, options)
  .then(response => response.json())
  .then(response => {

    //guarda el array de peliculas en una variable
    const peliculas = response.results;

    console.log(peliculas)

    //recorre el bucle foreach para crear las cards
    peliculas.forEach(pelicula => {

      //crea la card y un link

      let card = document.createElement("div");
      card.classList.add("card");

      cardsContainer.appendChild(card);

      let linkCard = document.createElement("a");
      linkCard.href = "#";

      card.appendChild(linkCard);


      //agrega las imagenes

      let imgUrl = urlImage + pelicula.backdrop_path;

      let img1 = document.createElement("div");
      img1.classList.add("img1");
      img1.style.backgroundImage = "url(" + imgUrl + ")";

      let img2 = document.createElement("div");
      img2.classList.add("img2");
      img2.style.backgroundImage = "url(" + imgUrl + ")";

      linkCard.appendChild(img1);
      linkCard.appendChild(img2);


      //agrega el contenido e iconos

      let name = document.createElement("div");
      name.classList.add("title");

      name.textContent = pelicula.title;

      let text = document.createElement("div");
      text.classList.add("text");

      text.textContent = pelicula.overview;

      let category = document.createElement("div");
      category.classList.add("catagory");

      category.textContent = "Pelicula ";

      let iconMovie = document.createElement("i");
      iconMovie.classList.add("fas");
      iconMovie.classList.add("fa-film");

      let views = document.createElement("div");
      views.classList.add("views");

      views.textContent = pelicula.popularity;

      let iconViews = document.createElement("i");
      iconViews.classList.add("far");
      iconViews.classList.add("fa-eye");

      linkCard.appendChild(name);
      linkCard.appendChild(text);
      linkCard.appendChild(category);
      category.appendChild(iconMovie);
      linkCard.appendChild(views);
      views.appendChild(iconViews);


    });

    let footer = document.getElementById("footer");

    if(peliculas.length < 4){
      footer.style.position = "absolute";
      footer.style.bottom = "0";
    }

  })

// funcion buscar 

const search = () => {

  let searchMovie = document.getElementById("imputText").value;
  localStorage.setItem("searchMovie", searchMovie);
  location.href = "search.html"
}


