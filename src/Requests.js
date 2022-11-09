const API_KEY = 'df19f97a767f735c419f15768705c937';
const requests = {
  requestOriginals: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=2`,
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=10`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=3`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=horror&page=1&include_adult=true`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  requestComedy: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=2`,
  requestDocumentaries: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=3`,
  requestTrailer: (id) => {
    return `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
  },
};

export default requests;
