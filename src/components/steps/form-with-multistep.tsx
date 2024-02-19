"use client";
import { StepOne } from "@/components/steps/step-one";
import { MultiStep } from "@/components/ui/multistep";
import useFormWithStep from "./useFormWithStepJS";
import { StepTwo } from "./step-two";
import { StepThree } from "./step-three";
import { StepFourth } from "./step-fourth";
import { useReactHookForm } from "@/forms/useReactHookForm";
import {
  headerStepFourth,
  headerStepOne,
  headerStepThree,
  headerStepTwo,
} from "./step-headers";
import { FormProvider } from "react-hook-form";

export default function FormWithStep() {
  const { currentStep, step } = useFormWithStep();
  const { methods, onSubmit } = useReactHookForm();
  return (
    <>
      {step === "1" && headerStepOne}
      {step === "2" && headerStepTwo}
      {step === "3" && headerStepThree}
      {step === "4" && headerStepFourth}
      <MultiStep size={4} currentStep={currentStep} />
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="bg-gray-800 p-6 rounded-md"
      >
        <FormProvider {...methods}>
          {step === "1" && <StepOne />}
          {step === "2" && <StepTwo />}
          {step === "3" && <StepThree />}
          {step === "4" && <StepFourth />}
        </FormProvider>
      </form>
    </>
  );
}
