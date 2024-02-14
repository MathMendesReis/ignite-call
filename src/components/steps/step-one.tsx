import Link from "next/link";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

export function StepOne() {
    return (
        <>
            <div>
                <Label content="Nome de usuário" id="name" className="text-gray-100 my-3" />
                <Input type="text" name="name" id="name" placeholder="Joseph" />
            </div>
            <div>
                <Label content="Nome completo" id="name" className="text-gray-100 my-3" />
                <Input type="text" name="name" id="name" placeholder="Joseph Oliveira" />
            </div>

        </>
    )
}