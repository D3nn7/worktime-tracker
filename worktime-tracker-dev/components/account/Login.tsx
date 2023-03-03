import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { appwrite } from "../../store/global";

export default function Login() {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [alert, setAlert] = useState<string>("");
    const router = useRouter();

    const login = async (event: FormEvent<EventTarget>) => {
        event.preventDefault();
        try {
            await appwrite.account.createEmailSession(email, password);
            router.push("/account");
        } catch (error : any) {
            setAlert(error.message);
        }
    }

    return (
        <>
            <div className="pt-10">
                <span className="text-xl">Sign in to your account</span>
            </div>
            <div>
                <span className="text-md">
                    Dont have an Account yet?&nbsp;
                    <Link
                        href={{ pathname: "./register" }}
                        className="text-color-reg-now"
                    >
                        Register here
                    </Link>
                    &nbsp;for free!
                </span>
            </div>
            <form onSubmit={login}>
                <div className="pt-10 flex flex-col">
                    <label htmlFor="email" className="text-md">
                        E-Mail
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="bg-account-input h-10 w-1/2 rounded-md outline-none focus:ring-0 pl-2 border-[1px] border-[#505358] focus:border-cyan-base"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="pt-5 flex flex-col">
                    <label htmlFor="password" className="text-md">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="bg-account-input h-10 w-1/2 rounded-md outline-none focus:ring-0 pl-2 border-[1px] border-[#505358] focus:border-cyan-base"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="pt-5">
                    <span className="text-md text-white">forgot password? <Link className="text-color-reg-now" href={'./reset'}>recover here</Link>.</span>
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
