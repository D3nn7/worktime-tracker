import { IHistoryBoxProps as Props } from "../../lib/types/types";
import Icon from "@mdi/react";
import { mdiCircle } from "@mdi/js";

export default function HistoryBox(props: Props) {
    return (
        <div className="bg-[#262626] rounded-md shadow-md p-4">
            <div className="flex flex-row">
                <div className="flex flex-col space-y-2">
                    <span className="text-2xl font-bold">
                        {props.description}
                    </span>
                    <div>
                        <div
                            className={`absolute text-sm py-0.5 px-2 rounded-xl bg-[#303030] flex flex-row flex-wrap place-items-center space-x-1`}
                        >
                            <Icon path={mdiCircle} size={0.5} />
                            <span>{props.category}</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col ml-auto space-y-2 items-end">
                    <span className="text-2xl font-bold">{props.timeSum}</span>
                    <span className="text-sm text-gray-500">
                        {props.duration}
                    </span>
                </div>
            </div>
        </div>
    );
}
