export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mb-2" role="status" aria-label="Loading" />
      <span className="text-gray-400 dark:text-gray-500 text-lg">Loading...</span>
    </div>
  );
} 