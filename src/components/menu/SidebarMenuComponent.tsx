import React, { useState } from 'react';

import '../styles/SidebarMenuComponent.scss'; // Make sure to adjust the path accordingly

const SidebarMenuComponent: React.FC = () => {
const [isPanelOpen, setIsPanelOpen] = useState(false);

const closeSidebarPanel = () => {
    setIsPanelOpen(false);
};

const openSidebarPanel = () => {
    setIsPanelOpen(true);
};

const navigate = (page: string) => {
    console.log(`Navigating to ${page}`);
    // Implement your navigation logic here
};

return (
    <article>
    {isPanelOpen && (
        <>
        <div className="navbar-black-background" onClick={closeSidebarPanel}></div>
        <div className="navbar-white-bar">
            <div onClick={() => navigate('menuItem1')}>Doktorlar</div>
            <div onClick={() => navigate('menuItem2')}>Birimler</div>
            <div onClick={() => navigate('menuItem3')}>Hastalıklardan Nasıl Korunulur?</div>
            <div onClick={() => navigate('menuItem4')}>Yapay Zeka ve Akciğer Hastalıkları</div>
            <div className="navbar-button" id="navbar-return" onClick={closeSidebarPanel}>
            Geri Dön
            </div>
        </div>
        </>
    )}

        <div className="sidebar-menu">
            <button onClick={openSidebarPanel}>Open Sidebar</button>
        </div>
    </article>
);
};

export default SidebarMenuComponent;
