const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY || '555dd34b51d2f5b7f9fdb39e04986933';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

export interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string | null;
  vote_average: number;
}

export async function fetchPopularMovies(): Promise<Movie[]> {
  const url = `${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch popular movies');
  }
  const data = await res.json();
  return data.results as Movie[];
} 