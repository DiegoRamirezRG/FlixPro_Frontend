import { BiSolidCameraMovie } from "react-icons/bi";
import { GiTheater } from "react-icons/gi";
import { RiDashboardFill, RiMovie2Fill } from "react-icons/ri";

interface UserSidebarOptInterface {
    icon: JSX.Element;
    text: string;
    route: string;
    isCollapsible: boolean;
    collapsed?: UserSidebarOptInterface[];
    notificationBubble?: string;
    hasTitle?: string; 
}

const softwareAdminOpt: UserSidebarOptInterface[] = [
    { icon: <RiDashboardFill/>, text: 'Dashboard', route: '', isCollapsible: false, notificationBubble: ''},
]

const adminOpts : UserSidebarOptInterface[] = [
    { icon: <RiDashboardFill className='item_icon'/>, text: 'Dashboard', route: '', isCollapsible: false, hasTitle: 'Main'},
    { icon: <BiSolidCameraMovie className='item_icon'/>, text: 'Funciones', route: '', isCollapsible: false, notificationBubble: '9' },
    { icon: <RiMovie2Fill className='item_icon'/>, text: 'Peliculas', route: '', isCollapsible: false },
    { icon: <GiTheater className='item_icon'/>, text: 'Salas', route: '', isCollapsible: false, notificationBubble: '2' },
    { icon: <GiTheater className='item_icon'/>, text: 'Collapsible', route: '', isCollapsible: true, collapsed: [
        { icon: <RiDashboardFill/>, text: 'Dashboard', route: '', isCollapsible: false, notificationBubble: ''},
    ] },
];

export const sidebarLoggedOpts = new Map<string,  UserSidebarOptInterface[]>([
    [ 'GOD', softwareAdminOpt ],
    [ 'ADMIN_GODLIKE', adminOpts ]
]);