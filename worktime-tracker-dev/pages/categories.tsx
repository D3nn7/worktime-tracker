import Icon from "@mdi/react";
import { mdiPlusCircle } from "@mdi/js";
import CategoryBox from "../components/categories/CategoryBox";
import NoEntryBox from "../components/NoEntryBox";
import AddCategoryPopup from "../components/categories/AddCategoryPopup";
import EditCategoryPopup from "../components/categories/EditCategoryPopup";
import { useEffect, useState } from "react";
import Page from "../components/page/page";
import { ITimeCategory } from "../lib/types/types";
import { getJWT } from "../utils/jwt";
import { toast } from "sonner";
import { useRecoilValue } from "recoil";
import { userState } from "../store/global";


interface IEditCategory {
    index: number;
    id: string;
    category: string;
    description: string;
}

export default function Categories() {
    const user = useRecoilValue(userState);
    const [loading, setLoading] = useState(true);
    const [showAddPopup, setShowAddPopup] = useState(false);
    const [showEditPopup, setShowEditPopup] = useState(false);
    const [editCategory, setEditCategory] = useState<IEditCategory>();

    const [categories, setCategories] = useState<ITimeCategory[]>([]);

    async function getCategories() {
        const jwt = await getJWT();
        const res = await fetch('/api/category/get', {
            method: 'get',
            headers: {
                JWT: jwt
            },
        }).then((res) => res.json());

        if (res.status !== 200) {
            toast.error("Something went wrong", {
                description: `${res.status} ${res.statusText}`
            });
        } else {
            setCategories(res.data.documents as ITimeCategory[]);
            setLoading(false);
        }
    }

    useEffect(() => {
        getCategories();
    }, []);

    const handleAddCategory = () => {
        setShowAddPopup(true);
    };

    const handleEditCategory = (category: IEditCategory) => {
        setShowEditPopup(true);
        setEditCategory(category);
    };

    const addCategory = async (categoryName: string, description: string) => {
        const jwt = await getJWT();
        const res = await fetch('/api/category/add', {
            method: 'post',
            headers: {
                JWT: jwt,
            },
            body: JSON.stringify({
                name: categoryName,
                description: description,
                ownerId: user.$id,
                isNotIncludedInTrack: false,
                color: "eff8ff"
            } as ITimeCategory)
        }).then((res) => res.json());

        if (res.status !== 200) {
            toast.error("Something went wrong", {
                description: `${res.status} ${res.statusText}`
            });
        } else {
            toast.success("Category successfully added");
            getCategories();
        }
    };

    const addEditedCategory = (categoryName: string, description: string) => {
        if (editCategory !== undefined) {
            categories![editCategory.index] = {
                id: editCategory.id,
                name: categoryName,
                description: description,
                ownerId: user.$id,
                isNotIncludedInTrack: false,
                color: "eff8ff"
            };
            setCategories([...categories!]);
        }
    };

    return (
        <Page isSecurePage isLoading={loading}>
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
                                  key={category.id}
                                  id={category.id as string}
                                  category={category.name}
                                  description={category.description as string}
                                  handleDelete={() => {
                                      categories.splice(index, 1);
                                      setCategories([...categories]);
                                  }}
                                  handleEdit={() => {
                                      handleEditCategory({
                                          index: index,
                                          id: category.id as string,
                                          category: category.name,
                                          description: category.description as string,
                                      });
                                  }}
                              />
                          ))
                        : null}
                    <NoEntryBox
                        category="Something missing?"
                        description="Add more categories to manage the tiimes more accurately"
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
        </Page>
    );
}
