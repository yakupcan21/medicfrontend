import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./LoginPage.scss"; // Make sure to adjust the path accordingly
import img from "../../assets/resim.png";
import videoSource from "../../assets/plug.mp4";
import axios, { AxiosResponse } from 'axios';
import { useAuth } from '../../components/AuthContext';
import { useNavigate } from "react-router-dom";

interface LoginPageProps {

}

const LoginPage: React.FC<LoginPageProps> = () => {
    const { setUserId, setIsDoctor, setIsPatient, setIsAdmin } = useAuth();
    const navigate = useNavigate();

    const [signUp, setSignUp] = useState(true);
    const [isNewAccountPatient, setIsNewAccountPatient] = useState(false);

    const [idPatientInput, setIdPatientInput] = useState<string>('');
    const [passWordPatientInput, setPassWordPatientInput] = useState<string>('');
    const [idDoctorInput, setIdDoctorInput] = useState<string>('');
    const [passWordDoctorInput, setPassWordDoctorInput] = useState<string>('');

    const [newIdInput, setNewIdInput] = useState<string>('');
    const [newNameInput, setNewNameInput] = useState<string>('');
    const [newSurnameInput, setNewSurnameInput] = useState<string>('');
    const [newDateInput, setNewDateInput] = useState<string>('');
    const [newPhoneNumInput, setNewPhoneNumInput] = useState<string>('');
    const [newPassWordInput, setNewPassWordInput] = useState<string>('');

    const today = new Date().toISOString().split("T")[0];


    const handleToggleSignUp = () => {
        setSignUp(!signUp);
        setIsNewAccountPatient(false);
    };

    const handleToggleNewAccountPatient = () => {
        setIsNewAccountPatient(!isNewAccountPatient);

    };

    const [isFocused, setIsFocused] = useState(false);

    const handleInputFocus = () => {
        setIsFocused(true);
    };

    const handleInputBlur = () => {
        setIsFocused(false);
    };


    const postData = async () => {
        axios({
            method: 'post',
            url: 'http://localhost:8081/patients/createPatient',
            headers: {},
            data: {
                name: newNameInput,
            }
        }).then((res: AxiosResponse) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }


    const handleRegister = () => {
        console.log("New Patient Data:", {
            id: newIdInput,
            name: newNameInput,
            surname: newSurnameInput,
            dateOfBirth: newDateInput,
            phoneNumber: newPhoneNumInput,
            password: newPassWordInput,
        });


        postData();

    };

    /*const handleLogin = (userId: string, password: string, isDoctor: boolean, isPatient: boolean): void => {
        setUserId(userId);
        setIsDoctor(isDoctor);
        setIsPatient(isPatient);
        setIsAdmin(false);
    };*/

    const handleLogin = async (userId: string, password: string, isDoctor: boolean, isPatient: boolean): Promise<void> => {
        try {
            if (isPatient) {
                axios.post('http://localhost:8081/patients/login', {
                    patientId: userId,
                    patientPassword: password,
                }).then((response) => {
                    const newId = response.data;
                    console.log("giris yapti hasta")
                    setUserId(newId);
                    setIsDoctor(isDoctor);
                    setIsPatient(isPatient);
                    setIsAdmin(false);

                    if (newId != "Invalid credentials!") {
                        navigate("/patient/home");
                    }

                });
            } else if (isDoctor) {
                axios.post('http://localhost:8081/doctors/login', {
                    docId: userId,
                    docPassword: password,
                }).then((response) => {
                    const newId = response.data;
                    console.log("giris yapti doktor")
                    console.log(newId)
                    console.log(userId)
                    console.log(password)

                    setUserId(newId);
                    setIsDoctor(isDoctor);
                    setIsPatient(isPatient);
                    setIsAdmin(false);

                    if (newId != "Invalid credentials!") {
                        navigate("/doctor/home");
                    }

                });

            } else {
                axios.post('http://localhost:8081/admin/login', {
                    adminName: userId,
                    adminPassword: password,
                }).then((response) => {
                    const newId = response.data;
                    console.log("giris yapti admin")
                    setUserId(newId);
                    setIsDoctor(false);
                    setIsPatient(false);
                    setIsAdmin(true);

                    if (newId != "Invalid credentials!") {
                        navigate("/admin/doctors");
                    }
                });

            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <div className="login-page-main-container">
            <div className="displayed-container">
                <div className={`container ${signUp ? 'sign-up-active' : ''}`}>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-left">
                                {signUp && (
                                    <div className="video-container-left">
                                        <video className="video-bg" autoPlay muted loop>
                                            <source src={videoSource} type="video/mp4" />
                                        </video>
                                    </div>
                                )}
                                <button className="invert" id="signIn" onClick={handleToggleSignUp}>
                                    Doktor Girişi
                                </button>
                            </div>
                            <div className="overlay-right">
                                {!signUp && (
                                    <div className="video-container-right">
                                        <video className="video-bg" autoPlay muted loop>
                                            <source src={videoSource} type="video/mp4" />
                                        </video>
                                    </div>
                                )}
                                <button className="invert" id="signUp" onClick={handleToggleSignUp}>
                                    Hasta Girişi
                                </button>
                            </div>
                        </div>
                    </div>
                    {isNewAccountPatient ? (
                        <form className="sign-up" >
                            <img src={img} alt="logo" className="logo" />
                            <h2>Hasta Yeni Kayıt </h2>
                            <h3 className='info'>
                                Acil Sağlık Yardımı ve Acil İhbarlarınız için
                                <br /> Lütfen 112'yi arayınız.
                            </h3>
                            <div className="register-container">
                                <div className="register">
                                    <input type="text" placeholder="TC Kimlik Numarası:" value={newIdInput} onChange={(e) => setNewIdInput(e.target.value)} required />
                                    <div className="name-container">
                                        <input type="text" placeholder="Ad:" value={newNameInput} onChange={(e) => setNewNameInput(e.target.value)} required />
                                        <input type="text" placeholder="Soyad:" value={newSurnameInput} onChange={(e) => setNewSurnameInput(e.target.value)} required />
                                    </div>
                                    <input type="date" placeholder="Doğum Tarihi:" value={newDateInput} onChange={(e) => setNewDateInput(e.target.value)} max={today} required />
                                    <input type="text" placeholder="Telefon No:" value={newPhoneNumInput} onChange={(e) => setNewPhoneNumInput(e.target.value)} required />
                                    <div className="register_2">
                                        <input type="text" placeholder="Şifre:" value={newPassWordInput} onChange={(e) => setNewPassWordInput(e.target.value)} required />
                                        <input type="checkbox" id="KVKK" name="KVKK" />
                                        <label htmlFor="KVKK">KVKK Metni</label>
                                    </div>
                                </div>
                            </div>
                            <button className="yeni-kayıt" onClick={handleRegister}>
                                Kayıt Ol
                            </button>
                            <br />
                            <p className='new-account'>
                                Mevcut hesap ile giriş için{" "}
                                <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold' }} onClick={handleToggleNewAccountPatient}>
                                    tıklayınız
                                </span>.
                            </p>
                        </form>
                    ) : (
                        <>
                            <form className="sign-up">
                                <img src={img} alt="logo" className="logo" />
                                <h2>Hasta Girişi</h2>
                                <h3 className='info'>
                                    Acil Sağlık Yardımı ve Acil İhbarlarınız için
                                    <br /> Lütfen 112'yi arayınız.
                                </h3>
                                <div className="register-container">
                                    <div className="register">
                                        <div className={`floating-label ${isFocused ? 'focused' : ''}`}>
                                            <input
                                                type="text"
                                                onFocus={handleInputFocus}
                                                onBlur={handleInputBlur}
                                                onChange={(e) => setIdPatientInput(e.target.value)}
                                                value={idPatientInput}
                                                required
                                            />
                                            <label htmlFor="tcKimlik">TC Kimlik No:</label>
                                        </div>
                                        <div className="register_2">
                                            <div className={`floating-label ${isFocused ? 'focused' : ''}`}>
                                                <input
                                                    type="text"
                                                    onFocus={handleInputFocus}
                                                    onBlur={handleInputBlur}
                                                    onChange={(e) => setPassWordPatientInput(e.target.value)}
                                                    value={passWordPatientInput}
                                                    required
                                                />
                                                <label className='sifre' htmlFor="sifre">Şifre:</label>
                                            </div>
                                            <input type="checkbox" id="KVKK" name="KVKK" />
                                            <label htmlFor="KVKK">KVKK Metni</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='information-button' onClick={() => handleLogin(idPatientInput, passWordPatientInput, false, true)}>Giriş Yap</div>
                                <p className='new-account'>
                                    Yeni kayıt oluşturmak için{" "}
                                    <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold' }} onClick={handleToggleNewAccountPatient}>
                                        tıklayınız
                                    </span>.
                                </p>
                            </form>
                            <form className="sign-in" action="#" style={{ display: signUp ? 'none' : 'block' }}>
                                <img src={img} alt="logo" className="logo" />
                                <h2>Doktor Girişi</h2>
                                <h3 className='info'>
                                    Acil Sağlık Yardımı ve Acil İhbarlarınız için
                                    <br /> Lütfen 112'yi arayınız.
                                </h3>
                                <div className="register-container-doctor">
                                    <div className="register-doctor">
                                        <div className={`floating-label ${isFocused ? 'focused' : ''}`}>
                                            <input
                                                type="text"
                                                onFocus={handleInputFocus}
                                                onBlur={handleInputBlur}
                                                onChange={(e) => setIdDoctorInput(e.target.value)}
                                                value={idDoctorInput}
                                                required
                                            />
                                            <label htmlFor="tcKimlik">TC Kimlik No:</label>
                                        </div>
                                        <div className="register_2">
                                            <div className={`floating-label ${isFocused ? 'focused' : ''}`}>
                                                <input
                                                    type="text"
                                                    onFocus={handleInputFocus}
                                                    onBlur={handleInputBlur}
                                                    onChange={(e) => setPassWordDoctorInput(e.target.value)}
                                                    value={passWordDoctorInput}
                                                    required
                                                />
                                                <label className='sifre' htmlFor="sifre">Şifre:</label>
                                            </div>
                                            <input type="checkbox" id="KVKK" name="KVKK" />
                                            <label htmlFor="KVKK">KVKK Metni</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="information-button" style={{ marginLeft: "250px" }} onClick={() => handleLogin(idDoctorInput, passWordDoctorInput, true, false)}>Giriş Yap</div>
                                <br />
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LoginPage;