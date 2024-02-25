import { IoIosArrowBack } from 'react-icons/io';
import './SidebarStyle.scss';
import { useState } from 'react';
// import { useAuthContext } from '../../contexts/auth/AuthContext';
// import { sidebarLoggedOpts } from '../../utils/constant/UserSidebarOpts';
// import { IoChevronDownOutline } from 'react-icons/io5';

export const SidebarComp = () => {
    // const { loggedUser } = useAuthContext();

    const [sidebarRenderType, setSidebarRenderType] = useState<boolean>(true);
    // const sidebarRenderOpt = sidebarLoggedOpts.get(loggedUser?.role_name!);

    return (
        <aside className={`sidebar_container ${sidebarRenderType ? '' : 'closed_type'}`}>
            <button className='handleBarDisplay' onClick={() => setSidebarRenderType(!sidebarRenderType)}>
                <IoIosArrowBack className='sidebar_icon'/>
            </button>
            <header>
                <img src={sidebarRenderType ? '/public/Logo_Color_Black.svg' : '/public/Icon_Color.svg'} alt="Flix Pro" />
            </header>
            <main>

            </main>
            <footer>
                
            </footer>
        </aside>
    )
}
