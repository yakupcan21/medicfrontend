import "./AdminLoginPage.scss";
import { Reveal } from "../../components/Reveal";
import "../../components/BackgroundMotion.scss";

import BackgroundMotion from "../../components/BackgroundMotion.tsx";
import { Link } from "react-router-dom";
import { useAuth } from '../../components/AuthContext';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

interface AdminLoginPageProps {

}

const AdminLoginPage: React.FC<AdminLoginPageProps> = () => {
    const { setUserId, setIsDoctor, setIsPatient, setIsAdmin } = useAuth();
    const navigate = useNavigate();
    const [idInput, setIdInput] = useState<string>('');
    const [passWordInput, setPassWordInput] = useState<string>('');


    
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
        <div className="admin-login-page-main-container">
            <BackgroundMotion />
            <div className="content-panel">
                <Reveal>
                    <div className="displayed-container">
                        <div className='informations-header'>Admin Girişi</div>
                        <div className='information-type'>Kullanıcı Adı</div>
                        <input type="text" style={{ backgroundColor: '#f4f6f9' }} className="information-input" onChange={(e) => setIdInput(e.target.value)} value={idInput}  placeholder="Kullanıcı Adı" required />
                        <hr style={{ width: '100%' }} />
                        <div className='information-type'>Parola</div>
                        <input type="password" style={{ backgroundColor: '#f4f6f9' }} className="information-input" onChange={(e) => setPassWordInput(e.target.value)} value={passWordInput} placeholder="Parola" required />
                        <hr style={{ width: '100%' }} />
                        <hr />
                        <Link to="/admin/doctors" className='information-button' onClick={() => handleLogin(idInput, passWordInput, false, false)} style={{ width: '130px', marginLeft: '33%', marginBlockStart: '10px' }}>Giriş Yap</Link>
                    </div>
                </Reveal>
            </div>
        </div>
    );
};

export default AdminLoginPage;
