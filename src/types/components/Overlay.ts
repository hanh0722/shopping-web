import React from "react";
import { classNameProps } from "../className";

export interface OverlayProps extends classNameProps {
    isClickOutSide?: boolean;
    style?: React.CSSProperties;
    initialValue?: boolean;
    classNameAnimation?: string;
    conditionActive: boolean
}