"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { fetchPopularMovies, Movie } from "../lib/tmdb";
import Image from "next/image";

export default function MovieListClient() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const loadMovies = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    setError(null);
    try {
      const newMovies = await fetchPopularMovies(page);
      setMovies((prev) => [...prev, ...newMovies]);
      setHasMore(newMovies.length > 0);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  }, [page, loading, hasMore]);

  useEffect(() => {
    loadMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    if (!loaderRef.current || !hasMore) return;
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setPage((p) => p + 1);
        }
      },
      { threshold: 1 }
    );
    observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [loading, hasMore]);

  return (
    <section className="flex-1 flex flex-col items-center justify-center p-8 pt-0 w-full">
      {error && <div className="text-red-500 text-lg">{error}</div>}
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
        {loading && <span className="text-gray-400 dark:text-gray-500">Loading more...</span>}
        {!hasMore && <span className="text-gray-400 dark:text-gray-500">No more movies</span>}
      </div>
    </section>
  );
} 