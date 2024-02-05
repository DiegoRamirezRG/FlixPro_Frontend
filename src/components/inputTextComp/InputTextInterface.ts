import { HTMLInputTypeAttribute } from "react";

export interface InputTextCompInterface {
    id: string;
    name: string;
    label: string | null;
    placeholder: string;
    iconBtn?: JSX.Element;
    type: HTMLInputTypeAttribute;
}