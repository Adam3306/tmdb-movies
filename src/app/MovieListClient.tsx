"use client";

import { useEffect, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPopularMovies, Movie } from "../lib/tmdb";
import Image from "next/image";

export default function MovieListClient() {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["popular-movies"],
    queryFn: async ({ pageParam = 1 }) => fetchPopularMovies(pageParam),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length > 0 ? allPages.length + 1 : undefined,
    initialPageParam: 1,
  });

  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!loaderRef.current || !hasNextPage) return;
    const observer = new window.IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    }, { threshold: 1 });
    observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  const movies: Movie[] = data?.pages.flat() ?? [];

  return (
    <section className="flex-1 flex flex-col items-center justify-center p-8 pt-0 w-full">
      {status === "error" && (
        <div className="text-red-500 text-lg">{(error as Error).message}</div>
      )}
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
      <div ref={loaderRef} className="h-12 flex items-center justify-center w-full">
        {isFetchingNextPage && <span className="text-gray-400 dark:text-gray-500">Loading more...</span>}
        {!hasNextPage && <span className="text-gray-400 dark:text-gray-500">No more movies</span>}
      </div>
    </section>
  );
} 