import { Button, Icon, TextButton } from "@/components/ui/button";
import { CardPage } from "@/components/ui/card-page";
import { Text } from "@/components/ui/text";
import Image from "next/image";

export default function Home() {
  return (
    <CardPage>
      <section className=" w-full min-h-screen flex items-center justify-center">
        <article className="my-auto w-[480px]">
          <Text content="Agendamento descomplicado" className="text-6xl font-extrabold" />
          <Text
            content="Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre."
            className="text-gray-100" />
          <Button
            title="criar conta com o google"
            className="bg-[#DB4437] opacity-90 mt-3">
            <Icon src={'./GoogleLogo.svg'} alt="Logo do Google" />
            <TextButton content="Criar conta com Google" />
          </Button>
        </article>
        <figure className="ml-auto">
          <Image src={'./image1.svg'} alt="" width={627} height={442} className="absolute right-0 top-[30%]" />
        </figure>
      </section>
    </CardPage>
  )
}