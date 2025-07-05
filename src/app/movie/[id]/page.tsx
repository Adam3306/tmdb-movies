import React from "react";

// MovieDetailsPage will use the movie ID from the URL params in the future
export default function MovieDetailsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex flex-col items-center">
      <main className="w-full max-w-2xl bg-white rounded shadow p-6 flex flex-col gap-6 items-center">
        <h1 className="text-3xl font-bold text-center mb-2">Movie Title</h1>
        <div className="w-full flex flex-col md:flex-row gap-6 items-center md:items-start">
          {/* Poster Placeholder */}
          <div className="w-48 h-72 bg-gray-200 rounded flex items-center justify-center">
            <span className="text-gray-400">Poster</span>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <div className="text-gray-600">Release Date: <span className="font-medium">YYYY-MM-DD</span></div>
            <div className="text-gray-600">Genres: <span className="font-medium">Genre1, Genre2</span></div>
            <div className="text-gray-600">Rating: <span className="font-medium">⭐ 0.0</span></div>
            <div className="text-gray-600">Runtime: <span className="font-medium">0h 0m</span></div>
            <div className="text-gray-600">Language: <span className="font-medium">English</span></div>
          </div>
        </div>
        <div className="w-full mt-4">
          <h2 className="text-xl font-semibold mb-2">Overview</h2>
          <p className="text-gray-700">Movie overview will appear here.</p>
        </div>
      </main>
    </div>
  );
} 