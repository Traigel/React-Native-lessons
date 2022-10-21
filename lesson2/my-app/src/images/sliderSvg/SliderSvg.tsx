import React from 'react';
import Svg, {SvgProps, Path} from "react-native-svg";

type IProps = {
    color?: string
}

export const SliderSvg = (props: SvgProps & IProps) => {
    return (
        <Svg
            width={24}
            height={24}
            fill="none"
            {...props}
        >
            <Path
                d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"
                stroke={props.color ? props.color : "#000"}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}