import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";

import peopleFill from '../assets/peopleFill.png';
import questionImg from '../assets/questionImg.png';
import informationImg from '../assets/informationImg.png';

import './menu/NavbarComponent.scss';
import './ProfileComponent.scss';

import { PopUp } from './PopUp';
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
    userId: string;
}

const Profile: React.FC<NavbarComponentProps> = (props) => {
    const { isDoctor, isPatient, userId } = props;
    const [bmiOpen, setBmiOpen] = useState(false);
    const [cardioOpen, setCardioOpen] = useState(false);
    const [updateOpen, setUpdateOpen] = useState(false);
    const [warningHeightToken, setWarningHeightToken] = useState(false);
    const [warningWeightToken, setWarningWeightToken] = useState(false);
    const [heightInput, setHeightInput] = useState<string>('');
    const [weightInput, setWeightInput] = useState<string>('');

    const profileName = "Buğra Burak Başer";
    const profileAge = "22";
    const profileTitle = "Prof. Dr.";
    const profileDepartment = "Göğüs Hastalıkları Anabilim Dalı";
    const profileHospital = "Ankara Gazi Üniversitesi Tıp Fakültesi Hastanesi";
    const [profileWeight, setProfileWeight] = useState<string>("92");
    const [profileHeight, setProfileHeight] = useState<string>("183");
    const [profileBodyMassIndex, setProfileBodyMassIndex] = useState<string>("27.47");

    const [data, setData] = useState<Patient[] | null>();
    const [data2, setData2] = useState<Doctor | null>();
  
    useEffect(() => {
      axios.get(`http://localhost:8081/patients/patient/${userId}`).then((response) => {
        setData(response.data)
        console.log(response.data);
      });
    }, [])
  
    useEffect(() => {
      axios.get(`http://localhost:8081/doctors/doctor/${userId}`).then((response) => {
        setData2(response.data)
        console.log(response.data);
      });
    }, [])

    const bmiPopUpToggle = () => {
        setBmiOpen(!bmiOpen);
        if (cardioOpen) {
            setCardioOpen(!cardioOpen);
        }
        if (updateOpen) {
            setUpdateOpen(!updateOpen);
        }
    };

    const cardioPopUpToggle = () => {
        setCardioOpen(!cardioOpen);
        if (bmiOpen) {
            setBmiOpen(!bmiOpen)
        }
        if (updateOpen) {
            setUpdateOpen(!updateOpen);
        }
    };

    const updatePopUpToggle = () => {
        setUpdateOpen(!updateOpen);
        setWarningHeightToken(false);
        setWarningWeightToken(false);
        if (bmiOpen) {
            setBmiOpen(!bmiOpen);
        };
        if (cardioOpen) {
            setCardioOpen(!cardioOpen);
        }
    };

    const updateBodyMassConsts = () => {
        const regex = /^\d+$/;
        setWarningHeightToken(false);
        setWarningWeightToken(false);
        
        if (regex.test(weightInput) && regex.test(heightInput)) {
            setProfileHeight(heightInput);
            setProfileWeight(weightInput);
            BodyMassCalculate(weightInput, heightInput);
        } else {
            if (!regex.test(weightInput)) {
                setWarningWeightToken(true);
                setWeightInput('');
            }
            if (!regex.test(heightInput)) {
                setWarningHeightToken(true);
                setHeightInput('');
            }
        }
    };


    const BodyMassCalculate = (weightInput: string, heightInput: string) => {
        const weight = parseFloat(weightInput);
        const height = parseFloat(heightInput) / 100;

        if (!isNaN(weight) && !isNaN(height) && height !== 0) {
            const bmi = (weight / (height * height)).toFixed(2);
            setProfileBodyMassIndex(bmi);
        } else {
            setProfileBodyMassIndex("00.00");
        }
    };

    return (
        <>
            {isDoctor && (
                <div className='profile'>
                    <div id='profile-component'>
                        <img src={peopleFill} className="navbar-avatar-icon" id="navbar-big-avatar" alt="Big Avatar" />
                        <div className='header'>{data2?.docTitle} {data2?.docName} {data2?.docSurname}</div>
                        <div className='soft' id='department'>{data2?.docDepartment}</div>
                        <div className='soft' id='hospital'>{data2?.docHospital}</div>
                        <tr>
                            <td>
                                <div className='bold'>{data2?.docAge}</div>
                                <div className='soft'>Yaş</div>
                            </td>
                        </tr>
                        <tr>
                            <td id='rows'>
                                <div className='bold'>{data2?.docWeight} kg</div>
                                <div className='soft'>Kilo</div>
                            </td>
                            <td id='rows'>
                                <div className='bold'>{data2?.docHeight} cm</div>
                                <div className='soft'>Boy</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='update' onClick={updatePopUpToggle}>Güncelle</div>
                                <PopUp isOpen={updateOpen}>
                                    <div className='profile'>
                                        <div className='pop-up' id='update'>
                                            <h1 className='bold'>Güncel Boy ve Kilonuzu Giriniz</h1>
                                            <input type="text" placeholder="Boyunuz:" id={`${warningHeightToken ? 'warning' : ''}`} value={heightInput} onChange={(e) => setHeightInput(e.target.value)} />
                                            <div className='soft' id='kg' style={{ position: 'absolute', marginLeft: '250px', marginTop: '126px' }}>kg</div>
                                            <input type="text" placeholder="Kilonuz:" id={`${warningWeightToken ? 'warning' : ''}`} value={weightInput} onChange={(e) => setWeightInput(e.target.value)} />
                                            <div className='soft' id='cm' style={{ position: 'absolute', marginLeft: '250px', marginTop: '71px' }}>cm</div>
                                            <div id="multiple-buttons">
                                                <div className='navbar-button' id='pop-up-return' onClick={updatePopUpToggle}>Geri Dön</div>
                                                <div className='navbar-button' id='pop-up-save' onClick={updateBodyMassConsts}>Kaydet</div>
                                            </div>
                                        </div>
                                    </div>
                                </PopUp>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <div className='bold'>{profileBodyMassIndex}</div>
                                    <img src={informationImg} alt="Question Icon" className="information-icon" onClick={bmiPopUpToggle} />
                                    <PopUp isOpen={bmiOpen}>
                                        <div className='profile'>
                                            <div className='pop-up' id='about'>
                                                <h1 className='bold'>Vücut Kütle İndeksi Nedir?</h1>
                                                <p className='soft'> Kilonun boy ile oranını ölçen bir endekstir.
                                                    18.5-24.9 arası normal, 25-29.9 arası hafiften ağır obez,
                                                    30 ve üzeri ise obez olarak sınıflandırılır.</p>
                                                <div className='navbar-button' id='pop-up-return' onClick={bmiPopUpToggle}>Geri Dön</div>
                                            </div>
                                        </div>
                                    </PopUp>
                                </div>
                                <div className='soft'>Vücut Kitle İndeksi</div>
                            </td>
                        </tr>
                    </div>
                </div>
            )}
            {isPatient && (
                <div className='profile'>
                    <div id='profile-component'>
                        <img src={peopleFill} className="navbar-avatar-icon" id="navbar-big-avatar" alt="Big Avatar" />
                        <div className='header'>{data?.[0].patientName} {data?.[0].patientSurname}</div>
                        <tr>
                            <td>
                                <div className='bold'>{data?.[0].patientAge}</div>
                                <div className='soft'>Yaş</div>
                            </td>
                        </tr>
                        <tr>
                            <td id='rows'>
                                <div className='bold'>{data?.[0].patientWeight} kg</div>
                                <div className='soft'>Kilo</div>
                            </td>
                            <td id='rows'>
                                <div className='bold'>{data?.[0].patientHeight} cm</div>
                                <div className='soft'>Boy</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='update' onClick={updatePopUpToggle}>Güncelle</div>
                                <PopUp isOpen={updateOpen}>
                                    <div className='profile'>
                                        <div className='pop-up' id='update'>
                                            <h1 className='bold'>Güncel Boy ve Kilonuzu Giriniz</h1>
                                            <input type="text" placeholder="Boyunuz:" id={`${warningHeightToken ? 'warning' : ''}`} value={heightInput} onChange={(e) => setHeightInput(e.target.value)} />
                                            <div className='soft' id='kg' style={{ position: 'absolute', marginLeft: '250px', marginTop: '125px' }}>kg</div>
                                            <input type="text" placeholder="Kilonuz:" id={`${warningWeightToken ? 'warning' : ''}`} value={weightInput} onChange={(e) => setWeightInput(e.target.value)} />
                                            <div className='soft' id='cm' style={{ position: 'absolute', marginLeft: '250px', marginTop: '69px' }}>cm</div>
                                            <div id="multiple-buttons">
                                                <div className='navbar-button' id='pop-up-return' onClick={updatePopUpToggle}>Geri Dön</div>
                                                <div className='navbar-button' id='pop-up-save' onClick={updateBodyMassConsts}>Kaydet</div>
                                            </div>
                                        </div>
                                    </div>
                                </PopUp>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '5px' }}>
                                    <div className='bold'>{profileBodyMassIndex}</div>
                                    <img style={{ marginRight: '0px' }} src={informationImg} alt="Question Icon" className="information-icon" onClick={bmiPopUpToggle} />
                                    <PopUp isOpen={bmiOpen}>
                                        <div className='profile'>
                                            <div className='pop-up' id='about'>
                                                <h1 className='bold'>Vücut Kütle İndeksi Nedir?</h1>
                                                <p className='soft'> Kilonun boy ile oranını ölçen bir endekstir.
                                                    18.5-24.9 arası normal, 25-29.9 arası hafiften ağır obez,
                                                    30 ve üzeri ise obez olarak sınıflandırılır.</p>
                                                <div className='navbar-button' id='pop-up-return' onClick={bmiPopUpToggle} >Geri Dön</div>
                                            </div>
                                        </div>
                                    </PopUp>
                                </div>
                                <div className='soft'>Vücut Kitle İndeksi</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='soft' id='cardio'>Kardiyovasküler Hastalık Riski</div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <div className='bold'>?</div>
                                    <img style={{ marginRight: '0px' }} src={informationImg} alt="Question Icon" className="information-icon" onClick={cardioPopUpToggle} />
                                    <PopUp isOpen={cardioOpen}>
                                        <div className='profile'>
                                            <div className='pop-up' id='about'>
                                                <h1 className='bold'>Kardiyovasküler Hastalık Riski</h1>
                                                <p className='soft'> Ailenizde veya yakın akrabalarınızda kalp rahatsızlıkları varsa,
                                                    uzman bir doktora başvurmanız önemlidir.
                                                    Erken tanı ile sağlıklı bir yaşam için adım atabilirsiniz.</p>
                                                <div className='navbar-button' id='pop-up-return' onClick={cardioPopUpToggle}>Geri Dön</div>
                                            </div>
                                        </div>
                                    </PopUp>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='update' onClick={cardioPopUpToggle}>Hesapla</div>
                            </td>
                        </tr>
                    </div>
                </div>
            )}
        </>
    );
};

export default Profile;
