import { useEffect, useState } from "react";
import Icon from "@mdi/react";
import { mdiPlusCircle, mdiClose } from "@mdi/js";

interface Props {
    title: string;
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
}

export default function ConfirmDialog(props: Props) {
    const [categoryName, setCategoryName] = useState("");
    const [categoryDescription, setCategoryDescription] = useState("");



    return (
        <>
            <div className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-50 z-10 flex justify-center items-center">
                <div className="bg-[#303030] py-16 px-10 rounded-xl">
                    <div className="w-full h-10 flex justify-between items-center ">
                        <span className="text-2xl pr-16">{props.title}</span>
                        <button
                            onClick={props.onCancel}
                            className="text-2xl font-semibold"
                        >
                            <Icon path={mdiClose} size={1.3} />
                        </button>
                    </div>
                    <div className="w-full flex flex-col py-8">
                        {props.message}
                    </div>
                    <div className="flex flex-row space-x-3 float-right">
                        <button
                            onClick={props.onCancel}
                            className="px-4 py-2 bg-red-base hover:opacity-75 rounded-md flex items-center"
                        >
                            <span>Cancel</span>
                        </button>
                        <button
                            onClick={props.onConfirm}
                            className="px-4 py-2 bg-green-base hover:opacity-75 rounded-md flex items-center"
                        >
                            <span>Confirm</span>
                        </button>

                    </div>
                </div>
            </div>
        </>
    );
}