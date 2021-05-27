import React, {FC} from "react";
import './importIcons'

interface IconProps {
    name: string;
}

const Icon: FC<IconProps> = (props) => {
    return (
        <span>
            <svg>
                <use xlinkHref={`#${props.name}`}/>
            </svg>
        </span>
    )
}
export default Icon