import GradientBackground from "./components/GradientBackground";
import CardContainer from "./components/CardContainer";
import BackButton from "./components/BackButton";

export default function NotFound() {
  return (
    <GradientBackground>
      <CardContainer>
        <h1 className="text-6xl font-extrabold text-blue-500 dark:text-blue-300 drop-shadow mb-2">
          404
        </h1>
        <p className="text-2xl text-gray-700 dark:text-gray-200 mb-4">
          Page Not Found
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-6">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <BackButton />
      </CardContainer>
    </GradientBackground>
  );
}
