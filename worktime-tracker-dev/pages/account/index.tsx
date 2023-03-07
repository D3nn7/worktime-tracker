import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { appwrite, userState } from "../../store/global";
import Page from "../../components/page/page";
import { useRecoilState } from "recoil";
import EnterPassword from "../../components/account/EnterPassword";
import ChangePassword from "../../components/account/ChangePassword";

export default function Account() {
    const [user] = useRecoilState(userState);
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const [showEnterPasswordPopup, setShowEnterPasswordPopup] = useState<boolean>(false);
    const [showChangePasswordPopup, setShowChangePasswordPopup] = useState<boolean>(false);

    useEffect(() => {
        if (user !== undefined) {
            setName(user.name);
            setEmail(user.email);
            setLoading(false);
            return;
        }
    }, [user]);

    const handleChanges = async () => {
        setShowEnterPasswordPopup(true);
    };

    const saveChanges = () => {
        if (password !== "") {
            appwrite.account.updateEmail(email, password);
            appwrite.account.updateName(name);
        }
    };

    const handlePassword = (password: string) => {
        setPassword(password);
        saveChanges();
    };

    const handleChangePassword = () => {
        setShowChangePasswordPopup(true);
    };

    return (
        <Page isSecurePage={true} isLoading={loading}>
            <div className="pl-40 pt-40 pr-20 mx-auto container">
                <div className="flex flex-row">
                    <div className="flex-initial mr-10">
                        <Image className="rounded-lg" src={user?.profilePicture.href as unknown as string} alt={"Profile picture"} width={200} height={200} />
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
                                        onChange={(event) =>
                                            setName(event.target.value)
                                        }
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
                                        onChange={(event) =>
                                            setEmail(event.target.value)
                                        }
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
                            <button
                                onClick={handleChangePassword}
                                className="py-2.5 px-5 bg-orange-base rounded-lg text-bg-base mr-5"
                            >
                                Change password
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
            {showEnterPasswordPopup ? (
                <EnterPassword
                    closePopup={() => setShowEnterPasswordPopup(false)}
                    handlePassword={handlePassword}
                />
            ) : null}
            {showChangePasswordPopup ? (
                <ChangePassword
                    closePopup={() => setShowChangePasswordPopup(false)}
                />
            ) : null}
        </Page>
    );
}
