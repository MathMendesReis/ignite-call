interface ArrowRightProps {
  className?: string;
}
export function ArrowRight({
  className = "w-4 h-4 text-green-500",
}: ArrowRightProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 17 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="stroke-current stroke-2 fill-none"
        d="M3 8H14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="stroke-current stroke-2 fill-none"
        d="M9.5 3.5L14 8L9.5 12.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
