import { useState } from "react";
import Link from "next/link";

export default function Register() {
    const [password, setPassword] = useState<string>("");

    const checkPassword = (): boolean => {
        const passwordInput = document.getElementById(
            "reenteredPassword"
        ) as HTMLInputElement;
        if (passwordInput.value === password) {
            return true;
        } else {
            return false;
        }
    };

    return (
        <>
            <div className="pt-10">
                <span className="text-xl">Get started today for free</span>
            </div>
            <div>
                <span className="text-md">
                    Already have an account?&nbsp;
                    <Link
                        href={{ pathname: "./login" }}
                        className="text-color-reg-now"
                    >
                        Login here
                    </Link>
                    .
                </span>
            </div>
            <form action="">
                <div className="pt-10 flex flex-col">
                    <label htmlFor="email" className="text-md">
                        E-Mail
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="h-10 w-account-input pl-2 border-2 border-color-input text-black rounded-md"
                        required
                    />
                </div>
                <div className="pt-5 flex flex-col">
                    <label htmlFor="password" className="text-md">
                        Password
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target!.value)}
                        id="password"
                        name="password"
                        className="h-10 w-account-input pl-2 border-2 border-color-input text-black rounded-md"
                        required
                    />
                </div>
                <div className="pt-5 flex flex-col">
                    <label htmlFor="password" className="text-md">
                        Re-enter password
                    </label>
                    <input
                        type="password"
                        id="reenteredPassword"
                        name="password"
                        className="h-10 w-account-input pl-2 border-2 border-color-input text-black rounded-md"
                        required
                    />
                </div>
                <div className="pt-10">
                    <button
                        type="submit"
                        className="px-4 py-2  bg-cyan-base rounded-md text-white"
                    >
                        Sign in
                    </button>
                </div>
            </form>
        </>
    );
}
