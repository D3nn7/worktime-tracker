import Icon from "@mdi/react";
import { mdiPlay } from "@mdi/js";
import { useState } from "react";
import Dropdown from "./Dropdown";

export default function Start() {
    const [inputValue, setInputValue] = useState("");
    return (
        // <div className="w-full flex flex-col place-items-center pb-20">
        //     <div className="flex flex-row place-items-center space-x-5">
        //         <button className="p-6 bg-cyan-base rounded-lg">
        //             <Icon path={mdiPlay} size={3} />
        //         </button>
        //         <div className="flex flex-col">

        //         </div>
        //     </div>
        // </div>
        <div className="grid grid-flow-row grid-cols-12">
            <div className="col-start-4 col-end-4 ">
                <button className=" p-6  bg-cyan-base flex mx-auto rounded-lg">
                    <Icon path={mdiPlay} size={3} />
                </button>
            </div>
            <div className="grid-flow-col col-start-6 col-end-10">
                <input
                    type={"text"}
                    value={inputValue}
                    onChange={(event: any) => {
                        setInputValue(event.target.value);
                    }}
                    className="bg-account-input h-10 w-full pl-2 rounded-md focus:ring-0  border-0 outline-none"
                    required={true}
                />
                <Dropdown key={inputValue} />
            </div>
        </div>
    );
}
