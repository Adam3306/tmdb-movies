export default function ErrorMessage({ message }: { message: string }) {
  return <div className="text-red-500 text-lg py-8 text-center">{message}</div>;
}
