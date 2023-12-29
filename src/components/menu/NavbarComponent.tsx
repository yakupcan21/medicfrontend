import React, { useState } from 'react';
import './NavbarComponent.scss';  // Stil dosyasını ekleyin
import questionImg from '../../assets/questionImg.png';
import peopleFill from '../../assets/peopleFill.png';
import { SideSlide } from "../SideSlide";
import { Link } from 'react-router-dom';

interface NavbarComponentProps {
    isDoctor: boolean;
    isPatient: boolean;
}

const Navbar: React.FC<NavbarComponentProps> = (props) => {
    const { isDoctor, isPatient } = props;
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
        <article>

            <div className="navbar">
                <div className="navbar-menu-icon" onClick={toggleMenu}>☰</div>
                <div><Link to="/home" className="navbar-bold-font">Anasayfa</Link></div>
                {isDoctor && (
                    <>
                        <Link to="/patients" className="navbar-soft"><div>Hastalar</div></Link>
                        <Link to="/reports" className="navbar-soft"><div>Raporlar</div></Link>
                    </>
                )}
                {isPatient && (
                    <Link to="/reports" className="navbar-soft"><div>Raporlarım</div></Link>
                )}
                <div id="navbar-right-align">
                    <Link to="/about" className="navbar-soft"><div>Hakkında</div></Link>
                    <Link to="/about"> <img src={questionImg} alt="Question Icon" className="navbar-question-icon" /></Link>
                    <img onClick={toggleAvatar} src={peopleFill} alt="Avatar Icon" className="navbar-avatar-icon" />
                </div>
            </div>
            <SideSlide isAvatar={false} isMenu={true} isOpen={isMenuOpen}>
                <>
                    <div className='sidebar'>
                        <div id="navbar-white-bar" >
                            <Link to="/doctors" className="navbar-soft"><div>Doktorlar</div></Link>
                            <Link to="/depatments" className="navbar-soft"><div>Birimler</div></Link>
                            <Link to="/diseases" className="navbar-soft"><div>Hastalıklardan Nasıl Korunulur?</div></Link>
                            <Link to="/artificialIntelligence" className="navbar-soft"><div>Yapay Zeka ve Akciğer Hastalıkları</div></Link>
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
                            <img src={peopleFill} className="navbar-avatar-icon" id="navbar-big-avatar" alt="Big Avatar" />
                            <div>Buğra Burak Başer</div>
                            <Link to="/profile" className="navbar-soft"><div id="navbar-link">Profili Düzenle</div></Link>
                            <div id="navbar-avatar-buttons">
                                <div className="navbar-button" id="navbar-logout" onClick={() => navigate('logout')}><Link to="/" className="navbar-soft">Çıkış Yap</Link></div>
                                <div className="navbar-button" id="navbar-return" onClick={toggleAvatar}>Geri Dön</div>
                            </div>
                        </div>
                    </div>
                    <div id='navbar-black-background' onClick={toggleAvatar}></div>
                </>
            </SideSlide>
        </article>
    );
};

export default Navbar;
