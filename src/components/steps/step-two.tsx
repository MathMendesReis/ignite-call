import { Label } from "../ui/label";
import { Button, Icon, TextButton } from "../ui/button";
import { ArrowRight } from "../icons/ArrowRight";

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
        </>
    )
}