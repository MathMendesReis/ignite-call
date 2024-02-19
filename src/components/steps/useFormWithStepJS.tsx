"use client";
import { useSearchParams } from "next/navigation";

export default function useFormWithStep() {
  const searchParams = useSearchParams();
  type stepUtlType = "1" | "2" | "3" | "4";
  const step = searchParams.get("step") as stepUtlType;
  const currentStep = parseInt(step);
  const query = (currentStep + 1).toString();
  const someCondition = step === "4";
  return { currentStep, step, query, someCondition };
}
