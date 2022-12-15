export default function Register() {
    return (
        <div className="bg-gradient-to-b from-bg-from to-bg-to w-screen h-screen">
            <div className="bg-bg-base w-3/5 pt-32 pl-16 h-screen" >
                <div className="flex items-center">
                    <div className="flex-initial mr-3">
                        <h1 className="text-xl">Logo</h1>
                    </div>
                    <div className="flex-initial">
                        <h1 className="text-2xl">Worktime Tracker</h1>
                    </div>
                </div>
                <div className="pt-10">
                    <span className="text-xl">Get started today for free</span>
                </div>
                <div  >
                    <span className="text-md">Already have an account? <a href="" className="text-color-reg-now">Login here</a>.</span>
                </div>
                <form action="">
                    <div className="pt-10 flex flex-col">
                            <label htmlFor="email" className="text-md">E-Mail</label>
                            <input type="email" id="email" name="email" className="h-10 w-account-input pl-2 border-2 border-color-input text-black rounded-md" required />
                    </div>
                    <div className="pt-5 flex flex-col">
                        <label htmlFor="password" className="text-md">Password</label>
                        <input type="password" id="password" name="password" className="h-10 w-account-input pl-2 border-2 border-color-input text-black rounded-md" required />
                    </div>
                    <div className="pt-5 flex flex-col">
                        <label htmlFor="password" className="text-md">Re-enter password</label>
                        <input type="password" id="reenteredPassword" name="password" className="h-10 w-account-input pl-2 border-2 border-color-input text-black rounded-md" required />
                    </div>
                    <div className="pt-10">
                        <button type="submit" className="px-4 py-2  bg-bg-from rounded-md text-white">Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    )
}