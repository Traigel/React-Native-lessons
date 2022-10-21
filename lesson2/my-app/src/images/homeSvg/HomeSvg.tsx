import * as React from "react"
import Svg, {SvgProps, Path} from "react-native-svg"

type IProps = {
    color?: string
}

export const HomeSvg = (props: SvgProps & IProps) => {
    return (
        <Svg
            width={25}
            height={25}
            fill="none"
            {...props}
        >
            <Path
                d="M3.125 9.375 12.5 2.083l9.375 7.292v11.458a2.083 2.083 0 0 1-2.083 2.084H5.208a2.083 2.083 0 0 1-2.083-2.084V9.375Z"
                stroke={props.color ? props.color : "#000"}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M9.375 22.917V12.5h6.25v10.417"
                stroke="#000"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}