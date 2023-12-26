import React, { useState } from 'react';

import questionImg from '../assets/questionImg.png';
import peopleFill from '../assets/peopleFill.png';

import '../styles/NavbarComponent.scss'; // Make sure to adjust the path accordingly

const NavbarComponent: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [isMenuActive, setMenuActive] = useState(false); // New state for the menu

    const toggleMenu = () => {
        setMenuActive(!isMenuActive);
    };

    const toggleProfile = () => {
        console.log('Toggle profile clicked');
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const navigate = (page: string) => {
        console.log(`Navigating to ${page}`);
    };

    return (
        <article>
        <div className={`navbar ${isMenuActive ? 'menu-active' : ''}`}>
            <div className="navbar-menu-icon" onClick={toggleMenu}>
            ☰
            </div>
            <div className="navbar-bold-font" onClick={() => navigate('Home')}>
            anasayfa
            </div>
            <div id="navbar-right-align">
            <div onClick={() => navigate('about')}>hakkında</div>
            <img
                onClick={toggleModal}
                src={questionImg}
                className="navbar-question-icon"
                alt="Question"
            />
            <img
                onClick={toggleProfile}
                src={peopleFill}
                className="navbar-avatar-icon"
                alt="Avatar"
            />
            </div>
        </div>
        {showModal && (
            <div className="modal">
            <p>Hello from the modal!</p>
            <button onClick={toggleModal}>Close</button>
            </div>
        )}
        </article>
    );
};

export default NavbarComponent;
