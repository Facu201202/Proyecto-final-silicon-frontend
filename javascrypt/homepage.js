//solicitamos los permisos a la API
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTNkYjc2OGQ3OGEzN2JiZGU5ZjhkNDI3YWZmMTg1YiIsInN1YiI6IjY1NjRkMzE0YTM1YzhlMDBhYjhjYzY1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H2ugfOI5D_D6eVtuTtQrHb91n6SoFYTHtyhrRcRwhc8'
  }
};

//traemos el contenedor principal de las tarjetas

let cardsContainer = document.getElementById("cardsContainer");

// url para concatenar a las imagenes 
const urlImage = "https://image.tmdb.org/t/p/original";

//traemos los datos de la API con el fetch

let nameMovie;

let urlBuscar = `https://api.themoviedb.org/3/search/movie?query=${nameMovie}&include_adult=true&language=en-US&page=1`;

let url;

let myList = [];

let navList = localStorage.getItem("myList");
navList = JSON.parse(navList);
console.log(navList)


// bucle para tener mas de una pagina en pantalla
for (i = 1; i <= 10; i++) {
  let pagina = i;
  url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pagina}&sort_by=popularity.desc`;

  fetch(url, options)
    .then(response => response.json())
    .then(response => {

      //guarda el array de peliculas en una variable
      const peliculas = response.results;

      //recorre el bucle foreach para crear las cards
      peliculas.forEach(pelicula => {

        //crea la card y un link

        let card = document.createElement("div");
        card.classList.add("card");

        cardsContainer.appendChild(card);

        let linkCard = document.createElement("a");

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

        // funcion para hacer una lista de peliculas favoritas

        let addList = () => {

          if(navList != null){
            navList.push(pelicula);
            localStorage.setItem("myList", JSON.stringify(navList));
          }else{
            myList.push(pelicula)
            console.log(myList)
            localStorage.setItem("myList", JSON.stringify(myList));
          }  
        };

        let botonList = document.createElement("div");
        botonList.classList.add("views");

        botonList.textContent = "Añadir +";

        botonList.addEventListener("click", addList);



        //==========================================================

        linkCard.appendChild(name);
        linkCard.appendChild(text);
        linkCard.appendChild(category);
        category.appendChild(iconMovie);
        linkCard.appendChild(botonList);

      });
    })

}






// traemos el contenedor carrusel 


fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
  .then(response => response.json())
  .then(response => {

    //guardamos los datos en una variable

    const trending = response.results;

    for (i = 3; i < 8; i++) {

      let carouselImg = document.getElementById("carouselImg" + (i - 3));
      let imgUrl = urlImage + trending[i].backdrop_path;
      carouselImg.src = imgUrl;

      let carouselName = document.getElementById("name" + (i - 3));
      carouselName.textContent = trending[i].title;

    }
  })

// funcion buscar 

const search = () => {

  let searchMovie = document.getElementById("imputText").value;
  localStorage.setItem("searchMovie", searchMovie);
  location.href = "search.html"
}


