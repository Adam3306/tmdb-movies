// MovieDetailsPage will use the movie ID from the URL params in the future
export default function MovieDetailsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      <main className="w-full max-w-3xl mx-auto p-6">
        <div className="relative rounded-3xl shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200 dark:border-gray-800 flex flex-col md:flex-row gap-8 overflow-hidden transition-colors duration-500">
          {/* Poster */}
          <div className="flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-blue-200 to-purple-200 dark:from-gray-800 dark:to-gray-700 w-full md:w-64 h-96 md:h-auto">
            <div className="w-40 h-60 rounded-xl bg-gray-300 dark:bg-gray-700 flex items-center justify-center shadow-inner">
              <span className="text-gray-400 dark:text-gray-500 text-lg">Poster</span>
            </div>
          </div>
          {/* Info */}
          <div className="flex-1 flex flex-col justify-between p-6 gap-4">
            <div>
              <h1 className="text-4xl font-extrabold mb-2 text-gray-900 dark:text-white drop-shadow">Movie Title</h1>
              <div className="flex flex-wrap gap-2 items-center mb-2">
                <span className="text-sm px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 font-semibold">Release: YYYY-MM-DD</span>
                <span className="text-sm px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-200 font-semibold">Genres: Genre1, Genre2</span>
                <span className="text-sm px-3 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-200 font-semibold flex items-center gap-1">⭐ 0.0</span>
                <span className="text-sm px-3 py-1 rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 font-semibold">0h 0m</span>
                <span className="text-sm px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-semibold">English</span>
              </div>
            </div>
            <div className="bg-white/70 dark:bg-gray-800/70 rounded-xl p-4 shadow-inner mt-4">
              <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">Overview</h2>
              <p className="text-gray-700 dark:text-gray-300">Movie overview will appear here.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 