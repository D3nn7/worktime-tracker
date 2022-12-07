export default function Login() {

    return (
        <div className="bg-gradient-to-b from-bg-from to-bg-to w-screen h-screen">
            <div className="bg-bg-base w-3/5 pt-44 pl-16" >
                <div className="flex items-center">
                    <div className="flex-initial mr-3">
                        <h1 className="text-xl">Logo</h1>
                    </div>
                    <div className="flex-initial">
                        <h1 className="text-2xl">Worktime Tracker</h1>
                    </div>
                </div>
                <div className="pt-10">
                    <span className="text-xl">Sign in to your account</span>
                </div>
                <div  >
                    <span className="text-md">Dont have an Account yet? <a href="" className="text-color-reg-now">Register here</a> for free!</span>
                </div>
                <form action="">
                    <div className="pt-10">
                        <label htmlFor="email" className="text-md">E-Mail</label>
                        <input type="email" id="email" name="email" className="h-10 pl-2 border-2 border-color-input rounded-md" required />
                    </div>
                    <div className="pt-5">
                        <label htmlFor="password" className="text-md">Password</label>
                        <input type="password" id="password" name="password" className="w-full h-10 pl-2 border-2 border-color-input rounded-md" required />
                    </div>
                    <div className="pt-5">
                        <button type="submit" className="w-full h-10 bg-color-button rounded-md text-white">Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    )
}