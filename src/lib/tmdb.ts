const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

export interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string | null;
  vote_average: number;
}

export interface MovieDetails extends Movie {
  overview: string;
  genres: { id: number; name: string }[];
  runtime: number;
  original_language: string;
}

export async function fetchPopularMovies(page: number = 1): Promise<Movie[]> {
  const url = `${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=${page}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch popular movies');
  }
  const data = await res.json();
  return data.results as Movie[];
}

export async function searchMovies(query: string): Promise<Movie[]> {
  const url = `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=1&include_adult=false`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to search movies');
  }
  const data = await res.json();
  return data.results as Movie[];
}

export async function fetchMovieDetails(id: string): Promise<MovieDetails> {
  const url = `${TMDB_BASE_URL}/movie/${id}?api_key=${TMDB_API_KEY}&language=en-US`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch movie details');
  }
  return res.json() as Promise<MovieDetails>;
} 