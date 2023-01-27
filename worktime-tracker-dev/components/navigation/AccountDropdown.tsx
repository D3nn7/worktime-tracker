import { IAccountDropdownProps as Props } from "../../lib/types/types";
import Link from "next/link";

export default function AccountDropdown(props: Props) {
    const toggleDropdown = () => {
        const dropdown = document.getElementById("dropdown")!;
        dropdown.classList.toggle("hidden");
    };
    //bg-orange-base  hover:bg-orange-300 text-black focus:outline-none focus:border-spacing-0 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-3 md:mr-0
    return (
        <div>
            <button
                type="button"
                id="dropdownDefaultButton"
                onClick={() => toggleDropdown()}
                data-dropdown-toggle="dropdown"
                className="bg-orange-base  hover:bg-orange-300 text-black focus:outline-none focus:border-spacing-0 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-3 md:mr-0"
            >
                JB
            </button>
            <div
                id="dropdown"
                className="z-10 absolute hidden bg-[#303030] border-[#454545] border-2 divide-y divide-gray-100 rounded-lg shadow mt-2"
            >
                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div>Bonnie Green</div>
                    <div className="font-medium truncate">
                        name@flowbite.com
                    </div>
                </div>
                <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownSmallButton"
                >
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Settings
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Earnings
                        </a>
                    </li>
                </ul>
                <div className="py-2">
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                        Sign out
                    </a>
                </div>
            </div>
        </div>
    );
}
