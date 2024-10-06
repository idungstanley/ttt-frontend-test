import { CSSProperties } from "react";

export interface ButtonProps {
    buttonStyle?: string;
    onClick?: () => void;
    loading?: boolean;
    label?: string | null;
    icon?: string | JSX.Element | React.ReactNode;
    width?: string | number;
    height?: string;
    padding?: string;
    disabled?: boolean;
    iconPosition?: string;
    ringOnFocus?: boolean;
    roundedLeft?: boolean;
    roundedRight?: boolean;
    borderLeft?: boolean;
    borderRight?: boolean;
    loaderColor?: string;
    value?: string | number | readonly string[] | undefined;
    bgColor?: string;
    type?: 'submit' | 'reset' | 'button' | undefined;
    labelSize?: string;
    customClasses?: string;
    style?: CSSProperties;
    labelClasses?: string;
}