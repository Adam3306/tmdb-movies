import Link from "next/link";
import SVGArrowLeft from "./SVGArrowLeft";

export default function BackButton({
  href = "/",
  children = "Back to Home",
}: {
  href?: string;
  children?: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-300 hover:underline font-medium"
    >
      <SVGArrowLeft />
      <span>{children}</span>
    </Link>
  );
}
