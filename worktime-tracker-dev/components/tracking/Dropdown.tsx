import { useState } from "react";
import { IDropdownProps as Props } from "../../lib/types/props";

export default function Dropdown(props: Props) {
    const [selection, setSelection] = useState<string>(props.selection);

    const toggleDropdown = () => {
        const dropdown = document.getElementById("idTimeBoxDropdown")!;
        dropdown.classList.toggle("hidden");
    };

    const handleSelection = (selection: string) => {
        setSelection(selection);
        props.setSelect(selection);
        toggleDropdown();
    };

    return (
        <div>
            <button
                id="dropdownDefaultButton"
                onClick={() => toggleDropdown()}
                data-dropdown-toggle="dropdown"
                className="bg-account-input hover:bg-[#303030] -4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
                type="button"
            >
                {selection}
                <svg
                    className="w-4 h-4 ml-2"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    ></path>
                </svg>
            </button>
            <div
                id="idTimeBoxDropdown"
                className="z-10 absolute hidden bg-account-input border-[#303030] border-2 divide-y divide-gray-100 rounded-lg shadow w-44 mt-2"
            >
                <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                >
                    {props.items.map((item) => {
                        return (
                            <li
                                key={item}
                                onClick={() => handleSelection(item)}
                            >
                                <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-[#404040]"
                                >
                                    {item}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
