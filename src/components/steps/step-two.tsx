import { Label } from "../ui/label";
import { Button, TextButton } from "../ui/button";
import { ArrowRight } from "../icons/ArrowRight";
import Link from "next/link";

export function StepTwo() {
    return (
        <>
            <div className="flex items-center justify-between w-full p-4 my-6 border-2 border-gray-600 rounded-md">
                <Label content="Google Agenda" className="w-full" />
                <Button
                    className="bg-transparent w-40 border-4 border-[#00875F] "
                >
                    <TextButton content="Conectar" className="text-[#00875F] font-extrabold" />
                    <ArrowRight className="text-[#00875F] w-4 h-4" />
                </Button>
            </div>
            <Link href={{
                pathname: '/registration',
                query: { step: '3' }
            }}>
                <Button
                    className="bg-gray-200 w-full"
                >
                    <TextButton content="Próximo passo" className="text-black flex items-center justify-center" />
                    <ArrowRight className="text-black w-4 h-4" />
                </Button>
            </Link>
        </>
    )
}