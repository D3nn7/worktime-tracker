import Link from "next/link";
import { useState } from "react";
import type { FormEvent } from "react"
import Alert from "../../components/page/alert";
import { useRouter } from "next/router";
import { appwrite } from "../../store/global";
import Page from "../../components/page/page";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alert, setAlert] = useState("");
    const router = useRouter();

    const login = async (e: FormEvent<EventTarget>) => {
        e.preventDefault();
        try {
            await appwrite.account.createEmailSession(email, password);
            router.push("/account/overview");
        } catch (error : any) {
            setAlert(error.message);
        }
    }

    return (
        <Page isBlacklistedWhenLoggedIn={true}>
        {alert && <Alert message={alert} />}
            <section className="container h-screen mx-auto flex">
                <div className="flex-grow flex flex-col max-w-xl justify-center p-6">
                    <h1 className="text-6xl font-bold">Login</h1>
                    <p className="mt-6">
                        Don&apos;t have an account?{" "}
                        <Link href="/account/register">
                          Sign Up
                        </Link>
                    </p>
                    <form onSubmit={login}>
                        <label className="block mt-6" htmlFor="email"> Email</label>
                        <input
                            id="email"
                            className="w-full p-4 placeholder-gray-400 text-gray-700 bg-white text-lg border-0 border-b-2 border-gray-400 focus:ring-0 focus:border-gray-900"
                            type="email"
                            required={true}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="block mt-6" htmlFor="password"> Password</label>
                        <input
                            id="password"
                            className="w-full p-4 placeholder-gray-400 text-gray-700 bg-white text-lg border-0 border-b-2 border-gray-400 focus:ring-0 focus:border-gray-900"
                            type="password"
                            required={true}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <div className="mt-6">
                            <button
                                type="submit"
                                disabled={!email || !password}
                                className="mx-auto mt-4 py-4 px-16 font-semibold rounded-lg shadow-md bg-gray-900 text-white border hover:border-gray-900 hover:text-gray-900 hover:bg-white focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                    <p>Forgot password? <Link href={'./reset'}>reset here</Link>.</p>
                </div>
            </section>
        </Page>
    )
}

export default Login;
