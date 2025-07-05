import { fetchPopularMovies, Movie } from "../lib/tmdb";
import Image from "next/image";

export default async function Home() {
  let movies: Movie[] = [];
  let error: string | null = null;
  try {
    movies = await fetchPopularMovies();
  } catch (e) {
    error = (e as Error).message;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      <main className="w-full max-w-3xl mx-auto p-6">
        <div className="relative rounded-3xl shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200 dark:border-gray-800 flex flex-col gap-8 overflow-hidden transition-colors duration-500">
          {/* Header and Search Bar */}
          <header className="w-full flex flex-col items-center gap-4 p-8 pb-0">
            <h1 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white drop-shadow mb-2">TMDB Movies</h1>
            <input
              type="text"
              placeholder="Search for movies..."
              className="w-full max-w-md px-5 py-3 rounded-full border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 shadow focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg transition-colors"
              disabled
            />
          </header>
          {/* Movie List Placeholder */}
          <section className="flex-1 flex flex-col items-center justify-center p-8 pt-0 w-full">
            {error ? (
              <div className="text-red-500 text-lg">{error}</div>
            ) : movies.length === 0 ? (
              <div className="text-gray-400 dark:text-gray-500 text-2xl">Loading popular movies...</div>
            ) : (
              <ul className="w-full flex flex-col gap-4">
                {movies.map((movie) => (
                  <li key={movie.id} className="flex items-center gap-4 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-xl p-4 shadow hover:scale-[1.01] transition-transform">
                    {movie.poster_path ? (
                      <Image
                        src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                        alt={movie.title}
                        width={64}
                        height={96}
                        className="rounded shadow"
                      />
                    ) : (
                      <div className="w-16 h-24 bg-gray-300 dark:bg-gray-700 rounded flex items-center justify-center text-gray-400">No Image</div>
                    )}
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white">{movie.title}</h2>
                      <div className="text-gray-600 dark:text-gray-300 text-sm mb-1">{movie.release_date}</div>
                      <div className="text-yellow-500 font-semibold flex items-center gap-1">
                        <span>⭐</span>
                        <span>{movie.vote_average.toFixed(1)}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
