import { FormEvent, useEffect, useState } from "react";
import Icon from "@mdi/react";
import { mdiPlusCircle, mdiClose } from "@mdi/js";
import { appwrite } from "../../store/global";

interface Props {
    closePopup: () => void;
}

export default function ChangePassword(props: Props) {
    const [currentPassword, setCurrentPassword] = useState<string>("");
    const [newPassword, setNewPassword] = useState<string>("");
    const [retypedNewPassword, setRetypedNewPassword] = useState<string>("");
    const [isOpen, setIsOpen] = useState(false);

    const handleClosePopup = () => {
        setIsOpen(false);
        setTimeout(() => {
            props.closePopup();
        }, 400);
    };

    useEffect(() => {
        setIsOpen(true);
    }, []);

    const changePassword = async (event: FormEvent<EventTarget>) => {
        event.preventDefault();
        try {
            const result = await appwrite.account.updatePassword(
                newPassword,
                currentPassword
            );
            console.log(result);
        } catch (error: any) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-50 z-10 flex justify-center items-center">
                <div
                    className={`bg-[#303030] py-16 px-10 rounded-xl transition-all  duration-500 ${
                        isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
                    }`}
                >
                    <div className="w-full h-10 flex justify-between items-center pb-10">
                        <span className="text-2xl">Enter Password</span>
                        <button
                            onClick={handleClosePopup}
                            className="text-2xl font-semibold"
                        >
                            <Icon path={mdiClose} size={1.3} />
                        </button>
                    </div>
                    <div>Enter your Passwort to save the changes</div>
                    <form action="submit" onSubmit={changePassword}>
                        <div className="w-full flex flex-col space-y-5 pt-5">
                            <div className="space-y-2 ">
                                <label className="text-sm">
                                    Current password
                                </label>
                                <input
                                    type="password"
                                    value={currentPassword}
                                    onChange={(event) =>
                                        setCurrentPassword(event.target.value)
                                    }
                                    className="bg-account-input h-10 w-full rounded-md outline-none focus:ring-0 pl-2 border-[1px] border-[#505358] focus:border-cyan-base"
                                    required={true}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm">New password</label>
                                <input
                                    type="password"
                                    value={newPassword}
                                    onChange={(event) =>
                                        setNewPassword(event.target.value)
                                    }
                                    className="bg-account-input h-10 w-full rounded-md outline-none focus:ring-0 pl-2 border-[1px] border-[#505358] focus:border-cyan-base"
                                    required={true}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm">
                                    Retype new password
                                </label>
                                <input
                                    type="password"
                                    value={retypedNewPassword}
                                    onChange={(event) =>
                                        setRetypedNewPassword(
                                            event.target.value
                                        )
                                    }
                                    className="bg-account-input h-10 w-full rounded-md outline-none focus:ring-0 pl-2 border-[1px] border-[#505358] focus:border-cyan-base"
                                    required={true}
                                />
                            </div>

                            <div className="float-left">
                                <button
                                    className="px-4 py-2 bg-cyan-base hover:opacity-75 rounded-md flex items-center"
                                    disabled={
                                        !currentPassword ||
                                        !newPassword ||
                                        !retypedNewPassword ||
                                        newPassword === currentPassword ||
                                        retypedNewPassword !== newPassword
                                    }
                                    type="submit"
                                >
                                    <Icon
                                        path={mdiPlusCircle}
                                        size={1}
                                        color="white"
                                    />
                                    <span>&nbsp;Save</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
