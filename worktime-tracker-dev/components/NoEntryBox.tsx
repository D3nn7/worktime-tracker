import Icon from "@mdi/react";
import { mdiPencil, mdiDelete } from "@mdi/js";
import { IAccountCategoryBoxProps as Props } from "../lib/types/types";

export default function NoEntryBox(props: Props) {
    return (
        <div className=" rounded-md border-dashed border-2 border-[#262626] p-4">
            <div className="flex flex-row">
                <div className="flex flex-col">
                    <span className="text-2xl text-gray-500">
                        {props.category}
                    </span>
                    <span className="text-sm text-gray-500">
                        {props.description}
                    </span>
                </div>
            </div>
        </div>
    );
}
