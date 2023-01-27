import { useState } from "react";

export default function Dropdown() {
    const [selection, setSelection] = useState<string>("Daily");

    const toggleDropdown = () => {
        const dropdown = document.getElementById("idTimeBoxDropdown")!;
        dropdown.classList.toggle("hidden");
    };

    const handleSelection = (selection: string) => {
        setSelection(selection);
        toggleDropdown();
    };

    return (
        <div>
            <button
                id="dropdownDefaultButton"
                onClick={() => toggleDropdown()}
                data-dropdown-toggle="dropdown"
                className="bg-[#303030] hover:bg-[#404040] -4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                    ></path>
                </svg>
            </button>
            <div
                id="idTimeBoxDropdown"
                className="z-10 absolute hidden bg-[#303030] border-[#454545] border-2 divide-y divide-gray-100 rounded-lg shadow w-44 mt-2"
            >
                <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                >
                    <li onClick={() => handleSelection("Daily")}>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-[#404040]"
                        >
                            Daily
                        </a>
                    </li>
                    <li onClick={() => handleSelection("Weekly")}>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-[#404040]"
                        >
                            Weekly
                        </a>
                    </li>
                    <li onClick={() => handleSelection("Monthly")}>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-[#404040]"
                        >
                            Monthly
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
