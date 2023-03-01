import { ITimeBoxProps as Props } from "../../lib/types/props";

export default function TimeBox(props: Props) {
    return (
        <div
            className={`bg-account-input py-5 pl-4 flex flex-col rounded-lg ${props.style} `}
        >
            <span className="text-[#818181]">{props.average}</span>
            <span className="text-[#818181] text-4xl">{props.time}</span>
        </div>
    );
}
