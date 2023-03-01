import { AppwriteException } from "appwrite";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { appwrite, userState } from "../../store/global";
import { User } from "../../store/types";
import { AppwriteErrorType } from "../../utils/appwrite/appwriteResponse";
import Alert from "./alert";
import Header from "./header";
import Loading from "../Loading";

export default function Page({ isSecurePage = false, headerEnabled = true, isLoading = false, isBlacklistedWhenLoggedIn = false, children } : { isSecurePage?: boolean, headerEnabled?: boolean, isLoading?: boolean, isBlacklistedWhenLoggedIn?: boolean, children: React.ReactNode }) {
    
    const [user, setUser] = useRecoilState<User>(userState);
    const [loading, setLoading] = useState<boolean>(true);

    const router = useRouter();

    useEffect(() => {
        if (user || !isSecurePage){
            if (!isLoading) {
                setLoading(false);
            }
            return;
        };

        const fetchData = async () => {
            try {
                const response = await appwrite.account.get();
                setUser(response as unknown as User);
            } catch(error: any) {
                if (error instanceof AppwriteException && isSecurePage) {
                    error.type === AppwriteErrorType.GENERAL_UNAUTHORIZED_SCOPE && router.push("/account/login");
                } else {
                    return(
                        <Alert message="Something wrent wrong... Please try again in a few minutes." />
                    );
                }
            }
        }
        fetchData();
    }, [user, isSecurePage, setUser, router, isLoading, isBlacklistedWhenLoggedIn]);

    if (user) {
        if (user.emailVerification === false && router.asPath !== "/account/verify") {
            isLoading = true;
            router.push("/account/verify");
        } else if (isBlacklistedWhenLoggedIn) {
            isLoading = true;
            router.push("/account");
        }
    }

    if (loading) {
        return <Loading />
    } else {
        return (
            <>
                {headerEnabled && <Header isUserLoggedIn={user ? true : false} /> }
                <section className="container mx-auto pt-40 pb-20">
                    {children}
                </section>
            </>
        );
    }
}