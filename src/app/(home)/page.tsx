import { Button, Icon, TextButton } from "@/components/ui/button";
import { CardPage } from "@/components/ui/card-page";
import { Text } from "@/components/ui/text";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <CardPage>
      <section className=" w-full min-h-screen flex items-center justify-center">
        <article className=" my-auto  min-[480px]:w-[480px] w-full min-[1110px]:justify-start min-[1110px]:items-start flex items-center justify-center gap-2 flex-col text-center">
          <Text content="Agendamento descomplicado"
            className="min-[480px]:text-6xl text-3xl font-extrabold min-[1110px]:text-start animate-title" />
          <Text
            content="Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre."
            className="text-gray-100 min-[1110px]:text-start animate-fade-in" />
          <div className="animate-fade-in ">
            <Button
              title="criar conta"
              className="bg-[#DB4437] opacity-75 mt-3 animate-pulse hover:animate-none transition-all active:scale-95">
              <Link
                href={{
                  pathname: '/registration',
                  query: { step: '1' }
                }}
                className="flex items-center justify-center gap-3 w-full"
              >
                <Icon src={'./GoogleLogo.svg'} alt="Logo do Google" />
                <TextButton content="Criar conta" />
              </Link>
            </Button>
          </div>
        </article>
        <figure className="ml-auto  min-[1111px]:block hidden">
          <Image
            src={'./image1.svg'}
            alt="" width={627}
            height={442}
            className="animate-fade-left duration-500" />
        </figure>
      </section>
    </CardPage>
  )
}