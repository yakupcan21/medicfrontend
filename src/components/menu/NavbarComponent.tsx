import React, { useEffect, useState } from 'react';
import './NavbarComponent.scss';  // Stil dosyasını ekleyin
import questionImg from '../../assets/questionImg.png';
import peopleFill from '../../assets/peopleFill.png';
import { SideSlide } from "../SideSlide";
import { Link } from 'react-router-dom';
import axios from 'axios';

interface Doctor {
    docId: number;
    docName: string;
    docSurname: string;
    docDateOfBirth: string;
    docPhoneNo: string;
    docEmail: string;
    docPassword: string;
    docAge: number;
    docHeight: number;
    docWeight: number;
    docBmi: number;
    docTitle: string;
    docDepartment: string;
    docHospital: string;
  }
  
  interface Patient {
    patientId: number;
    patientName: string;
    patientSurname: string;
    patientDateOfBirth: string;
    patientPhoneNo: string;
    patientEmail: string;
    patientAge: number;
    patientHeight: number;
    patientWeight: number;
    patientBmi: number;
    reportCount: number;
    reportLastVisit: string;
  }
  

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

    const [data, setData] = useState<Patient[] | null>();
    const [data2, setData2] = useState<Doctor | null>();
    const PatientIdInput = 258754948;
    const DoctorIdInput = 258754948;
  
    useEffect(() => {
      axios.get(`http://localhost:8081/patients/patient/${PatientIdInput}`).then((response) => {
        setData(response.data)
        console.log(response.data);
      });
    }, [])
  
    useEffect(() => {
      axios.get(`http://localhost:8081/doctors/doctor/${DoctorIdInput}`).then((response) => {
        setData2(response.data)
        console.log(response.data);
      });
    }, [])

    return (
        <div className='navbar-parent-element'>
            <div className="navbar">
                <div className="navbar-menu-icon" onClick={toggleMenu}>☰</div>
                {isAdmin && (
                    <Link to="/admin" className="navbar-bold-font"><div>Anasayfa</div></Link>
                )}
                {!isAdmin && (
                    <div><Link to={isDoctor === true ? "/doctor/home" : "/patient/home"} className="navbar-bold-font">Anasayfa</Link></div>
                )}
                {isDoctor && (
                    <>
                        <Link to="/doctor/patients" className="navbar-soft"><div>Hastalar</div></Link>
                        <Link to="/doctor/reports" className="navbar-soft"><div>Raporlar</div></Link>
                    </>
                )}
                {isPatient && (
                    <Link to="/patient/reports" className="navbar-soft"><div>Raporlarım</div></Link>
                )}
                {isAdmin && (
                    <Link to="/admin/doctors" className="navbar-soft"><div>Doktorlar</div></Link>
                )}
                <div id="navbar-right-align">
                    {!isAdmin && (
                        <>
                            <Link to={isDoctor === true ? "/doctor/about" : "/patient/about"} className="navbar-soft"><div>Hakkında</div></Link>

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
                                    <Link to={isDoctor === true ? "/doctor/diseases" : "/patient/diseases"} className="navbar-soft"><div>Hastalıklardan Nasıl Korunulur?</div></Link>
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
                                    {isDoctor && <>
                                        <div>{data2?.docTitle} {data2?.docName} {data2?.docSurname}</div>
                                        <div>{data2?.docEmail}</div>
                                    </>}
                                    {isPatient && <>
                                        <div>{data?.[0].patientName} {data?.[0].patientSurname} </div>
                                        <div>{data?.[0].patientEmail}</div>
                                    </>}
                                    <Link to={isDoctor === true ? "/doctor/profile" : "/patient/profile"} className="navbar-soft"><div id="navbar-link">Profili Düzenle</div></Link>
                                    <div id="navbar-avatar-buttons">
                                        <div className="navbar-button" id="navbar-logout"><Link to="/" className="navbar-soft">Çıkış Yap</Link></div>
                                        <div className="navbar-button" id="navbar-return" onClick={toggleAvatar}>Geri Dön</div>
                                    </div>
                                </>
                            )}
                            {isAdmin && (<>
                                <img src={peopleFill} className="navbar-avatar-icon" id="navbar-big-avatar" alt="Big Avatar" />
                                <div>Admin</div>
                                <div id="navbar-avatar-buttons">
                                    <div className="navbar-button" id="navbar-logout"> <Link to="/admin/login" className="navbar-soft">Çıkış Yap</Link></div>
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
