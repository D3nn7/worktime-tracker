import Icon from "@mdi/react";
import { mdiCheckCircle } from "@mdi/js";
import { IFeatureProps as Props } from "../../lib/types/types";

export default function FeatureIncludes(props: Props) {
    return (
        <div className="flex flex-row space-x-3 ">
            <Icon path={mdiCheckCircle} size={1} color="#00BFA6" />
            <span className="text-lg">{props.feature}</span>
        </div>
    );
}
