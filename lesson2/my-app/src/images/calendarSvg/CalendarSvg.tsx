import React from 'react';
import Svg, {SvgProps, Path} from "react-native-svg";

type IProps = {
    color?: string
}

export const CalendarSvg = (props: SvgProps & IProps) => {
    return (
        <Svg
            width={25}
            height={25}
            fill="none"
            {...props}
        >
            <Path
                d="M19.792 3.889H5.208c-1.15 0-2.083.87-2.083 1.944v13.612c0 1.073.933 1.944 2.083 1.944h14.584c1.15 0 2.083-.87 2.083-1.944V5.833c0-1.074-.933-1.944-2.083-1.944ZM16.667 1.944v3.89M8.333 1.944v3.89M3.125 9.722h18.75"
                stroke={props.color ? props.color : "#000"}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}