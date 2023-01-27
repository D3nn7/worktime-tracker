import { ICategoryBoxProps as Props } from "../../lib/types/types";
import Dropdown from "./Dropdown";

export default function CategoryBox(props: Props) {
    return (
        <div className="bg-account-input py-3 pl-4 h-92 w-auto rounded-lg">
            <div className="flex flex-row content-center items-center ">
                <span className="text-[#818181] m-5">{props.average}</span>
                <Dropdown />
            </div>
        </div>
    );
}
