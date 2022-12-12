import { API_KEY } from "../Constants/constants";

export const trending = `/trending/all/week?api_key=${API_KEY}&language=en-US`;
export const romance = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`