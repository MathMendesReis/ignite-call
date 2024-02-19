import { CardPage } from "@/components/ui/card-page";
import { Text } from "@/components/ui/text";
import Image from "next/image";
import { Flex } from "@/components/ui/flex";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <CardPage>
      <section className=" w-full min-h-screen flex items-center justify-center">
        <Flex
          className="min-[480px]:w-[480px] max-[1110px]:place-content-center"
        >
          <Text content="Agendamento descomplicado"
            className="min-[480px]:text-6xl text-3xl font-extrabold max-[1110px]:text-center animate-title" />
          <Text
            content="Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre."
            className="text-gray-100 min-[1110px]:text-start animate-fade-in my-4" />
          <div className="animate-fade-in ">
            <Link href={{
              pathname: '/registration',
              query: { step: "1" }
            }} className="" >
              <Button className="bg-[#DB4437] min-w-80 my-2">
                <Text content="Login" />
              </Button>
            </Link>
          </div>
        </Flex>
        <figure className="ml-auto min-[1111px]:block hidden">
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