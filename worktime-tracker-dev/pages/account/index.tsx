import NavBar from "../../components/navigation/NavBarTracking";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { appwrite, userState } from "../../store/global";
import Page from "../../components/page/page";
import ChangePassword from "../../components/account/changePassword";
import { useRecoilState } from "recoil";
import EnterPassword from "../../components/account/EnterPassword";


export default function Account() {
    const [user] = useRecoilState(userState);
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(true);
    const [userProfilePicture, setUserProfilePicture] = useState<URL | undefined>(undefined);
    const [showPopup, setShowPopup] = useState<boolean>(false);

    const fetchData = async () => {
            if (user !== undefined) {
                setUserProfilePicture(appwrite.avatars.getInitials(user?.name, 200, 200));
            }
        }

    useEffect(() => {
        if (user !== undefined && userProfilePicture !== undefined) {
            setName(user.name);
            setEmail(user.email);
            setLoading(false);
            return;
        }
        fetchData();
    }, [user, userProfilePicture]);

    const handleChanges = async () => {
        setShowPopup(true)
    }

    const saveChanges = () => {
        if (password !== "") {
            appwrite.account.updateEmail(email, password);
            appwrite.account.updateName(name)
        }
    }

    const handlePassword = (password: string) => {
        setPassword(password);
        saveChanges()
    }

    return (
        <Page isSecurePage={true} isLoading={loading}>
            <div className="pl-40 pr-20 mx-auto container">
                <div className="flex flex-row">
                    <div className="flex-initial mr-10">
                        <button
                            type="button"
                            className="bg-orange-base hover:bg-orange-300 text-bg-base text-5xl rounded-lg p-6 text-center mr-3 md:mr-0"
                        >
                            JB
                        </button>
                    </div>
                    <div className="w-full">
                        <div className="pb-10">
                            <h1 className="text-3xl pb-8">Hi {user?.name}</h1>
                            <form action="">
                                <div className="flex flex-col pb-5">
                                    <label htmlFor="" className="pb-1">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="idName"
                                        value={name}
                                        onChange={(event) => setName(event.target.value)}
                                        className="bg-account-input h-10 w-account-input pl-2 rounded-md outline-none border-[1px] border-[#505358] focus:border-cyan-base"
                                    />
                                </div>
                                <div className="flex flex-col pb-5">
                                    <label htmlFor="" className="pb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="idMail"
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        name="mail"
                                        className="bg-account-input h-10 w-account-input pl-2 rounded-md outline-none border-[1px] border-[#505358] focus:border-cyan-base"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col w-20">
                                    <button
                                        type="button"
                                        onClick={handleChanges}
                                        className="bg-cyan-base hover:bg-teal-600 focus:ring-0 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                        <hr className="fill-[#303030]" />
                        <div className="pt-10 flex-row">
                            <button className="py-2.5 px-5 bg-orange-base rounded-lg text-bg-base mr-5">
                                <Link href="/account/resetPassword">
                                    Change password
                                </Link>
                            </button>
                            <button
                                hidden
                                className="py-2.5 px-5 w-[170px] rounded-lg text-bg-base bg-red-base"
                            >
                                Delete account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {showPopup ? <EnterPassword closePopup={() => setShowPopup(false)} handlePassword={handlePassword} /> : null }
        </Page>
    );
}