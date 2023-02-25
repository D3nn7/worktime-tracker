import NavBar from "../../components/navigation/NavBarTracking";
import Link from "next/link";

export default function Account() {
    return (
        <div>
            <NavBar />
            <div className="pl-40 pt-40 pr-20 mx-auto container">
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
                            <h1 className="text-3xl pb-8">Hej Jonas Bott</h1>
                            <form action="">
                                <div className="flex flex-col pb-5">
                                    <label htmlFor="" className="pb-1">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="idName"
                                        className="bg-account-input h-10 w-account-input pl-2 rounded-md outline-none"
                                    />
                                </div>
                                <div className="flex flex-col pb-5">
                                    <label htmlFor="" className="pb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="idMail"
                                        name="mail"
                                        className="bg-account-input h-10 w-account-input pl-2 rounded-md outline-none"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col w-20">
                                    <button
                                        type="button"
                                        className="bg-cyan-base hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
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
                            <button className="py-2.5 px-5 w-[170px] rounded-lg text-bg-base bg-red-base">
                                Delete account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
