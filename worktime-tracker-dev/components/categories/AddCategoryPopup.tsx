import { useEffect, useState } from "react";
import Icon from "@mdi/react";
import { mdiPlusCircle, mdiClose } from "@mdi/js";

interface Props {
    addCategory: (categoryName: string, categoryType: string) => void;
    closePopup: () => void;
}

export default function AddCategoryPopup(props: Props) {
    const [categoryName, setCategoryName] = useState("");
    const [categoryDescription, setCategoryDescription] = useState("");
    const [isOpen, setIsOpen] = useState(false);

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

    const handleAddCategory = () => {
        if (categoryName.length > 0 && categoryDescription.length > 0) {
            props.addCategory(categoryName, categoryDescription);
            setIsOpen(false);
            setTimeout(() => {
                props.closePopup();
            }, 400);
        }
    };

    const handleClosePopup = () => {
        setIsOpen(false);
        setTimeout(() => {
            props.closePopup();
        }, 400);
    };

    useEffect(() => {
        setIsOpen(true);
    }, []);

    return (
        <>
            <div className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-50 z-10 flex justify-center items-center">
                <div className={`bg-[#303030] py-16 px-10 rounded-xl transition-all  duration-500 ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}>
                    <div className="w-full h-10 flex justify-between items-center pb-10">
                        <span className="text-2xl">Add Category</span>
                        <button
                            onClick={handleClosePopup}
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
                                className="bg-account-input h-10 w-full rounded-md outline-none focus:ring-0 pl-2 border-[1px] border-[#505358] focus:border-cyan-base"
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
                                className="bg-account-input h-10 w-full rounded-md outline-none focus:ring-0 pl-2 border-[1px] border-[#505358] focus:border-cyan-base"
                                required={true}
                            />
                        </div>
                        <div className="float-right">
                            <button
                                className="px-4 py-2 bg-cyan-base hover:opacity-75 rounded-md flex items-center"
                                onClick={handleAddCategory}
                            >
                                <Icon
                                    path={mdiPlusCircle}
                                    size={1}
                                    color="white"
                                />
                                <span>&nbsp;Add category</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
