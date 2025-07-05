export default function CardContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white/80 dark:bg-gray-900/80 rounded-3xl shadow-xl p-10 flex flex-col items-center gap-6 border border-gray-200 dark:border-gray-800">
      {children}
    </div>
  );
}
