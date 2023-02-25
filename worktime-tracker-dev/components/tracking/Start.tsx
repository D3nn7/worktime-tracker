import Icon from "@mdi/react";
import { mdiPlay, mdiStopCircle } from "@mdi/js";
import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import { useStopwatch } from "react-timer-hook";
import { Toaster, toast } from "sonner";

interface Props {
    setIsTracking: (value: boolean) => void;
}

export default function Start(props: Props) {
    const [inputValue, setInputValue] = useState<string>("");
    const [isTracking, setIsTracking] = useState<boolean>(false);
    const [select, setSelect] = useState<string>("Select a category");
    const categories = [
        "Development",
        "Design",
        "Marketing",
        "Finance",
        "Testing",
        "Learning",
        "Fun",
        "Untracked",
        "Personal",
    ];

    const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
        useStopwatch({ autoStart: true });

    const handleTracking = () => {
        if (isTracking) {
            handleStop();
        } else {
            handleStart();
        }
    };

    const handleStart = () => {
        checkFieldsToStartTracking();
    };

    const handleStop = () => {
        stopTracking();
        resetTracking();
    };

    const checkFieldsToStartTracking = () => {
        if (inputValue !== "" && select !== "Select a category") {
            startTracking();
        } else {
            toast.error("Please fill in all fields");
        }
    };

    const startTracking = () => {
        start();
        setIsTracking(true);
        props.setIsTracking(true);
    };

    const stopTracking = () => {
        pause();
        setIsTracking(false);
        props.setIsTracking(false);
    };

    const resetTracking = () => {
        reset();
        setInputValue("");
        setSelect("Select a category");
    };

    return (
        <div className="grid grid-flow-row grid-cols-12">
            <div className="col-start-4 col-end-4 ">
                <button
                    onClick={handleTracking}
                    className=" p-8  bg-cyan-base flex mx-auto rounded-lg "
                >
                    {isTracking ? (
                        <Icon path={mdiStopCircle} size={3} />
                    ) : (
                        <Icon path={mdiPlay} size={3} />
                    )}
                </button>
            </div>
            <div className="grid-flow-col col-start-6 col-end-10 space-y-3">
                <input
                    type={"text"}
                    value={inputValue}
                    placeholder="Title of current task"
                    onChange={(event: any) => {
                        setInputValue(event.target.value);
                    }}
                    className="bg-account-input h-10 w-full pl-2 rounded-md focus:ring-0  outline-none border-[1px] border-[#505358] focus:border-cyan-base"
                    required={true}
                />
                <Dropdown
                    key={inputValue}
                    items={categories}
                    selection={select}
                    setSelect={setSelect}
                />
                {isTracking ? (
                    <div className="flex flex-row place-items-center">
                        <span className="pr-3">Duration</span>
                        <span className="px-5 py-1 bg-account-input rounded-lg">
                            {hours.toString().padStart(2, "0")}:
                            {minutes.toString().padStart(2, "0")}:
                            {seconds.toString().padStart(2, "0")}
                        </span>
                    </div>
                ) : null}
            </div>
            <Toaster richColors theme="dark" position="top-center" closeButton  />
        </div>
    );
}
