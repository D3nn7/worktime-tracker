import { useEffect, useState } from "react";
import Icon from "@mdi/react";
import { mdiPlusCircle, mdiClose } from "@mdi/js";

interface Props {
    closePopup: () => void;
    handlePassword: (password: string) => void;
}

export default function EnterPassword(props: Props) {
    const [password, setPassword] = useState<string>("");
    const [isOpen, setIsOpen] = useState(false);

    const handleSavePassword = () => {
        props.handlePassword(password);
        setTimeout(() => {
            props.closePopup();
        }, 400);
    }

    const handleClosePopup = () => {
        setIsOpen(false);
        setTimeout(() => {
            props.closePopup();
        }, 400);
    };

    useEffect(() => {
        setIsOpen(true);
    }, []);

    return (
        <>
            <div className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-50 z-10 flex justify-center items-center">
                <div className={`bg-[#303030] py-16 px-10 rounded-xl transition-all  duration-500 ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}>
                    <div className="w-full h-10 flex justify-between items-center pb-10">
                        <span className="text-2xl">Enter Password</span>
                        <button
                            onClick={handleClosePopup}
                            className="text-2xl font-semibold"
                        >
                            <Icon path={mdiClose} size={1.3} />
                        </button>
                    </div>
                    <div>
                        Enter your Passwort to save the changes
                    </div>
                    <div className="w-full flex flex-col space-y-5">
                        <div className="space-y-2">
                            <label className="text-sm"></label>
                            <input
                                type="password"
                                value={password}
                                onChange={(event) =>
                                    setPassword(event.target.value)
                                }
                                className="bg-account-input h-10 w-full rounded-md outline-none focus:ring-0 pl-2 border-[1px] border-[#505358] focus:border-cyan-base"
                                required={true}
                            />
                        </div>
                    
                        <div className="float-left">
                            <button
                                className="px-4 py-2 bg-cyan-base hover:opacity-75 rounded-md flex items-center"
                                onClick={handleSavePassword}
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
                </div>
            </div>
        </>
    );
}
