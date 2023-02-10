import NavBar from "../components/navigation/NavBarProductPage";
import Image from "next/image";
import Clock from "../assets/Clock.svg";
import Logo from "../assets/WorkTimeTrackerLogo.svg";
import TimeCards from "../components/productPage/TimeCards";
import Link from "next/link";
import Feature from "../components/productPage/Feature";
import PricingBox from "../components/productPage/PricingBox";
import Icon from "@mdi/react";
import { mdiHeart } from "@mdi/js";

export default function productPage() {
    const timeCardProps = [
        {
            category: "Meeting",
            description: "Meeting with Zoe",
            time: "09:00 - 11:00",
            hexColor: "#00BFA6",
        },
        {
            category: "infrasructure",
            description: "Update dependencies",
            time: "11:05 - 12:00",
            hexColor: "#FD8180",
        },
        {
            category: "development",
            description: "Contrebuting on open source",
            time: "12:00 - 14:45",
            hexColor: "#F47139",
        },
        {
            category: "development",
            description: "Developing amazing stuff",
            time: "15:00 - 17:00",
            hexColor: "#F47139",
        },
    ];
    return (
        <div>
            <NavBar />
            <div className="container mx-auto pt-60">
                <div className="flex flex-row place-items-center ">
                    <div className="flex flex-col pr-60 space-y-5">
                        <span className="text-xl">
                            Fed up with over-inflated and complicated time
                            tracking tools? <br /> No problem, just switch to
                            Worktime-Tracker, the really simple time tracking
                            tool.
                        </span>
                        <button className="px-4 py-2 bg-cyan-base rounded-md items-center w-48">
                            Start now for free
                        </button>
                    </div>
                    <div>
                        <Image src={Clock} alt="Clock" height={500} priority />
                    </div>
                </div>
                <div className="flex flex-col place-items-center pt-28">
                    <span className="text-4xl font-bold ">
                        The simple way to track worktime
                    </span>
                    <span className="text-2xl pt-3">
                        Comprehensive but still kept simple
                    </span>
                </div>
                <div className="flex flex-row pt-16 w-full place-items-center ">
                    <div className="pr-20 text-lg w-8/12 space-y-5">
                        <p>
                            It has never been so easy to record your working
                            time. Just enter what you are doing, add the
                            appropriate category and off you go. At the end of
                            the task simply stop again, and the rest happens all
                            by itself.
                        </p>
                        <p>
                            With the recorded time you can always see the
                            analysis of your tasks and categories to keep track
                            of yourself.
                        </p>
                        <div>
                            <p>So why are you still waiting?</p>
                            <Link
                                href={{ pathname: "./account/register" }}
                                className="text-color-reg-now"
                            >
                                Register here for free
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-5 w-4/12">
                        {timeCardProps.map((props, index) => (
                            <TimeCards
                                key={index}
                                category={props.category}
                                description={props.description}
                                time={props.time}
                                hexColor={props.hexColor}
                            />
                        ))}
                    </div>
                </div>
                <div className="pt-40 text-4xl font-bold">What is included</div>
                <div className="flex flex-row pt-8 w-full">
                    <div className="text-lg w-2/4 mr-auto">
                        Powerful tool with useful features to record your
                        working time in a simple and uncomplicated way.
                    </div>
                    <div className="w-2/4 space-x-10 justify-end flex flex-row">
                        <div>
                            <Feature feature="Calendar View" />
                            <Feature feature="List view" />
                            <Feature feature="Custom categories" />
                            <Feature feature="Analyses" />
                        </div>
                        <div>
                            <Feature feature="Sync between devices" />
                            <Feature feature="Data secured stored" />
                            <Feature feature="Timesheet sharing (soon)" />
                            <Feature feature="Desktop/Mobile version" />
                        </div>
                    </div>
                </div>
                <div className="w-full py-32">
                    <div className="text-center flex flex-col space-y-5 pb-10">
                        <span className="text-4xl">Pricing</span>
                        <span className="text-2xl">
                            We do not pursue profit, but the general benefit.
                        </span>
                    </div>
                    <PricingBox />
                </div>
                <div className="flex flex-col place-items-center pb-5">
                    <Image
                        src={Logo}
                        className="h-6 mr-3 sm:h-9"
                        alt="Logo"
                        priority
                    />
                    <span className="pt-1">
                        &copy; 2022 Worktime-Tracker. All rights reserved
                    </span>
                    <div className="flex flex-row">
                        <span>
                            Worktime-Tracker is a project created with&nbsp;
                        </span>
                        <Icon path={mdiHeart} size={1} color={"#FD8180"} />
                        <span>
                            &nbsp;by&nbsp;
                            <Link
                                href="https://github.com/D3nn7"
                                className="text-cyan-base"
                            >
                                Danny Schappeit
                            </Link>
                            <span>&nbsp;and&nbsp;</span>
                            <Link
                                href="https://github.com/Jonas22rr"
                                className="text-cyan-base"
                            >
                                Jonas Bott
                            </Link>
                        </span>
                    </div>
                    <div className="flex flex-row pt-1 space-x-2">
                        <Link href="https://github.com/D3nn7/worktime-tracker">
                            Github
                        </Link>
                        <Link href="https://github.com/D3nn7/worktime-tracker/">
                            Changelog
                        </Link>
                        <Link href="">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
