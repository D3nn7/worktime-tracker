import { IFeatureProps as Props } from "../../lib/types/types";
import Icon from "@mdi/react";
import { mdiCheckBold } from "@mdi/js";

export default function Feature(props: Props) {
    return (
        <div className="flex flex-row space-x-3 ">
            <Icon path={mdiCheckBold} size={1} color="#00BFA6" />
            <span className="text-lg">{props.feature}</span>
        </div>
    );
}
