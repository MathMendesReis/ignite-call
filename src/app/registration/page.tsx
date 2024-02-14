import FormWithStep from "@/components/steps/form-with-multistep";
import { Header } from "@/components/steps/header";
import { CardPage } from "@/components/ui/card-page";
import { Text } from "@/components/ui/text";

export default function Registration() {

    return (
        <CardPage>
            <div className="min-h-screen flex items-center justify-center  max-w-[1400px]">
                <section className="w-[540px] min-h-[443px] mt-24">
                    <FormWithStep />
                </section>
            </div>
        </CardPage>
    )
}


