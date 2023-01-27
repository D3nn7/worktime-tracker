// create function component in typescript

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/Logo.svg";
import { useRouter } from "next/router";
import AccountDropdown from "./AccountDropdown";

export default function NavBar() {
    const router = useRouter();
    const [navAccount, setNavAccount] = useState<string>("account/account");

    useEffect(() => {
        if (router.query.id === "account") {
            setNavAccount("./account");
        }
    }, [router.query.id]);

    return (
        <nav className="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 ">
            <div className="container flex  items-center justify-between mx-auto">
                <Link href={"/"}>
                    <Image src={Logo} className="h-11 w-auto" alt="Logo" />
                </Link>
                <div className="flex md:order-2">
                    <AccountDropdown navigation={navAccount} />
                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-sticky"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 mt-4 border rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium md:border-0  ">
                        <li>
                            <Link
                                href={"/track"}
                                className="block py-2 pl-3 pr-4 "
                            >
                                Track
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/history"
                                className="block py-2 pl-3 pr-4"
                            >
                                History
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/analyses"
                                className="block py-2 pl-3 pr-4 "
                            >
                                Analyses
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
