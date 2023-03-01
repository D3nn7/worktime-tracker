import { FormEvent, useState } from "react";
import Link from "next/link";
import { useSetRecoilState } from "recoil";
import { useRouter } from "next/router";
import { appwrite, userState } from "../../store/global";
import { User } from "../../store/types";

export default function Register() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [reenteredPassword, setReenteredPassword] = useState<string>("");
    const [alert, setAlert] = useState<string>("");
    const setUser = useSetRecoilState(userState);
    const router = useRouter();

    const register = async (event: FormEvent<EventTarget>) => {
        event.preventDefault();
        try {
            await appwrite.account.create('unique()', email, password, name);
            setUser(await appwrite.account.createEmailSession(email, password) as unknown as User);
            router.push("/account/verify");
        } catch (error : any) {
            setAlert(error.message as string);            
        }
    }

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
            <form onSubmit={register}>
                <div className="pt-10 flex flex-col">
                    <label htmlFor="email" className="text-md">
                        Name
                    </label>
                    <input
                        type="text"
                        id="idName"
                        name="Name"
                        onChange={(event) => setName(event.target.value)}
                        className="bg-account-input h-10 w-1/2 rounded-md outline-none focus:ring-0 pl-2 border-[1px] border-[#505358] focus:border-cyan-base"
                        required
                    />
                </div>
                <div className="pt-5 flex flex-col">
                    <label htmlFor="email" className="text-md">
                        E-Mail
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={(event) => setEmail(event.target.value)}
                        className="bg-account-input h-10 w-1/2 rounded-md outline-none focus:ring-0 pl-2 border-[1px] border-[#505358] focus:border-cyan-base"
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
                        onChange={(event) => setPassword(event.target.value)}
                        id="password"
                        name="password"
                        className="bg-account-input h-10 w-1/2 rounded-md outline-none focus:ring-0 pl-2 border-[1px] border-[#505358] focus:border-cyan-base"
                    />
                </div>
                <div className="pt-5 flex flex-col">
                    <label htmlFor="password" className="text-md">
                        Re-enter password
                    </label>
                    <input
                        type="password"
                        id="reenteredPassword"
                        onChange={(event) => setReenteredPassword(event.target.value)}
                        name="password"
                        className="bg-account-input h-10 w-1/2 rounded-md outline-none focus:ring-0 pl-2 border-[1px] border-[#505358] focus:border-cyan-base"
                        required
                    />
                </div>
                <div className="pt-10">
                    <button
                        type="submit"
                        className="px-4 py-2  bg-cyan-base rounded-md text-white hover:opacity-75"
                    >
                        Sign in
                    </button>
                </div>
            </form>
        </>
    );
}
