"use client";

import { useState, useRef, useEffect } from "react";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { searchMovies, fetchPopularMovies, Movie } from "../lib/tmdb";
import Image from "next/image";

function SkeletonCard() {
  return (
    <li className="flex items-center gap-4 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-xl p-4 shadow animate-pulse">
      <div className="w-16 h-24 bg-gray-200 dark:bg-gray-700 rounded" />
      <div className="flex-1 space-y-2">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-2/3" />
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3" />
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4" />
      </div>
    </li>
  );
}

export default function MovieList() {
  const [query, setQuery] = useState("");
  // Search query
  const {
    data: searchResults,
    isLoading: isSearchLoading,
    isError: isSearchError,
    error: searchError,
  } = useQuery({
    queryKey: ["search", query],
    queryFn: () => searchMovies(query),
    enabled: !!query,
  });

  // Infinite scroll for popular movies
  const {
    data: popularData,
    error: popularError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status: popularStatus,
  } = useInfiniteQuery({
    queryKey: ["popular-movies"],
    queryFn: async ({ pageParam = 1 }) => fetchPopularMovies(pageParam),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length > 0 ? allPages.length + 1 : undefined,
    initialPageParam: 1,
    enabled: !query,
  });

  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!loaderRef.current || !hasNextPage || !!query) return;
    const observer = new window.IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    }, { threshold: 1 });
    observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage, query]);

  const popularMovies: Movie[] = popularData?.pages.flat() ?? [];

  return (
    <>
      <header className="w-full flex flex-col items-center gap-4 p-8 pb-0">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white drop-shadow mb-2">TMDB Movies</h1>
        <input
          type="text"
          placeholder="Search for movies..."
          className="w-full max-w-md px-5 py-3 rounded-full border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 shadow focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg transition-colors"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </header>
      {query ? (
        <section className="flex-1 flex flex-col items-center justify-center p-8 pt-0 w-full">
          {isSearchLoading && (
            <ul className="w-full flex flex-col gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </ul>
          )}
          {isSearchError && <div className="text-red-500 text-lg">{(searchError as Error).message}</div>}
          {searchResults && (
            <ul className="w-full flex flex-col gap-4">
              {searchResults.length === 0 ? (
                <li className="text-gray-400 dark:text-gray-500 text-xl">No results found.</li>
              ) : (
                searchResults.map((movie: Movie) => (
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
                ))
              )}
            </ul>
          )}
        </section>
      ) : (
        <section className="flex-1 flex flex-col items-center justify-center p-8 pt-0 w-full">
          {popularStatus === "error" && (
            <div className="text-red-500 text-lg">{(popularError as Error).message}</div>
          )}
          <ul className="w-full flex flex-col gap-4">
            {popularMovies.map((movie) => (
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
            {((!popularData && popularStatus === "pending") || isFetchingNextPage) &&
              Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
          </ul>
          <div ref={loaderRef} className="h-12 flex items-center justify-center w-full">
            {isFetchingNextPage && <span className="text-gray-400 dark:text-gray-500">Loading more...</span>}
            {!hasNextPage && <span className="text-gray-400 dark:text-gray-500">No more movies</span>}
          </div>
        </section>
      )}
    </>
  );
} 