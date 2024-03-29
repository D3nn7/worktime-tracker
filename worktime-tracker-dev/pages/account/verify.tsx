import { AppwriteException } from "appwrite";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { toast } from "sonner";
import Page from "../../components/page/page";
import Logo from "../../public/static/Logo.svg";
import { appwrite, userState } from "../../store/global";
import { User } from "../../store/types";
import { AppwriteErrorType } from "../../utils/appwrite/appwriteResponse";

export default function VerifyUser({ userId, secret }: { userId?: string, secret?: string }): JSX.Element {
    const [user] = useRecoilState<User>(userState);
    const [verified, setVerified] = useState<boolean>(false);
    const [verificationSend, setVerificationSend] = useState<boolean>(false);
    const [verificationRequested, setVerificationRequested] = useState<boolean>(false);
    const resetUserState = useResetRecoilState(userState);

    const router = useRouter();

    const logout = async () => {
        await appwrite.account.deleteSession('current');
        window.localStorage.removeItem("jwt");
        window.localStorage.removeItem("jwt_expire");
        router.push("/account/login");
        resetUserState();
    }

    async function verifyAccount() {
        if (userId && secret && !verified && !verificationRequested) {
            try {
                setVerificationRequested(true);
                await appwrite.account.updateVerification(
                    userId as string,
                    secret as string
                );
                setVerified(true);
                toast.success("Your account has been verified. You can now login.");
            } catch (error: any) {
                if (error instanceof AppwriteException) {
                    if (error.type === AppwriteErrorType.USER_INVALID_TOKEN) {
                        toast.error("The token you using to verify your account is not valid.");
                    } else if (
                        error.type === AppwriteErrorType.GENERAL_RATE_LIMIT_EXCEEDED
                    ) {
                        toast.error("You exceed the rate limit to verify. Please wait 10 minutes and try again.");
                    }
                } else {
                    toast.error("Something went wrong... Please try again in a few minutes.");
                }
            }
        }
    };

    useEffect(() => {
        verifyAccount();
    }, []);

    const sendVerification = async () => {
        await appwrite.account.createVerification(
            process.env.NEXT_PUBLIC_PROJECT_URL + "/account/verify"
        );
        setVerificationSend(true);
    };

    if (verified) {
        return (
            <Page isSecurePage={true} headerEnabled={false}>
                <Component
                    title={"Verified 🎉"}
                    text={`Thank you for verifying your email adress.`}
                    text2Component={<span>You can now use your account.</span>}
                    linkComponent={
                        <span>
                            <a
                                onClick={() => logout()}
                                className="text-color-reg-now"
                            >
                                Login now
                            </a>
                            .{" "}
                        </span>
                    }
                />
            </Page>
        );
    } else if (!user?.emailVerification) {
        if (!verificationSend) {
            return (
                <Page isSecurePage={true} headerEnabled={false}>
                    <Component
                        title={"Account Created 🎉"}
                        text={
                            "You're one step closer to capturing your time more easily."
                        }
                        text2Component={
                            <span>
                                You just need to verify your email address so we
                                can make sure you are a real person. <br /> We
                                do this to prevent fake accounts. <br />
                                <br />
                                Send a verification mail to <i>{user?.email}</i>
                                ?
                            </span>
                        }
                        linkComponent={
                            <a
                                onClick={sendVerification}
                                className="text-color-reg-now"
                            >
                                send it now
                            </a>
                        }
                    />
                </Page>
            );
        } else {
            return (
                <Page isSecurePage={true} headerEnabled={false}>
                    <Component
                        title={"Verification sent"}
                        text={`We sent a verification mail to ${user?.email}`}
                        text2Component={
                            <span>
                                We have sent you an email with the verification
                                link. You did not receive the link?
                            </span>
                        }
                        linkComponent={
                            <span>
                                Let us try to{" "}
                                <a
                                    onClick={sendVerification}
                                    className="text-color-reg-now"
                                >
                                    send it again
                                </a>
                                .{" "}
                            </span>
                        }
                    />
                </Page>
            );
        }
    } else {
        router.push("/account");
        return <></>;
    }
}

export function Component({
    title,
    text,
    text2Component,
    linkComponent,
}: {
    title: string;
    text: string;
    text2Component: JSX.Element;
    linkComponent: JSX.Element;
}): JSX.Element {
    return (
        <div className="bg-gradient-to-b from-cyan-base to-green-base">
            <div className="bg-bg-base w-3/5 pt-32 pl-16 h-screen">
                <div className="flex flex-row space-x-5">
                    <Image src={Logo} alt="Logo" width={30} height={30} />
                    <span className="text-2xl">Worktime Tracker</span>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col pt-10 pr-52">
                        <span className="text-3xl">{title}</span>
                        <span className="text-xl pt-5">{text}</span>
                        {text2Component}
                        {linkComponent}
                    </div>
                </div>
            </div>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const query = context.query;
    const userId = query.userId;
    const secret = query.secret;

    if (userId && secret) {
        return {
            props: {
                userId: userId,
                secret: secret,
            },
        };
    } else {
        return {
            props: {},
        };
    }
};
