import { IAccountDropdownProps as Props } from "../../lib/types/props";
import { useState } from "react";
import Link from "next/link";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { appwrite, userState } from "../../store/global";
import { useRouter } from "next/router";
import Image from "next/image";

export default function AccountDropdown(props: Props) {
    const [showSidebar, setShowSidebar] = useState(false);

    const router = useRouter();
    const resetUserState = useResetRecoilState(userState);
    const user = useRecoilValue(userState);

    const logout = async () => {
        await appwrite.account.deleteSession('current');
        window.localStorage.removeItem("jwt");
        window.localStorage.removeItem("jwt_expire");
        router.push("/account/login");
        resetUserState();
    }

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
            <Image 
               onClick={() => setShowSidebar(!showSidebar)}
                className="rounded-md h-11 w-auto hover:opacity-80" 
                src={user?.profilePicture.href as unknown as string} 
                alt={"Profile picture"} 
                width={100} 
                height={100} />
            <div
                className={`top-0 right-0 w-96 bg-[#303030] p-10 fixed h-full z-40  ease-in-out duration-300 ${
                    showSidebar ? "translate-x-0 " : "translate-x-full"
                }`}
            >
                <ul className="py-2 text-lg mt-5 w-11/12">
                    <li>
                        <div className="block px-4 py-2 w-full">
                            <div className="flex flex-row place-items-center pb-3 w-9/12">
                                <div className="pr-2">
                                    <Image className="rounded-md" src={user?.profilePicture.href as unknown as string} alt={"Profile picture"} width={200} height={200} />
                                </div>
                                <div className="flex flex-col flex-wrap w-full">
                                    <span>Signed in as</span>
                                    <span className="w-full truncate ...">
                                            {user.name}
                                    </span>
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
                            href={"/account/logout"}
                            onClick={logout} 
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
