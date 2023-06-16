import { IconType } from "react-icons/lib";
import { MdHome, MdSettings, MdProductionQuantityLimits, MdStore } from "react-icons/md";

export type Route = {
    path: string;
    icon: IconType,
    name: string;
}

const dashboardPath = "/dashboard";

export const routes: Route[] = [
    {
        path: `${dashboardPath}`,
        icon: MdHome,
        name: "Home"
    },
    {
        path: `${dashboardPath}/productos`,
        icon: MdProductionQuantityLimits,
        name: "Productos"
    },
    {
        path: `${dashboardPath}/tiendas`,
        icon: MdStore,
        name: "Tienda"
    },
    {
        path: `${dashboardPath}/configuracion`,
        icon: MdSettings,
        name: "Settings"
    }
]