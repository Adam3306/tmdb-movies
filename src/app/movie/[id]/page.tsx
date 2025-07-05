"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

import { fetchMovieDetails } from "@/lib/tmdb";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import MoviePoster from "../../components/MoviePoster";
import MovieInfo from "../../components/MovieInfo";

export default function MovieDetailsPage() {
  const params = useParams();
  const id = params?.id as string;
  const {
    data: movie,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => fetchMovieDetails(id),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
        <main className="w-full max-w-3xl mx-auto p-6">
          <Loading />
        </main>
      </div>
    );
  }
  if (isError || !movie) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
        <main className="w-full max-w-3xl mx-auto p-6">
          <ErrorMessage
            message={(error as Error)?.message || "Movie not found."}
          />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      <main className="w-full max-w-3xl mx-auto p-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-300 hover:underline mb-4"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
          <span className="font-medium">Back to Home</span>
        </Link>
        <div className="relative rounded-3xl shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200 dark:border-gray-800 flex flex-col md:flex-row gap-8 overflow-hidden transition-colors duration-500">
          <MoviePoster posterPath={movie.poster_path} title={movie.title} />
          <MovieInfo movie={movie} />
        </div>
      </main>
    </div>
  );
}
