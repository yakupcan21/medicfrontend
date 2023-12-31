import React, { useState } from 'react';
import './NavbarComponent.scss';  // Stil dosyasını ekleyin
import questionImg from '../../assets/questionImg.png';
import peopleFill from '../../assets/peopleFill.png';
import { CSSTransition } from 'react-transition-group';


interface NavbarComponentProps {
}

const Navbar: React.FC<NavbarComponentProps> = (props) => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isAvatarOpen, setAvatarOpen] = useState(false);
    

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const toggleAvatar = () => {
        setAvatarOpen(!isAvatarOpen);
    };

    const navigate = (page: string) => {
        console.log("Navigating to " + page);
    };

    return (
        <article>
            <div className="navbar">
                <div className="navbar-menu-icon" onClick={toggleMenu}>☰</div>
                <div className="navbar-bold-font" onClick={() => navigate('Home')}>anasayfa</div>
                <div id="navbar-right-align">
                    <div onClick={() => navigate('about')}>hakkında</div>
                    <img src={questionImg} alt="Question Icon" className="navbar-question-icon" />
                    <img onClick={toggleAvatar} src={peopleFill} alt="Avatar Icon" className="navbar-avatar-icon" />
                </div>
            </div>
            {isMenuOpen && (<CSSTransition in={isMenuOpen}
                timeout={300}
                classNames={{
                    enter: 'sidebar-enter',
                    enterActive: 'sidebar-enter-active',
                    exit: 'sidebar-exit',
                    exitActive: 'sidebar-exit-active',
                }}
                unmountOnExit>
                <div className='sidebar'>
                    <div id="navbar-white-bar" >
                        <div onClick={() => navigate('menuItem1')}>Doktorlar</div>
                        <div onClick={() => navigate('menuItem2')}>Birimler</div>
                        <div onClick={() => navigate('menuItem3')}>Hastalıklardan Nasıl Korunulur?</div>
                        <div onClick={() => navigate('menuItem4')}>Yapay Zeka ve Akciğer Hastalıkları</div>
                        <div className="navbar-button" id="navbar-return" onClick={toggleMenu}>Geri Dön</div>
                    </div>
                    <div id="navbar-black-background" onClick={toggleMenu}></div>
                </div>
            </CSSTransition>)}
            {isAvatarOpen && (<CSSTransition in={isAvatarOpen}
                timeout={300}
                classNames={{
                    enter: 'sidebar-enter',
                    enterActive: 'sidebar-enter-active',
                    exit: 'sidebar-exit',
                    exitActive: 'sidebar-exit-active',
                }}
                unmountOnExit>
                <div className='sidebar'>
                    <div id="navbar-white-bar-avatar">
                        <img src={peopleFill} className="navbar-avatar-icon" id="navbar-big-avatar" alt="Big Avatar" />
                        <div>Buğra Burak Başer</div>
                        <div id="navbar-link" onClick={() => navigate('profile')}>Profili Düzenle</div>
                        <div id="navbar-avatar-buttons">
                            <div className="navbar-button" id="navbar-logout" onClick={() => navigate('logout')}>Çıkış Yap</div>
                            <div className="navbar-button" id="navbar-return" onClick={toggleAvatar}>Geri Dön</div>
                        </div>
                    </div>
                    <div id="navbar-black-background" onClick={toggleAvatar}></div>
                </div>
            </CSSTransition>)}
        </article>
    );
};

export default Navbar;
