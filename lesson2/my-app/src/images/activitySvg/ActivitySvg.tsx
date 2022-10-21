import React from 'react';
import Svg, {SvgProps, Path} from "react-native-svg"

type IProps = {
    color?: string
}

export const ActivitySvg = (props: SvgProps & IProps) => {
    return (
        <Svg
            width={25}
            height={25}
            fill="none"
            {...props}
        >
            <Path
                d="M22.917 12.5H18.75l-3.125 9.375-6.25-18.75L6.25 12.5H2.083"
                stroke={props.color ? props.color : "#000"}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}