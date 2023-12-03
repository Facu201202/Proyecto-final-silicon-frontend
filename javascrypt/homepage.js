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

fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
  .then(response => response.json())
  .then(response => {

    //guarda el array de peliculas en una variable
    const peliculas = response.results;

    console.log(peliculas);

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

      let imgUrl =  urlImage + pelicula.backdrop_path;

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
  })


// traemos el contenedor carrusel 

 
fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
    .then(response => response.json())
    .then(response => {
       
      //guardamos los datos en una variable

      const trending = response.results;

      console.log(trending)

      for (i = 0; i < 5; i++){

        console.log(trending[i].backdrop_path)

        let carouselImg = document.getElementById("carouselImg" + i);
        let imgUrl =  urlImage + trending[i].backdrop_path;
        carouselImg.src = imgUrl;

        let carouselName = document.getElementById("name" + i);
        carouselName.textContent = trending[i].title;

        

        console.log(carouselImg)
      }
    })





    