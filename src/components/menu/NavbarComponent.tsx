import React, { useState } from 'react';
import './NavbarComponent.scss';  // Stil dosyasını ekleyin
import questionImg from '../../assets/questionImg.png';
import peopleFill from '../../assets/peopleFill.png';
import { SideSlide } from "../SideSlide";
import { Link } from 'react-router-dom';

interface NavbarComponentProps {
    isDoctor: boolean;
    isPatient: boolean;
    isAdmin: boolean;
}

const Navbar: React.FC<NavbarComponentProps> = (props) => {
    const { isDoctor, isPatient, isAdmin } = props;
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isAvatarOpen, setAvatarOpen] = useState(false);


    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const toggleAvatar = () => {
        setAvatarOpen(!isAvatarOpen);
    };

    const navigate = (page: string) => {
        return <Link to={page}></Link>
    };

    return (
        <div className='navbar-parent-element'>
            <div className="navbar">
                <div className="navbar-menu-icon" onClick={toggleMenu}>☰</div>
                {isAdmin && (
                    <Link to="/admin" className="navbar-bold-font"><div>Anasayfa</div></Link>
                )}
                {!isAdmin && (
                    <div><Link to="/home" className="navbar-bold-font">Anasayfa</Link></div>
                )}
                {isDoctor && (
                    <>
                        <Link to="/patients" className="navbar-soft"><div>Hastalar</div></Link>
                        <Link to="/reports" className="navbar-soft"><div>Raporlar</div></Link>
                    </>
                )}
                {isPatient && (
                    <Link to="/reports" className="navbar-soft"><div>Raporlarım</div></Link>
                )}
                {isAdmin && (
                    <Link to="/admin/doctors" className="navbar-soft"><div>Doktorlar</div></Link>
                )}
                <div id="navbar-right-align">
                    {!isAdmin && (
                        <>
                            <Link to="/about" className="navbar-soft"><div>Hakkında</div></Link>

                        </>
                    )}
                    <Link to=""> <img src={questionImg} alt="Question Icon" className="navbar-question-icon" /></Link>
                    <img onClick={toggleAvatar} src={peopleFill} alt="Avatar Icon" className="navbar-avatar-icon" />
                </div>
            </div>
            <SideSlide isAvatar={false} isMenu={true} isOpen={isMenuOpen}>
                <>
                    <div className='sidebar'>
                        <div id="navbar-white-bar" >
                            {!isAdmin && (
                                <>
                                    <Link to="/doctors" className="navbar-soft"><div>Doktorlar</div></Link>
                                    <Link to="/depatments" className="navbar-soft"><div>Birimler</div></Link>
                                    <Link to="/diseases" className="navbar-soft"><div>Hastalıklardan Nasıl Korunulur?</div></Link>
                                    <Link to="/artificialintelligence" className="navbar-soft"><div>Yapay Zeka ve Akciğer Hastalıkları</div></Link>
                                </>
                            )}
                            {isAdmin && (
                                <Link to="/admin/doctors" className="navbar-soft"><div>Doktorlar</div></Link>
                            )}

                            <div className="navbar-button" id="navbar-return" onClick={toggleMenu}>Geri Dön</div>
                        </div>
                    </div>
                    <div id='navbar-black-background' onClick={toggleMenu}></div>
                </>
            </SideSlide>
            <SideSlide isAvatar={true} isMenu={false} isOpen={isAvatarOpen}>
                <>
                    <div className='sidebar'>
                        <div id="navbar-white-bar-avatar">
                            {!isAdmin && (
                                <>
                                    <img src={peopleFill} className="navbar-avatar-icon" id="navbar-big-avatar" alt="Big Avatar" />
                                    <div>Buğra Burak Başer</div>
                                    <Link to="/profile" className="navbar-soft"><div id="navbar-link">Profili Düzenle</div></Link>
                                    <div id="navbar-avatar-buttons">
                                        <div className="navbar-button" id="navbar-logout" onClick={() => navigate('logout')}><Link to="/" className="navbar-soft">Çıkış Yap</Link></div>
                                        <div className="navbar-button" id="navbar-return" onClick={toggleAvatar}>Geri Dön</div>
                                    </div>
                                </>
                            )}
                            {isAdmin && (<>
                                <img src={peopleFill} className="navbar-avatar-icon" id="navbar-big-avatar" alt="Big Avatar" />
                                <div>Admin</div>
                                <div id="navbar-avatar-buttons">
                                    <div className="navbar-button" id="navbar-logout" onClick={() => navigate('logout')}><Link to="/admin/login" className="navbar-soft">Çıkış Yap</Link></div>
                                    <div className="navbar-button" id="navbar-return" onClick={toggleAvatar}>Geri Dön</div>
                                </div>
                            </>)}

                        </div>
                    </div>
                    <div id='navbar-black-background' onClick={toggleAvatar}></div>
                </>
            </SideSlide>
        </div>
    );
};

export default Navbar;
