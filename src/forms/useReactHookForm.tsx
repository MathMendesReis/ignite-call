"use client";
import { useForm, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";

const schema = z.object({
  name: z.string().min(1, { message: "Required" }).max(255),
  fullname: z.string().min(1, { message: "Required" }).max(255),
});

export type Schema = z.infer<typeof schema>;

export function useReactHookForm() {
  const router = useRouter();
  const methods = useForm<Schema>({
    resolver: zodResolver(schema),
  });
  const FormContext = useFormContext<Schema>();

  async function onSubmit(data: Schema) {
    const jsonData = JSON.stringify(data);
    const response = await fetch("http://localhost:3000/api/users/register", {
      method: "POST",
      body: jsonData,
    });
    if (response) {
      methods.reset();
      router.push("/registration?step=2");
    }
  }

  return { methods, onSubmit, FormContext };
}
