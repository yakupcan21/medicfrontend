import "./AdminLoginPage.scss";
import { Reveal } from "../../components/Reveal";
import "../../components/BackgroundMotion.scss";

import BackgroundMotion from "../../components/BackgroundMotion.tsx";
import { Link } from "react-router-dom";

function AdminLoginPage() {
    return (
        <div className="admin-login-page-main-container">
            <BackgroundMotion />
            <div className="content-panel">
                <Reveal>
                    <div className="displayed-container">
                        <div className='informations-header'>Admin Girişi</div>
                        <div className='information-type'>Kullanıcı Adı</div>
                        <input type="text" style={{ backgroundColor: '#f4f6f9' }} className="information-input" placeholder="Kullanıcı Adı" required />
                        <hr style={{ width: '100%' }} />
                        <div className='information-type'>Parola</div>
                        <input type="password" style={{ backgroundColor: '#f4f6f9' }} className="information-input" placeholder="Parola" required />
                        <hr style={{ width: '100%' }} />
                        <hr />
                        <Link to="/admin/doctors" className='information-button' style={{ width: '130px', marginLeft: '33%', marginBlockStart: '10px'}}>Giriş Yap</Link>
                    </div>
                </Reveal>
            </div>
        </div>
    );
};

export default AdminLoginPage;
