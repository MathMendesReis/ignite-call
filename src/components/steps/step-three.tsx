import { getDaysOfWeek } from "@/util/getDaysOfWeek";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Text } from "../ui/text";


export function StepThree() {
    const daysOfWeek = getDaysOfWeek()
    return (
        <>
            <div>
                <ul className="">
                    {daysOfWeek.map((dayWeek) => {
                        return (
                            <li className="w-[492px] h-16 flex items-center justify-between border-[0.3px] border-gray-200/35 px-5 py-8 my-3 rounded-lg">
                                <div className=" flex-1 flex place-items-center">
                                    <label id={dayWeek} className="flex place-items-center gap-2 cursor-pointer ">
                                        <input
                                            type="checkbox"
                                            id={dayWeek}
                                            value={dayWeek}
                                            className="w-[24px] h-[24px] checked:accent-[#00875F]" />
                                        <Text content={dayWeek} className="w-full text-start checked:text-[#00875F]" />
                                    </label>
                                </div>
                                <div className="flex items-center justify-center gap-2 mx-2">
                                    <Button className="bg-black">
                                        <Text content="9:00 hr" className="text-white" />
                                    </Button>
                                    <Button className="bg-black">
                                        <Text content="9:00 hr" className="text-white" />
                                    </Button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}