"use client";

import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
          <div className="bg-white/80 dark:bg-gray-900/80 rounded-3xl shadow-xl p-10 flex flex-col items-center gap-6 border border-gray-200 dark:border-gray-800">
            <h1 className="text-4xl font-extrabold text-red-500 dark:text-red-300 drop-shadow mb-2">
              Something went wrong
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">
              {error.message || "An unexpected error occurred."}
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => reset()}
                className="px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
              >
                Retry
              </button>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-300 hover:underline font-medium"
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
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
