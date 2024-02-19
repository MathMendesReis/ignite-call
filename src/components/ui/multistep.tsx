export interface MultiStepProps {
  size: number;
  currentStep?: number;
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <div className="w-full my-2">
      <label className="text-gray-100">
        Passo {currentStep} de {size}
      </label>
      <div className="flex gap-3 my-4">
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return (
            <div
              key={step}
              className={`${currentStep >= step ? "bg-gray-100" : "bg-gray-600"}  w-full h-1`}
            />
          );
        })}
      </div>
    </div>
  );
}

MultiStep.displayName = "MultiStep";
