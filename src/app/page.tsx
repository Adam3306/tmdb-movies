import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex flex-col items-center">
      <header className="w-full max-w-2xl mb-8">
        <h1 className="text-3xl font-bold mb-2 text-center">TMDB Movies</h1>
        <div className="w-full flex justify-center">
          {/* Search Bar Placeholder */}
          <input
            type="text"
            placeholder="Search for movies..."
            className="w-full max-w-md px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            disabled
          />
        </div>
      </header>
      <main className="w-full max-w-2xl flex-1">
        {/* Movie List Placeholder */}
        <div className="bg-white rounded shadow p-6 flex flex-col gap-4 items-center">
          <span className="text-gray-400">Popular movies will appear here.</span>
        </div>
      </main>
    </div>
  );
}
