"use client";

export default function SkeletonCard() {
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