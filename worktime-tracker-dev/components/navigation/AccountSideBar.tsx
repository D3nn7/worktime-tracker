import { IAccountDropdownProps as Props } from "../../lib/types/types";
import { useState } from "react";
import Link from "next/link";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";

export default function AccountDropdown(props: Props) {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <>
            {showSidebar && (
                <button
                    className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    <Icon path={mdiClose} size={1.5} />
                </button>
            )}
            <button
                onClick={() => setShowSidebar(!showSidebar)}
                className="bg-orange-base  hover:bg-orange-300 text-black focus:outline-none focus:border-spacing-0 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-3 md:mr-0"
            >
                JB
            </button>
            <div
                className={`top-0 right-0 w-96 bg-[#303030] p-10 fixed h-full z-40  ease-in-out duration-300 ${showSidebar ? "translate-x-0 " : "translate-x-full"
                    }`}
            >
                <ul className="py-2 text-lg mt-5 w-11/12">
                    <li>
                        <div className="block px-4 py-2 rounded-md w-full">
                            <div className="flex flex-row place-items-center pb-3 w-full">
                                <div>
                                <button
                                    className="bg-orange-base   text-black focus:outline-none focus:border-spacing-0 font-medium rounded-lg text-sm px-4 py-4 text-center mr-3"
                                >
                                    JB
                                </button>
                                </div>
                                <div className="flex flex-col flex-wrap w-full overflow-auto">
                                    <span>Signed in as</span>
                                    <span className="">jonasbott2@web.de</span>
                                </div>
                            </div>

                            <hr />
                        </div>
                    </li>
                    <li>
                        <Link
                            href={"/account"}
                            className="block px-4 py-2 hover:bg-[#404040] rounded-md"
                        >
                            Account Settings
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"/categories"}
                            className="block px-4 py-2 hover:bg-[#404040] rounded-md"
                        >
                            Categories
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"/"}
                            className="block px-4 py-2 hover:bg-[#404040] rounded-md"
                        >
                            Sign out
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}
