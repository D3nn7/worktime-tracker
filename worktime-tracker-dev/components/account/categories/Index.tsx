import NavBar from "../../navigation/NavBarTracking";
import Icon from "@mdi/react";
import { mdiPlusCircle } from "@mdi/js";
import CategoryBox from "./CategoryBox";
import CategoryNoEntryBox from "./CategoryNoEntryBox";

export default function Categories() {
    const categories = [
        { id: "1", category: "Category 1", description: "Description 1" },
        { id: "2", category: "Category 2", description: "Description 2" },
        { id: "3", category: "Category 3", description: "Description 3" },
    ];

    return (
        <div>
            <NavBar />
            <div className="container mx-auto pt-40 pb-20">
                <div className="pb-20 ">
                    <div className="text-3xl float-left">Categories</div>
                    <div className="float-right">
                        <button className="px-4 py-2 bg-cyan-base rounded-md flex items-center">
                            <Icon
                                path={mdiPlusCircle}
                                size={1.3}
                                color="white"
                            />
                            <span>&nbsp;Add category</span>
                        </button>
                    </div>
                </div>
                <div className="mt-10 flex flex-col space-y-8">
                    {categories.map((category, index) => (
                        <CategoryBox
                            key={index}
                            category={category.category}
                            description={category.description}
                        />
                    ))}
                    <CategoryNoEntryBox
                        category="Something missing?"
                        description="add more categories to manage the tiimes more accurately"
                    />
                </div>
            </div>
        </div>
    );
}
