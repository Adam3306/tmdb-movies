"use client";

import type { MovieDetails } from "@/lib/tmdb";

export default function MovieInfo({ movie }: { movie: MovieDetails }) {
  return (
    <div className="flex-1 flex flex-col justify-between p-6 gap-4">
      <div>
        <h1 className="text-4xl font-extrabold mb-2 text-gray-900 dark:text-white drop-shadow">{movie.title}</h1>
        <div className="flex flex-wrap gap-2 items-center mb-2">
          <span className="text-sm px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 font-semibold">Release: {movie.release_date}</span>
          <span className="text-sm px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-200 font-semibold">Genres: {movie.genres.map((g: { name: string }) => g.name).join(", ")}</span>
          <span className="text-sm px-3 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-200 font-semibold flex items-center gap-1">⭐ {movie.vote_average.toFixed(1)}</span>
          <span className="text-sm px-3 py-1 rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 font-semibold">{Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m</span>
          <span className="text-sm px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-semibold">{movie.original_language.toUpperCase()}</span>
        </div>
      </div>
      <div className="bg-white/70 dark:bg-gray-800/70 rounded-xl p-4 shadow-inner mt-4">
        <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">Overview</h2>
        <p className="text-gray-700 dark:text-gray-300">{movie.overview}</p>
      </div>
    </div>
  );
} 