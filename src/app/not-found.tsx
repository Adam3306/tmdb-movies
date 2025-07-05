import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      <div className="bg-white/80 dark:bg-gray-900/80 rounded-3xl shadow-xl p-10 flex flex-col items-center gap-6 border border-gray-200 dark:border-gray-800">
        <h1 className="text-6xl font-extrabold text-blue-500 dark:text-blue-300 drop-shadow mb-2">
          404
        </h1>
        <p className="text-2xl text-gray-700 dark:text-gray-200 mb-4">
          Page Not Found
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-6">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
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
  );
}
