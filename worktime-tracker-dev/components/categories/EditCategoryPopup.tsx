import { useEffect, useState } from "react";
import Icon from "@mdi/react";
import { mdiPencilCircle, mdiClose } from "@mdi/js";
import { IAccountCategoryBoxState as props } from "../../lib/types/types";

interface Props {
    editCategoryVaues: props;
    editCategory: (categoryName: string, categoryType: string) => void;
    closePopup: () => void;
}

export default function EditCategoryPopup(props: Props) {
    const [categoryName, setCategoryName] = useState("");
    const [categoryDescription, setCategoryDescription] = useState("");

    useEffect(() => {
        if (props.editCategoryVaues !== undefined) {
            setCategoryName(props.editCategoryVaues.category);
            setCategoryDescription(props.editCategoryVaues.description);
        }
    }, [props.editCategory]);

    const handleChangeCategoryName = (event: any) => {
        if (event.target.value.length !== null) {
            setCategoryName(event.target.value);
        }
    };

    const handleChangeCategoryDescription = (event: any) => {
        if (event.target.value.length !== null) {
            setCategoryDescription(event.target.value);
        }
    };

    const handleEditCategory = () => {
        if (categoryName.length > 0 && categoryDescription.length > 0) {
            props.editCategory(categoryName, categoryDescription);
            props.closePopup();
        }
    };

    return (
        <>
            <div className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-50 z-10 flex justify-center items-center">
                <div className="bg-[#303030] py-16 px-10 rounded-xl">
                    <div className="w-full h-10 flex justify-between items-center pb-10">
                        <span className="text-2xl">Edit Category</span>
                        <button
                            onClick={props.closePopup}
                            className="text-2xl font-semibold"
                        >
                            <Icon path={mdiClose} size={1.3} />
                        </button>
                    </div>
                    <div className="w-full flex flex-col space-y-5">
                        <div className="space-y-2">
                            <label className="text-sm">Category Name</label>
                            <input
                                type="text"
                                value={categoryName}
                                onChange={(event: any) =>
                                    handleChangeCategoryName(event)
                                }
                                className="bg-account-input h-10 w-full rounded-md outline-none "
                                required={true}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm">
                                Category Description
                            </label>
                            <input
                                type="text"
                                value={categoryDescription}
                                onChange={(event: any) =>
                                    handleChangeCategoryDescription(event)
                                }
                                className="bg-account-input h-10 w-full rounded-md outline-none"
                                required={true}
                            />
                        </div>
                        <div className="float-right">
                            <button
                                className="px-4 py-2 bg-cyan-base rounded-md flex items-center"
                                onClick={handleEditCategory}
                            >
                                <Icon
                                    path={mdiPencilCircle}
                                    size={1}
                                    color="white"
                                />
                                <span>&nbsp;Edit category</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
