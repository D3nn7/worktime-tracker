import Image from "next/image";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Page from "../../components/page/page";
import { appwrite, userState } from "../../store/global";


const Secure = () => {
    const [user] = useRecoilState(userState);
    const [userProfilePicture, setUserProfilePicture] = useState<URL | undefined>(undefined);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user !== undefined && userProfilePicture !== undefined) {
            setLoading(false);
            return;
        }
        const fetchData = async () => {
            if (user !== undefined) {
                setUserProfilePicture(appwrite.avatars.getInitials(user?.name as string, 200, 200));
            }
        }
        fetchData();
    }, [user, userProfilePicture]);

    return (
        <Page isSecurePage={true} isLoading={loading}>
            <section className="container h-screen max-h-screen px-3 max-w-xl mx-auto flex flex-col">
                <div className="my-auto p-16 rounded-lg text-center">
                    <div className="font-bold text-3xl md:text-5xl lg:text-6xl">
                        Hej {user?.name}
                        <br />Verified {user?.emailVerification ? "✅" : "❌"}
                        <br />Created at <b>{user?.registration}</b>
                    </div>
                    <Image src={userProfilePicture?.href as unknown as string} alt={"Profile picture"} width={200} height={200} />
                </div>
            </section>
        </Page>
    );
};

export default Secure;
