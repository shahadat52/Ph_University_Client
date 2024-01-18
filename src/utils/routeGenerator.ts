import { ReactNode } from "react";

type TSidebarItem = {
    path?: string;
    element?: ReactNode;
    children?: TSidebarItem[]
}
type TRoute = {
    path: string;
    element: ReactNode;
}

export const routeGenerator = (items: TSidebarItem[]) => {
    const adminRoutes = items.reduce((acc: TRoute[], item) => {
        if (item.path && item.element) {
            acc.push({
                path: item.path,
                element: item.element
            })
        }

        if (item.children) {
            item.children.forEach(child => acc.push({
                path: child.path as string,
                element: child.element
            }))
        }
        return acc
    }, [])

    return adminRoutes
}