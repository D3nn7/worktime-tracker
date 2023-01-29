import Register from "../../components/account/Register";
import Login from "../../components/account/Login";
import Verify from "../../components/account/Verify";
import ResetPassword from "../../components/account/ResetPassword";
import { NextRequest } from "next/server";
import { useRouter } from "next/router";
import Account from "../../components/account/Account";
import Image from "next/image";
import Logo from "../../assets/Logo.svg";

export default function AccountDefault(req: NextRequest) {
    const router = useRouter();

    const checkAccount = (): JSX.Element => {
        switch (router.query.id) {
            case "login":
                return <Login />;
            case "register":
                return <Register />;
            case "verify":
                return <Verify />;
            case "resetPassword":
                return <ResetPassword />;
            case "account":
                return <Account />;
            default:
                return <div>register</div>;
        }
    };

    const getSite = (): JSX.Element => {
        if (router.query.id === "account") {
            return (
                <div className="bg-bg-base h-screen w-screen">
                    <Account />
                </div>
            );
        } else {
            return (
                <div className="bg-gradient-to-b from-cyan-base to-green-base w-screen h-screen">
                    <div className="bg-bg-base w-3/5 pt-32 pl-16 h-screen">
                        <div className="flex flex-row">
                            <div className="flex-initial mr-3">
                                <Image src={Logo} alt="Logo" width={30} />
                            </div>
                            <div className="flex-initial">
                                <h1 className="text-2xl">Worktime Tracker</h1>
                            </div>
                        </div>
                        <div className="flex flex-col">{checkAccount()}</div>
                    </div>
                </div>
            );
        }
    };

    return <>{getSite()}</>;
}
