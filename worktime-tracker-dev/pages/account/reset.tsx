import { AppwriteException } from "appwrite";
import { GetServerSideProps } from "next";
import AccountInput from "../../components/account/Input";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import Page from "../../components/page/page"
import Logo from "../../public/static/Logo.svg";
import { appwrite } from "../../store/global";
import Image from "next/image";
import { toast } from "sonner";

export default function ResetUser({ userId, secret, expire } : { userId?: string, secret?: string, expire?: string }) {    
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordRepeat, setPasswordRepeat] = useState<string>("");
    const [resetProcess, setResetProcess] = useState<boolean>(false);
    
    const router = useRouter();

    const resetPassword = async (event: FormEvent<EventTarget>) => {
        event.preventDefault();
        try {
            await appwrite.account.createRecovery(email, process.env.NEXT_PUBLIC_PROJECT_URL + "/account/reset");
            toast.message("Email was send to " + email + ". Please check your inbox and follow the instructions.");
        } catch (error : any) {
            toast.error(error.message);
        }
    }

    const changePassword = async (event: FormEvent<EventTarget>) => {
        event.preventDefault();
        try {
            await appwrite.account.updateRecovery(userId as string, secret as string, password, passwordRepeat);
            toast.success("Password was changed. You can now login with your new password.");
            router.push("/account/login");
        } catch (error: any) {
            if (error instanceof AppwriteException) {
                toast.error(error.message);
            }
        }
    }

    useEffect(() => {
        if (userId && secret) {
            setResetProcess(true);
        }
    }, [userId, secret, expire]);

    if (!resetProcess) {
        return (
            <Page isBlacklistedWhenLoggedIn={true} headerEnabled={false}>
                <div className="bg-gradient-to-b from-cyan-base to-green-base">
			        <div className="bg-bg-base w-3/5 pt-32 pl-16 h-screen">
				        <div className="flex flex-row space-x-5">
                            <Image src={Logo} alt="Logo" width={30} height={30} />
                            <span className="text-2xl">Worktime Tracker</span>
                        </div>
                        <div className="flex flex-col pt-10 pr-52">
                            <span className="text-3xl">Reset your password</span>
                            <span className="text-xl pt-5">
                                Password forgotten? No problem! Just reset it. <br /> The only
                                thing we need is your email address.
                            </span>
                            <form onSubmit={resetPassword}>
                                <div className="pt-10 flex flex-col">
                                    <label htmlFor="email" className="text-md">
                                        E-Mail
                                    </label>
                                    <AccountInput
                                        inputType={"email"}
                                        inputValue={email}
                                        setInputValue={setEmail}
                                        required={true}
                                    />
                                </div>
                                <div className="pt-10">
                                    <button
                                        type="submit"
                                        className="px-4 py-2  bg-cyan-base rounded-md text-white"
                                    >
                                        Reset password now
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Page>
        );
    } else {
        return (
            <Page isBlacklistedWhenLoggedIn={true} headerEnabled={false}>
                <div className="bg-gradient-to-b from-cyan-base to-green-base">
			        <div className="bg-bg-base w-3/5 pt-32 pl-16 h-screen">
				        <div className="flex flex-row space-x-5">
                            <Image src={Logo} alt="Logo" width={30} height={30} />
                            <span className="text-2xl">Worktime Tracker</span>
                        </div>
                        <div className="flex flex-col pt-10 pr-52">
                            <span className="text-3xl">Reset is progress</span>
                            <span className="text-xl pt-5">
                                One step ahead to recover your account. You need to set a new password
                            </span>
                            <form onSubmit={changePassword}>
                                <div className="pt-10 flex flex-col">
                                    <label htmlFor="email" className="text-md">
                                        New password
                                    </label>
                                    <AccountInput
                                        inputType={"password"}
                                        inputValue={password}
                                        setInputValue={setPassword}
                                        required={true}
                                    />
                                </div>
                                <div className="pt-10 flex flex-col">
                                    <label htmlFor="email" className="text-md">
                                        Reenter new password
                                    </label>
                                    <AccountInput
                                        inputType={"password"}
                                        inputValue={passwordRepeat}
                                        setInputValue={setPasswordRepeat}
                                        required={true}
                                    />
                                </div>
                                <div className="pt-10">
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-cyan-base rounded-md text-white"
                                    >
                                        Reset password now
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Page>
        );
    }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const query = context.query;
	const userId = query.userId;
	const secret = query.secret;
    const expire = query.expire;

	if (userId && secret) {
		return {
			props: {
				userId: userId,
				secret: secret,
                expire: expire
			}
		}
	} else {
		return {
			props: {}
		}
	}
}