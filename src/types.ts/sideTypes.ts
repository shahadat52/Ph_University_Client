import { ReactNode } from "react";

export type TSidebarItem = {
    key: string;
    label: ReactNode,
    children?: TSidebarItem[]
}
export type TRoute = {
    name: string
    path: string;
    element: ReactNode;
}

export type TItems = {
    name: string;
    path?: string;
    element?: ReactNode;
    children?: TRoute[]
}