import Logo from "../../public/static/addNotesLogo.svg";
import Image from "next/legacy/image";

export default function NoTrackedTimes() {
    return (
        <div className="flex flex-col place-items-center justify-center h-screen w-screen">
            <Image
                src={Logo}
                alt="NoTrackedTimes"
                height={350}
                width={350}
                priority
            />
            <span className="text-4xl pt-20 text-[#818181] font-bold ">
                Uh... There are no tracked times yet.
            </span>
            <span className="text-2xl text-[#818181] pt-3">
                Start tracking to see here amazing stuff happening.
            </span>
        </div>
    );
}
