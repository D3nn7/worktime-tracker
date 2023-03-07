import { AppwriteException, Models } from "appwrite";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { appwrite, userState } from "../../store/global";
import { User } from "../../store/types";
import { AppwriteErrorType } from "../../utils/appwrite/appwriteResponse";
import Header from "./header";
import Loading from "../Loading";
import { Toaster, toast } from "sonner";
import Head from "next/head";

export default function Page({
    title = "Worktime Tracker",
    isSecurePage = false,
    headerEnabled = true,
    isLoading = false,
    isBlacklistedWhenLoggedIn = false,
    children,
}: {
    title?: string;
    isSecurePage?: boolean;
    headerEnabled?: boolean;
    isLoading?: boolean;
    isBlacklistedWhenLoggedIn?: boolean;
    children: React.ReactNode;
}) {
    const [user, setUser] = useRecoilState<User>(userState);
    const [loading, setLoading] = useState<boolean>(true);

    const router = useRouter();

    const fetchData = async () => {
        try {
            const user: User = await appwrite.account.get() as unknown as User;
            const profilePicture: URL = appwrite.avatars.getInitials(user.name, 200, 200)
            user.profilePicture = profilePicture;
            setUser(user);
        } catch (error: any) {
            if (error instanceof AppwriteException && isSecurePage) {
                error.type ===
                    AppwriteErrorType.GENERAL_UNAUTHORIZED_SCOPE &&
                    router.push("/account/login");
            } else {
                toast.error("Something went wrong... Please try again in a few minutes.");
            }
        }
    };

    useEffect(() => {
        if (user || !isSecurePage) {
            if (!isLoading) {
                setLoading(false);
            }
            
            return;
        }

        fetchData();
    }, [
        user,
        isSecurePage,
        setUser,
        router,
        isLoading,
        isBlacklistedWhenLoggedIn,
    ]);

    if (user) {
        if (user.emailVerification === false && router.asPath !== "/account/verify") {
            isLoading = true;
            router.push("/account/verify");
        } 
        
        if (isBlacklistedWhenLoggedIn) {
            isLoading = true;
            router.push("/tracking");
        }
    }

    if (loading) {
        return <Loading />;
    } else {
        return (
            <>
                <Head>
                    <title>{title}</title>
                </Head>
                {headerEnabled && (
                    <Header isUserLoggedIn={user ? true : false} />
                )}
                {children}
                <Toaster theme="dark" position="top-center" closeButton  />
            </>
        );
    }
}
