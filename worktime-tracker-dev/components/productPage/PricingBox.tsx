import FeatureIncludes from "./FeatureIncludes";

export default function PricingBox() {
    return (
        <div className="bg-[#303030] w-full grid grid-cols-4 rounded-lg ">
            <div className="col-span-3 col-start-1 col-end-4 p-8 rounded-l-lg bg-[#262626]">
                <div className="flex flex-col">
                    <span className="text-3xl">Basic (Alpha)</span>
                    <span className="text-lg pt-3">
                        The all-encompassing worktime tracker with all the basic
                        functions you need to record your working time.
                    </span>
                    <div className="flex flex-row place-items-center space-x-5 py-5">
                        <span className="text-[#00BFA6] text-2xl">
                            Includes
                        </span>
                        <hr className=" border border-[#00BFA6] b-2 rounded-lg w-1/2" />
                    </div>
                    <div className="space-x-10 flex flex-row">
                        <div className="">
                            <FeatureIncludes feature="Time tracking" />
                            <FeatureIncludes feature="Calendar view" />
                            <FeatureIncludes feature="Unlimted custom categories " />
                        </div>
                        <div className="">
                            <FeatureIncludes feature="Ad-free" />
                            <FeatureIncludes feature="Analyses" />
                            <FeatureIncludes feature="And much more..." />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-start-4 col-end-4 m-auto">
                <div className="flex flex-col items-center">
                    <span>Forever ever</span>
                    <span className="text-3xl">Free</span>
                    <div className="pt-5">
                        <button className="px-3 py-2 bg-cyan-base rounded-md items-center ">
                            Get started now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
