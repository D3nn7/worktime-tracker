// create function component in typescript

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/static/Logo.svg";
import { useRouter } from "next/router";
import AccountSideBar from "./AccountSideBar";
import { useResetRecoilState } from "recoil";
import { appwrite, userState } from "../../store/global";

export default function NavBarTracking() {
    const router = useRouter();
    const [navAccount, setNavAccount] = useState<string>("account");

    useEffect(() => {
        if (router.query.id === "account") {
            setNavAccount("./account");
        }
    }, [router.query.id]);

    return (
        <nav className="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 bg-bg-base ">
            <div className="container flex  items-center justify-between mx-auto">
                <Link href={"/tracking"}>
                    <Image
                        src={Logo}
                        className="h-11 w-auto"
                        alt="Logo"
                        priority
                    />
                </Link>
                <div className="flex md:order-2">
                    <AccountSideBar navigation={navAccount} />
                </div>
                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 mt-4 border rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium md:border-0  ">
                        <li>
                            <Link
                                href={"/tracking"}
                                className="block py-2 pl-3 pr-4 "
                            >
                                Track
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/tracking/history"
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
