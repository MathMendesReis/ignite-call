import { Button, TextButton } from "../ui/button";
import { ArrowRight } from "../icons/ArrowRight";

interface NavigationProps {
  query: string;
  step: string;
}
export function Navigation({ step }: NavigationProps) {
  return (
    <Button
      type="submit"
      className={`${step !== "2" ? "bg-[#00875F]" : "bg-gray-200"}  w-full `}
    >
      <TextButton
        content="Próximo passo"
        className={`${step !== "2" ? "text-gray-100" : "text-black"}`}
      />
      <ArrowRight
        className={`${step !== "2" ? "text-gray-100" : "text-black "} w-4 h-4`}
      />
    </Button>
  );
}
