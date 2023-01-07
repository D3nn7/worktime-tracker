export default function login() {
    return (
        <>
            <div className="pt-10">
                <span className="text-xl">Sign in to your account</span>
            </div>
            <div>
                <span className="text-md">
                    Dont have an Account yet?{" "}
                    <a href="" className="text-color-reg-now">
                        Register here
                    </a>{" "}
                    for free!
                </span>
            </div>
            <form action="">
                <div className="pt-10 flex flex-col">
                    <label htmlFor="email" className="text-md">
                        E-Mail
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="h-10 w-account-input pl-2 border-2 border-color-input text-black rounded-md"
                        required
                    />
                </div>
                <div className="pt-5 flex flex-col">
                    <label htmlFor="password" className="text-md">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="h-10 w-account-input pl-2 border-2 border-color-input text-black rounded-md"
                        required
                    />
                </div>
                <div className="pt-10">
                    <button
                        type="submit"
                        className="px-4 py-2  bg-cyan-base rounded-md text-white"
                    >
                        Sign in
                    </button>
                </div>
            </form>
        </>
    );
}
