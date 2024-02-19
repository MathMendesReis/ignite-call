'use client'
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useReactHookForm } from "@/forms/useReactHookForm";
import { Button, TextButton } from "../ui/button";
import { ArrowRight } from "../icons/ArrowRight";
import useFormWithStep from "./useFormWithStepJS";

export function StepOne() {
    const { FormContext: { register } } = useReactHookForm()
    const { step } = useFormWithStep()


    return (
        <>
            <div>
                <Label content="Nome de usuário" id="name" className="text-gray-100 my-3" />
                <Input
                    type="text"
                    id="name"
                    placeholder="Joseph"
                    className="h-12"
                    {...register("name")}
                />
            </div>
            <div>
                <Label content="Nome completo" id="fullname" className="text-gray-100 my-3" />
                <Input type="text"
                    {...register("fullname")}
                    id="fullname" placeholder="Joseph Oliveira" className="h-12" />
            </div>
            <Button
                type="submit"
                className={`${step !== '2' ? 'bg-[#00875F]' : 'bg-gray-200'}  w-full `}
            >
                <TextButton content="Próximo passo" className={`${step !== '2' ? 'text-gray-100' : 'text-black'}`} />
                <ArrowRight className={`${step !== '2' ? 'text-gray-100' : 'text-black '} w-4 h-4`} />
            </Button>
        </>

    )
}