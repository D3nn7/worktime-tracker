import { AppwriteException } from "appwrite";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { appwrite, userState } from "../../store/global";
import { User } from "../../store/types";
import Alert from "./alert";
import Header from "./header";
import Loading from "./loading";

export default function Page({ isSecurePage = false, headerEnabled = true, isLoading = false, isBlacklistedWhenLoggedIn = false, children } : { isSecurePage?: boolean, headerEnabled?: boolean, isLoading?: boolean, isBlacklistedWhenLoggedIn?: boolean, children: React.ReactNode }) {
    
    const [user, setUser] = useRecoilState(userState);
    const [loading, setLoading] = useState(true);

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
                    error.type === "general_unauthorized_scope" && router.push("/account/login");
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
            router.push("/account/overview");
        }
    }

    if (loading) {
        return <Loading />
    } else {
        return (
            <>
                {headerEnabled && <Header isUserLoggedIn={user ? true : false} /> }
                <section className="container h-screen max-h-screen px-3 max-w-xl mx-auto flex flex-col">
                    <div className="my-auto p-16 rounded-lg text-center">
                        {children}
                    </div>
                </section>
            </>
        );
    }
}