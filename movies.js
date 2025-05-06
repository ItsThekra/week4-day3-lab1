
const movies = [
    {
      title: "The Matrix",
      director: "Wachowski Brothers",
      year: 1999,
      rating: 8.7,
    },
    {
      title: "Inception",
      director: "Christopher Nolan",
      year: 2010,
      rating: 8.8,
    },
    {
      title: "Interstellar",
      director: "Christopher Nolan",
      year: 2014,
      rating: 8.6,
    },
    {
      title: "The Godfather",
      director: "Francis Ford Coppola",
      year: 1972,
      rating: 9.2,
    },
    {
      title: "The Dark Knight",
      director: "Christopher Nolan",
      year: 2008,
      rating: 9.0,
    },
    { title: "Fight Club",
     director: "David Fincher"
     , year: 1999, 
     rating: 8.8 
    }
  ];


// 1. Get the title of the first movie released after 2000.
let firstMovieReleased = movies.find(movie => movie.year > 2000)
console.log("the first movie released after 2000 is",firstMovieReleased.title);
// 2. Get the title of the first movie with a rating higher than 9.
let firstMovieWithRating  = movies.find(movie => movie.rating > 9)
console.log("the first movie with a rating higher than 9 is",firstMovieWithRating.title);
// 3. Get only movies directed by Christopher Nolan.
let christopherNolan = movies.filter(movie => movie.director == "Christopher Nolan").map(movie => movie.title)
console.log("the movies directed by Christopher Nolan are : ", christopherNolan)
// 4. Get movies released before 2010.
let releasedBefore2010 = movies.filter(movie => movie.year < 2010)
console.log("The movies released before 2010 : ", releasedBefore2010);
// 5. Get an array containing only movie titles.
let movieTitles = movies.map(movie => movie.title)
console.log(" All movie titles  : ", movieTitles);
// 6. Get the average rating of all movies.
let averageMovies = movies.reduce((total, movie) => total + movie.rating , 0) / movies.length
console.log(averageMovies);
// 7. Sort the movies by year (oldest to newest).
let moviesByYear = movies.sort( (a, b) => a.year - b.year)
console.log(moviesByYear);
// 8. Sort the movies by rating (highest to lowest).
let moviesByRating = movies.sort( (a, b) => b.rating - a.rating)
console.log(moviesByRating);
// 9. Are all the movies rated higher than 8?
let allRatedHigherThan8 = movies.every(movie => movie.rating > 8 )
console.log("Are all the movies rated higher than 8?", allRatedHigherThan8);
// 10. Is there at least one movie released in 1999?
let oneMovieReleased1999 = movies.some(movie => movie.year == 1999 )
console.log("Are all the movies rated higher than 8?", oneMovieReleased1999);
// 11. Are all the movies directed by the same director?
let sameDirector = movies.every(movie => movie.director == "Christopher Nolan")
console.log("Are all the movies directed by the same director?", sameDirector);
// 12. Is there at least one movie rated lower than 8.5?
let  movieRatedLowerThan85 = movies.some(movie => movie.rating < 8.5 )
console.log("Is there at least one movie rated lower than 8.5?", movieRatedLowerThan85);




