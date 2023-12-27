import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";
import peopleFill from '../assets/peopleFill.png';
import './menu/NavbarComponent.scss';
import './ProfileComponent.scss';
import questionImg from '../assets/questionImg.png';


interface NavbarComponentProps {
    isDoctor: boolean;
    isPatient: boolean;
}

const Profile: React.FC<NavbarComponentProps> = (props) => {
    const { isDoctor, isPatient } = props;

    return (
        <>
            {isDoctor && (
                <div id='profile'>
                    <div id='profile-component'>
                        <img src={peopleFill} className="navbar-avatar-icon" id="navbar-big-avatar" alt="Big Avatar" />
                        <div className='header'>Prof. Dr. Hüsammattin Öztürk</div>
                        <div className='soft' id='department'>Göğüs Hastalıkları Anabilim Dalı</div>
                        <div className='soft' id='hospital'>Ankara Gazi Üniversitesi Tıp Fakültesi Hastanesi</div>
                        <tr>
                            <td>
                                <div className='bold'>22</div>
                                <div className='soft'>Yaş</div>
                            </td>
                        </tr>
                        <tr>
                            <td id='rows'>

                                <div className='bold'>90 kg</div>
                                <div className='soft'>Kilo</div>
                            </td>
                            <td id='rows'>
                                <div className='bold'>183 cm</div>
                                <div className='soft'>Boy</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='update'>Güncelle</div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <div className='bold'>26.87</div>
                                    <img src={questionImg} alt="Question Icon" className="navbar-question-icon" />
                                </div>
                                <div className='soft'>Vücut Kitle İndeksi</div>
                            </td>
                        </tr>

                    </div>
                </div>
            )}
            {isPatient && (
                <div id='profile'>
                    <div id='profile-component'>
                        <img src={peopleFill} className="navbar-avatar-icon" id="navbar-big-avatar" alt="Big Avatar" />
                        <div className='header'>Buğra Burak Başer</div>
                        <tr>
                            <td>
                                <div className='bold'>22</div>
                                <div className='soft'>Yaş</div>
                            </td>
                        </tr>
                        <tr>
                            <td id='rows'>
                                <div className='bold'>90 kg</div>
                                <div className='soft'>Kilo</div>
                            </td>
                            <td id='rows'>
                                <div className='bold'>183 cm</div>
                                <div className='soft'>Boy</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='update'>Güncelle</div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '5px'}}>
                                    <div className='bold'>26.87</div>
                                    <img style={{ marginRight: '0px'}} src={questionImg} alt="Question Icon" className="navbar-question-icon" />
                                </div>
                                <div className='soft'>Vücut Kitle İndeksi</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <div className='soft' id='cardio'>Kardiyovasküler Hastalık Riski</div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div className='bold'>?</div>
                                <img  style={{ marginRight: '0px'}} src={questionImg} alt="Question Icon" className="navbar-question-icon" />
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <div className='update'>Hesapla</div>
                            </td>
                        </tr>


                    </div>
                </div>
            )}

        </>
    );
};

export default Profile;
