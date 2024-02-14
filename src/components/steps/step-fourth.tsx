import Image from "next/image";
import { Text } from "../ui/text";
import { Button, TextButton } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "../icons/ArrowRight";

export function StepFourth() {
    return (
        <>
            <Text content="Foto de perfil" className="text-gray-100/40" />
            <div className="flex items-center justify-start gap-3 my-4">
                <Image src={`./Ellipse.svg`} alt="avatar" width={64} height={64} />
                <Button
                    className="bg-transparent min-w-40 h-9 border-4 border-[#00875F] "
                >
                    <TextButton content="Selecionar foto" className="text-[#00875F] font-extrabold" />

                </Button>
            </div>
            <Text content="Sobre você" className="text-gray-100/40" />
            <textarea className="w-full h-32 resize-none px-3 bg-black/50 outline-none rounded-md py-4 text-white my-4" />
            <Text
                className="text-gray-100/40 text-sm my-3"
                content="Fale um pouco sobre você. Isto será exibido em sua página pessoal." />

            <Link
                href={{
                    pathname: '/calendar',
                }}
                className="w-full"
            >
                <Button
                    className={`bg-[#00875F] w-full `}
                >
                    <TextButton content="Próximo passo" className={`text-gray-100`} />
                    <ArrowRight className={`text-gray-100  w-4 h-4`} />
                </Button>
            </Link>

        </>
    )
}