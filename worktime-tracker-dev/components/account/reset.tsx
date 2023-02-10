import { AppwriteException } from "appwrite";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import Alert from "../page/alert";
import Page from "../page/page"
import { appwrite } from "../../store/global";

export default function ResetUser({ userId, secret, expire } : { userId?: string, secret?: string, expire?: string }) {
    const [alert, setAlert] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordRepeat, setPasswordRepeat] = useState<string>("");
    const [resetProcess, setResetProcess] = useState<boolean>(false);
    
    const router = useRouter();

    const resetPassword = async (event: FormEvent<EventTarget>) => {
        event.preventDefault();
        try {
            await appwrite.account.createRecovery(email, process.env.PROJECT_URL + "/account/reset");
            setAlert("Email was send to " + email + ". Please check your inbox and follow the instructions.")
        } catch (error : any) {
            setAlert(error.message);
        }
    }

    const changePassword = async (event: FormEvent<EventTarget>) => {
        event.preventDefault();
        try {
            await appwrite.account.updateRecovery(userId as string, secret as string, password, passwordRepeat);
            setAlert("Password was changed. You can now login with your new password.");
            router.push("/account/login");
        } catch (error: any) {
            if (error instanceof AppwriteException) {
                setAlert(error.message);
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
            <Page isBlacklistedWhenLoggedIn={true}>
                {alert && <Alert message={alert} />}
                <p>Recover you account.</p>

                <form onSubmit={resetPassword}>
                    <label htmlFor="email"> Email</label>
                    <input
                        id="email"
                        type="email"
                        required={true}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button

                        type="submit"
                        disabled={!email}
                    >
                        Send restore email
                    </button>
                </form>
            </Page>
        );
    } else {
        return (
            <Page isBlacklistedWhenLoggedIn={true}>
                {alert && <Alert message={alert} />}
                <p>One step ahead to recover your account. You need to set a new password</p>

                <form onSubmit={changePassword}>
                    <label htmlFor="newPassword"> New password</label>
                    <input
                        id="newPassword"
                        type="password"
                        required={true}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <label htmlFor="repeatNewPassword"> Repeat new password</label>
                    <input
                        id="repeatNewPassword"
                        type="password"
                        required={true}
                        onChange={(e) => setPasswordRepeat(e.target.value)}
                    />
                    <button

                        type="submit"
                        disabled={!password && !passwordRepeat && password !== passwordRepeat}
                    >
                        Change password
                    </button>
                </form>
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