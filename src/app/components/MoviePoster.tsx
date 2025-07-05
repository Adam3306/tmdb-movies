"use client";

import Image from "next/image";
import { useState } from "react";

export default function MoviePoster({ posterPath, title }: { posterPath: string | null; title: string }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  return (
    <div className="flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-blue-200 to-purple-200 dark:from-gray-800 dark:to-gray-700 w-full md:w-64 h-96 md:h-auto">
      {!imgLoaded && <div className="w-40 h-60 rounded-xl bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-400 animate-pulse">Loading...</div>}
      {posterPath ? (
        <Image
          src={`https://image.tmdb.org/t/p/w342${posterPath}`}
          alt={title}
          width={220}
          height={330}
          className={`rounded-xl shadow-lg transition-opacity duration-300 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
          priority
          placeholder="empty"
          onLoadingComplete={() => setImgLoaded(true)}
        />
      ) : (
        <div className="w-40 h-60 rounded-xl bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-400">No Image</div>
      )}
    </div>
  );
} 