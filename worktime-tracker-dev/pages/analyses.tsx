import NavBar from "../components/navigation/NavBarTracking";
import TimeBox from "../components/analyses/TimeBox";
import CategoryBox from "../components/analyses/CategoryBox";

export default function Analyses() {
    return (
        <div className="bg-bg-base h-screen w-screen">
            <NavBar />
            <div className="container mx-auto pt-40">
                <div className="text-3xl">Analyses</div>
                <div className="flex flex-row pt-10">
                    <div className="flex-col basis-1/3  pr-16">
                        <TimeBox
                            average="Daily average"
                            time="07:05:35"
                            style="mb-8"
                        />
                        <TimeBox
                            average="Weekly average"
                            time="07:05:35"
                            style="mb-8"
                        />
                        <TimeBox average="Monthly average" time="07:05:35" />
                    </div>
                    <div className="basis-2/3">
                        <CategoryBox average="Category average" />
                    </div>
                </div>
            </div>
        </div>
    );
}
