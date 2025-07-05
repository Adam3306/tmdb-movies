import MovieListClient from "./MovieListClient";

export default function Home() {
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
          <MovieListClient />
        </div>
      </main>
    </div>
  );
}
