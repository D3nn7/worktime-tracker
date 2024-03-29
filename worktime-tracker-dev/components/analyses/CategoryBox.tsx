import { IAnalysesCategoryBoxProps as Props } from "../../lib/types/props";
import Dropdown from "./Dropdown";
import { DonutChart } from "react-circle-chart";
import { useEffect, useState } from "react";

export default function CategoryBox(props: Props) {
    const [animate, setAnimate] = useState<boolean>(false);

    useEffect(() => {
        setAnimate(true);
        setTimeout(() => {
            setAnimate(false);
        }, 1000);
    }, []);

    return (
        <div className="bg-account-input py-3 pl-4 h-92 w-auto rounded-lg">
            <div className="flex flex-row content-center items-center ">
                <span className="text-[#818181] m-5">{props.average}</span>
                <Dropdown />
            </div>
            <div
                className={`w-full flex flex-col justify-center items-center ${
                    animate ? "animate-spin" : null
                }`}
            >
                <DonutChart
                    items={[
                        { value: 30, label: "Logistik", color: "#00BFA6" },
                        { value: 25, label: "Fachbereich" },
                        { value: 45, label: "IT" },
                    ]}
                    size={280}
                    backgroundTooltipColor="#303030"
                    showTotal={false}
                    totalTextColor="aliceblue"
                    tooltipSx={{ fontSize: "1.2rem", borderRadius: "8px" }}
                />
            </div>
        </div>
    );
}
