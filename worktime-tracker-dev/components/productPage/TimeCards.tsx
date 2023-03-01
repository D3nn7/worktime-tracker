import Icon from "@mdi/react";
import { mdiCircle } from "@mdi/js";
import { ITimeCardProps as Props } from "../../lib/types/props";

export default function TimeCards(props: Props) {
    return (
        <div className="flex flex-row place-items-center bg-[#262626] rounded-md p-3">
            <div className="flex flex-col">
                <span className="text-lg">{props.description}</span>
                <span className="flex">
                    <div
                        style={{ backgroundColor: `${props.hexColor}` }}
                        className={`text-sm py-0.5 px-2 rounded-xl flex flex-row place-items-center space-x-1 flex-wrap`}
                    >
                        <Icon path={mdiCircle} size={0.5} />
                        <span>{props.category}</span>
                    </div>
                </span>
            </div>
            <div className="ml-auto">
                <span className="text-cyan-base">{props.time}</span>
            </div>
        </div>
    );
}
