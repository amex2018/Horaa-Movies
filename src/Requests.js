const API_KEY= 'a3f3f8063b8a368781391e20fc40b0bd';

const request = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
   fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
   fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
   fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
   fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
   fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
   fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
   fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

};

export default request

// https://api.themoviedb.org/3/trending/all/week?api_key=a3f3f8063b8a368781391e20fc40b0bd&language=en-US