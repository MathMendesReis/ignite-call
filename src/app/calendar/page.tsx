'use client'
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Text } from "@/components/ui/text"
import { formatDate } from "@/helpers/formatDate"
import Image from "next/image"
import React from "react"

export default function () {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    const dateFormat = date !== undefined ? formatDate(date) : ''

    return (
        <main className="flex flex-col items-center justify-center max-w-[1400px] min-h-screen mx-auto">
            <div className="flex flex-col items-center justify-center gap-3 my-5">
                <Image src={`./Ellipse.svg`} alt="" width={64} height={64} className="rounded-full" />
                <Text
                    element="h1"
                    content="Joseph Oliveira"
                    className="text-xl font-extrabold "
                />
                <Text content="CTO @DogeLabs"
                    className="text-sm text-gray-100/45"

                />
            </div>
            <div className="flex text-white mx-auto max-w-[600px] min-h-[438px] items-center justify-center gap-3 flex-wrap">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                    classNames={{
                        day_today: "rounded-full",
                        cell: "",
                        day_selected: "rounded-full bg-red-500"
                    }}
                />
                <section className="w-[280px] h-[305px] flex flex-col place-items-center gap-2">
                    <div className=" my-1 w-[232px]">
                        <Text content={dateFormat} />
                    </div>
                    <div className="flex flex-col gap-2 overflow-auto invisible-scrollbar">
                        <Button className="w-[232px] h-9 bg-gray-600">
                            <Text content="9:00h" className="text-gray-100 text-sm" />
                        </Button>
                    </div>
                </section>
            </div>
        </main>
    )
}