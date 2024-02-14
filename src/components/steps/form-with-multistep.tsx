"use client"
import { StepOne } from "@/components/steps/step-one";
import { MultiStep } from "@/components/ui/multistep";
import useFormWithStep from "./useFormWithStepJS";
import Link from "next/link";
import { Button, Icon, TextButton } from "../ui/button";
import { StepTwo } from "./step-two";
import { ArrowRight } from "../icons/ArrowRight";
import { StepThree } from "./step-three";
import { StepFourth } from "./step-fourth";
import { Header } from "./header";

export default function FormWithStep() {
    const { currentStep, step, query } = useFormWithStep()

    const Navigation = (
        <Link
            href={{
                pathname: '/registration',
                query: { step: query }
            }}
            className="w-full"
        >
            <Button
                className={`${step !== '2' ? 'bg-[#00875F]' : 'bg-gray-200'}  w-full `}
            >
                <TextButton content="Próximo passo" className={`${step !== '2' ? 'text-gray-100' : 'text-black'}`} />
                <ArrowRight className={`${step !== '2' ? 'text-gray-100' : 'text-black '} w-4 h-4`} />
            </Button>
        </Link>
    )

    const headerStepOne = <Header
        title="Bem-vindo ao Ignite Call!"
        paragraph="Precisamos de algumas informações para criar seu perfil! Ah, você pode editar essas informações depois."
    />
    const headerStepTwo = <Header
        title="Conecte sua agenda!"
        paragraph="Conecte o seu calendário para verificar automaticamente as horas ocupadas e os novos eventos à medida em que são agendados."
    />
    const headerStepThree = <Header
        title="Quase lá!"
        paragraph="Defina o intervalo de horários que você está disponível em cada dia da semana."
    />
    const headerStepFourth = <Header
        title="Defina sua disponibilidade!"
        paragraph="Por último, uma breve descrição e uma foto de perfil."
    />

    return (
        <>
            {step === '1' && headerStepOne}
            {step === '2' && headerStepTwo}
            {step === '3' && headerStepThree}
            {step === '4' && headerStepFourth}
            <MultiStep size={4} currentStep={currentStep} />
            <div className="bg-gray-800 p-6 rounded-md">
                {step === '1' && <StepOne />}
                {step === '2' && <StepTwo />}
                {step === '3' && <StepThree />}
                {step === '4' && <StepFourth />}
                {currentStep + 1 < 5 && Navigation}
            </div>
        </>

    )
}