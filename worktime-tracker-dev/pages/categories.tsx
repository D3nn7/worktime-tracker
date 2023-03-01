import NavBar from "../components/navigation/NavBarTracking";
import Icon from "@mdi/react";
import { mdiPlusCircle } from "@mdi/js";
import CategoryBox from "../components/categories/CategoryBox";
import NoEntryBox from "../components/NoEntryBox";
import AddCategoryPopup from "../components/categories/AddCategoryPopup";
import EditCategoryPopup from "../components/categories/EditCategoryPopup";
import { useState } from "react";
import {
    IAccountCategoryBoxState as State,
} from "../lib/types/props";

interface IEditCategory {
    index: number;
    id: string;
    category: string;
    description: string;
}

export default function Categories() {
    const [categories, setCategories] = useState<Array<State>>();
    const [showAddPopup, setShowAddPopup] = useState(false);
    const [showEditPopup, setShowEditPopup] = useState(false);
    const [editCategory, setEditCategory] = useState<IEditCategory>();

    const handleAddCategory = () => {
        setShowAddPopup(true);
    };

    const handleEditCategory = (category: IEditCategory) => {
        setShowEditPopup(true);
        setEditCategory(category);
    };

    const addCategory = (categoryName: string, categoryType: string) => {
        if (categories === undefined) {
            setCategories([
                {
                    id: "1",
                    category: categoryName,
                    description: categoryType,
                },
            ]);
        } else {
            categories?.push({
                id: (categories === undefined
                    ? 1
                    : categories.length + 1
                ).toString(),
                category: categoryName,
                description: categoryType,
            });
        }
    };

    const addEditedCategory = (categoryName: string, categoryType: string) => {
        if (editCategory !== undefined) {
            categories![editCategory.index] = {
                id: editCategory.id,
                category: categoryName,
                description: categoryType,
            };
            setCategories([...categories!]);
        }
    };

    return (
        <div>
            <NavBar />
            <div className="container mx-auto pt-40 pb-20">
                <div className="pb-20 ">
                    <div className="text-3xl float-left">Categories</div>
                    <div className="float-right">
                        <button
                            className="px-4 py-2 bg-cyan-base rounded-md flex items-center"
                            onClick={handleAddCategory}
                        >
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
                    {categories !== undefined
                        ? categories.map((category, index) => (
                              <CategoryBox
                                  key={index}
                                  id={category.id}
                                  category={category.category}
                                  description={category.description}
                                  handleDelete={() => {
                                      categories.splice(index, 1);
                                      setCategories([...categories]);
                                  }}
                                  handleEdit={() => {
                                      handleEditCategory({
                                          index: index,
                                          id: category.id,
                                          category: category.category,
                                          description: category.description,
                                      });
                                  }}
                              />
                          ))
                        : null}
                    <NoEntryBox
                        id="1"
                        category="Something missing?"
                        description="add more categories to manage the tiimes more accurately"
                    />
                </div>
            </div>
            {showAddPopup && (
                <AddCategoryPopup
                    closePopup={() => setShowAddPopup(false)}
                    addCategory={addCategory}
                />
            )}
            {showEditPopup && (
                <EditCategoryPopup
                    closePopup={() => setShowEditPopup(false)}
                    editCategoryVaues={editCategory!}
                    editCategory={addEditedCategory}
                />
            )}
        </div>
    );
}
