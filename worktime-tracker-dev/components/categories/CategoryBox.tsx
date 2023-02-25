import Icon from "@mdi/react";
import { mdiPencil, mdiDelete } from "@mdi/js";
import { IAccountCategoryBoxProps as Props } from "../../lib/types/types";
import { useState } from "react";
import ConfirmDialog from "../ConfirmDialog";

export default function CategoryBox(props: Props) {
    const [showConfirmDialog, setShowConfirmDialog] = useState<boolean>(false);
    
    const onDelete = () => {
        setShowConfirmDialog(true);
    };

    const handleCancel = () => {
        setShowConfirmDialog(false);
    };

    const handleConfirm = () => {
        handleDelete();
        setShowConfirmDialog(false);
    };

    const handleEdit = () => {
        props.handleEdit(props.id);
    };

    const handleDelete = () => {
        props.handleDelete(props.id);
    };

    return (
        <div className="bg-[#262626] rounded-md shadow-md p-4">
            <div className="flex flex-row">
                <div className="flex flex-col">
                    <span className="text-2xl font-bold">{props.category}</span>
                    <span className="text-sm text-gray-500">
                        {props.description}
                    </span>
                </div>
                <div className="flex flex-row ml-auto space-x-3">
                    <button
                        onClick={handleEdit}
                        className="bg-[#303030] hover:bg-[#404040] text-black focus:outline-none focus:border-spacing-0 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-3 md:mr-0"
                    >
                        <Icon path={mdiPencil} size={1} color="white" />
                    </button>
                    <button
                        onClick={onDelete}
                        className="bg-[#303030] hover:bg-red-base text-black focus:outline-none focus:border-spacing-0 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-3 md:mr-0"
                    >
                        <Icon path={mdiDelete} size={1} color="white" />
                    </button>
                </div>
            </div>
            {showConfirmDialog && (<ConfirmDialog title="Delete category" message="Do you really want to delete this category?" onCancel={handleCancel} onConfirm={handleConfirm} />) }
        </div>
    );
}
