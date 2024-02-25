import { SidebarComp } from '../sidebarComp/SidebarComp'
import './LayoutWrapperStyle.scss'

interface LayoutWrapperInterface {
    children: JSX.Element;
}

export const LayoutWrapperComp = ({ children }: LayoutWrapperInterface) => {
    return (
        <section className="layout_wrapper">
            <SidebarComp/>
            <div className="renderPageContainer">
                { children }
            </div>
        </section>
    )
}
